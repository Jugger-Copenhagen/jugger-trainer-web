import config from '@/config';
import { getRandomImages } from '@/lib/exercise';
import {
  Exercise,
  ExerciseFirebase,
  ExerciseSearchParams,
  FirebaseId,
  Tag,
  TagCreate,
} from '@/lib/types';
import { ExerciseEditFormValidated, ExerciseNewFormValidated } from '@/routes/actions';
import { initializeApp } from 'firebase/app';
import { getAuth, User } from 'firebase/auth';
import { child, get, getDatabase, push, ref as realtimeRef, set, update } from 'firebase/database';
import { DocumentData } from 'firebase/firestore';
import { getDownloadURL, getStorage, listAll, ref } from 'firebase/storage';
import { differenceBy } from 'lodash-es';

const app = initializeApp(config.firebase);
const db = getDatabase(app);
const storage = getStorage();
const storageRef = ref(storage);

export const auth = getAuth(app);

// === IMAGES === //

const IMAGE_RESOURCE = 2131165628;
const IMAGE_RESOURCE_SMALL = 2131165629;

// === TAGS === //

let tagsPromise: Promise<Tag[]> | null = null;

function validateTag(data: DocumentData): Tag {
  // TODO: actually validate this in some way
  return data as Tag;
}

async function getTagsImpl(): Promise<Tag[]> {
  const querySnapshot = await get(child(realtimeRef(db), 'tags'));
  const queryResult = querySnapshot.val() as Record<FirebaseId, DocumentData>;

  return Object.values(queryResult).map((data) => validateTag(data));
}

export async function getTags(): Promise<Tag[]> {
  if (tagsPromise !== null) {
    return tagsPromise;
  }

  tagsPromise = getTagsImpl();
  return tagsPromise;
}

export async function getTagsByIds(tagIDs: FirebaseId[]): Promise<Tag[]> {
  const tagsAll = await getTags();
  const tagsById = new Map(tagsAll.map((tag) => [tag.tagID, tag]));

  const tags = [];
  for (const tagID of tagIDs) {
    const tag = tagsById.get(tagID);
    if (tag !== undefined) {
      tags.push(tag);
    }
  }

  return tags;
}

export async function createTag(tagCreate: TagCreate) {
  const tagRef = await push(child(realtimeRef(db), 'tags'));

  if (tagRef.key === null) {
    throw new Error('Failed to create tag: tagRef key is null');
  }

  const tag: Tag = {
    tagID: tagRef.key,
    ...tagCreate,
  };

  set(tagRef, tag);
  return tag;
}

export async function associateTagWithExercise(tag: Tag, eid: FirebaseId) {
  const tagRef = child(realtimeRef(db), `tags/${tag.tagID}`);

  const exerciseIds = new Set<FirebaseId>(tag.associatedExerciseIds);
  exerciseIds.add(eid);

  const tagUpdate = {
    ...tag,
    associatedExerciseIds: Array.from(exerciseIds),
  };

  set(tagRef, tagUpdate);
  return tagUpdate;
}

export async function disassociateTagWithExercise(tag: Tag, eid: FirebaseId) {
  const tagRef = child(realtimeRef(db), `tags/${tag.tagID}`);

  const exerciseIds = new Set<FirebaseId>(tag.associatedExerciseIds);
  exerciseIds.delete(eid);

  const tagUpdate = {
    ...tag,
    associatedExerciseIds: Array.from(exerciseIds),
  };

  set(tagRef, tagUpdate);
  return tagUpdate;
}

// === EXERCISES === //

function validateExercise(data: DocumentData, tags: Tag[], images: string[]): Exercise {
  const exercise = data as Omit<Exercise, 'tags'> & { tagIDs: FirebaseId[] };

  const tagsById = new Map(tags.map((tag) => [tag.tagID, tag]));
  const tagIDs = new Set<FirebaseId>(exercise.tagIDs ?? []);
  const tagsForExercise = [];

  for (const tagID of tagIDs) {
    const tag = tagsById.get(tagID);
    if (tag !== undefined) {
      tagsForExercise.push(tag);
    }
  }

  tagsForExercise.sort((a, b) => a.tag.localeCompare(b.tag));

  const randomImages = getRandomImages(images);

  return {
    ...exercise,
    tags: tagsForExercise,
    images: randomImages,
  };
}

export async function searchExercises(searchParams: ExerciseSearchParams): Promise<Exercise[]> {
  const tags = await getTags();
  const images = await getAllImages();

  const querySnapshot = await get(child(realtimeRef(db), 'exercises'));
  const queryResult = querySnapshot.val() as Record<FirebaseId, DocumentData>;

  /*
   * Now we filter exercises client-side based on the search parameters.
   */
  return Object.values(queryResult)
    .map((data) => validateExercise(data, tags, images))
    .filter((exercise) => {
      if (exercise.name === undefined) {
        /*
         * This shouldn't happen, but: one of the exercises in our existing database appears to
         * be missing nearly all its fields somehow.  Until we remove that from database, we'll
         * need this workaround.
         */
        return false;
      }

      if (searchParams.tagIDs.length > 0) {
        if (!exercise.tags.some((tag: Tag) => searchParams.tagIDs.includes(tag.tagID))) {
          return false;
        }
      }

      if (searchParams.exertionLevel !== undefined) {
        if (exercise.exertionLevel !== searchParams.exertionLevel) {
          return false;
        }
      }

      if (searchParams.name !== undefined) {
        if (!exercise.name.toLowerCase().includes(searchParams.name.toLowerCase())) {
          return false;
        }
      }

      if (searchParams.players !== undefined) {
        if (exercise.playersMin > searchParams.players) {
          return false;
        }

        if (exercise.playersMax < searchParams.players) {
          return false;
        }
      }

      return true;
    })
    .toSorted((a, b) => a.name.localeCompare(b.name));
}

