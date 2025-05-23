import { Exercise, ExerciseCreate } from '@/lib/types';
import { Autocomplete, FormControl, TextField } from '@mui/material';
import { useState } from 'react';

type ExerciseTagEditorProps = {
  exercise: Exercise | ExerciseCreate;
};

export default function ExerciseTagEditor({ exercise }: ExerciseTagEditorProps) {
  const [tags, setTags] = useState(exercise.tags.map((tag) => `tag:${tag.tagID}`));

  return (
    <FormControl fullWidth>
      <Autocomplete
        freeSolo
        multiple
        options={[]}
        value={tags}
        onChange={(_evt, newValue) => {
          setTags(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            name="tags"
            label="Skills and Equipment"
            placeholder="Type to search..."
            variant="outlined"
            fullWidth
          />
        )}
      />
    </FormControl>
  );
}