export async function getExerciseById(eid: FirebaseId) {
  const querySnapshot = await get(child(realtimeRef(db), `exercises/${eid}`));
  if (!querySnapshot.exists()) {
    return null;
  }

  const queryResult = querySnapshot.val() as DocumentData;

  const tags = await getTagsByIds(queryResult.tagIDs ?? []);
  const images = await getAllImages();

  return validateExercise(queryResult, tags, images);
}

export async function randomExercise(searchParams: ExerciseSearchParams) {
  const exercises = await searchExercises(searchParams);
  if (exercises.length === 0) {
    return null;
  }

  const i = Math.floor(Math.random() * exercises.length);
  return exercises[i];
}

export async function createExercise(user: User, form: ExerciseNewFormValidated) {
  const {
    exertionLevel,
    howToPlay,
    name,
    originCountry,
    playersMin,
    playersMax,
    tags: tagsSubmitted,
  } = form;

  // 1) Create new tags
  const tagsToCreate: string[] = [];
  const tagIDsExisting: FirebaseId[] = [];

  for (const tag of tagsSubmitted) {
    const [tagType, tagValue] = tag.split(':');
    if (tagType === 's') {
      tagsToCreate.push(tagValue);
    } else if (tagType === 't') {
      tagIDsExisting.push(tagValue);
    }
  }

  const tagsExisting = await getTagsByIds(tagIDsExisting);

  const tagsToCreatePromises = tagsToCreate.map((tag) =>
    createTag({ tag, associatedExerciseIds: [] })
  );
  const tagsCreated = await Promise.all(tagsToCreatePromises);

  let tags = [...tagsExisting, ...tagsCreated];
  const tagIDs = tags.map((tag) => tag.tagID);

  // 2) create exercise and attach tags to it
  const exerciseRef = await push(child(realtimeRef(db), 'exercises'));

  if (exerciseRef.key === null) {
    throw new Error('Failed to create exercise: exerciseRef key is null');
  }

  const exerciseFirebase: ExerciseFirebase = {
    created: new Date().valueOf(),
    createdByName: user.displayName ?? user.email ?? 'Some jugger',
    createdByUID: user.uid,
    eid: exerciseRef.key,
    exertionLevel,
    howToPlay,
    imageResource: IMAGE_RESOURCE,
    imageResourceSmall: IMAGE_RESOURCE_SMALL,
    name,
    originCountry,
    playersMax,
    playersMin,
    tagIDs,
  };

  set(exerciseRef, {
    ...exerciseFirebase,
  });

  // 3) set exercise EID in tags associated exercise IDs
  const tagAssociatePromises = tags.map((tag) =>
    associateTagWithExercise(tag, exerciseFirebase.eid)
  );
  tags = await Promise.all(tagAssociatePromises);

  // 4) return created exercise
  const exercise = {
    ...exerciseFirebase,
    tags,
    images: getRandomImages(await getAllImages()),
  };

  return exercise;
}

export async function updateExercise(exercise: Exercise, form: ExerciseEditFormValidated) {
  const { exertionLevel, howToPlay, name, playersMin, playersMax, tags: tagsSubmitted } = form;

  // 1) create new tags
  const tagsToCreate: string[] = [];
  const tagIDsExisting: FirebaseId[] = [];

  for (const tag of tagsSubmitted) {
    const [tagType, tagValue] = tag.split(':');
    if (tagType === 's') {
      tagsToCreate.push(tagValue);
    } else if (tagType === 't') {
      tagIDsExisting.push(tagValue);
    }
  }

  const tagsExisting = await getTagsByIds(tagIDsExisting);

  const tagsToCreatePromises = tagsToCreate.map((tag) =>
    createTag({ tag, associatedExerciseIds: [] })
  );
  const tagsCreated = await Promise.all(tagsToCreatePromises);

  let tags = [...tagsExisting, ...tagsCreated];
  const tagIDs = tags.map((tag) => tag.tagID);

  // 2) remove exercise EID from tags no longer associated with exercise
  const tagsToRemove = differenceBy(exercise.tags, tags, (tag) => tag.tagID);

  const tagRemovePromises = tagsToRemove.map((tag) =>
    disassociateTagWithExercise(tag, exercise.eid)
  );
  await Promise.all(tagRemovePromises);

  // 3) update exercise with new fields and tag list
  const exerciseRef = child(realtimeRef(db), `exercises/${exercise.eid}`);

  update(exerciseRef, {
    exertionLevel,
    howToPlay,
    name,
    playersMax,
    playersMin,
    tagIDs,
  });

  // 4) set exercise EID in tags associated with exercise
  const tagAssociatePromises = tags.map((tag) => associateTagWithExercise(tag, exercise.eid));
  tags = await Promise.all(tagAssociatePromises);

  // 5) return updated exercise
  const updatedExercise = {
    ...exercise,
    exertionLevel,
    howToPlay,
    name,
    playersMax,
    playersMin,
    tags,
  };

  return updatedExercise;
}

// === FAVOURITES === //

export async function favoriteExercise(/* eid: FirebaseId */) {
  // TODO: this
}

export async function unfavoriteExercise(/* eid: FirebaseId */) {
  // TODO: this
}

// === IMAGES === //

export async function getAllImages() {
  // someday, this would do something else
  const sampleImageFolderRef = ref(storageRef, 'samples/');
  const allThaShit = await listAll(sampleImageFolderRef);
  const allImagesUrls = await Promise.all(
    allThaShit.items.map((itemRef) => getDownloadURL(itemRef))
  );
  return allImagesUrls;
}
