import { Exercise, ExerciseCreate, Tag } from '@/lib/types';
import { Autocomplete, FormControl, TextField } from '@mui/material';
import { useState } from 'react';

type ExerciseTagEditorProps = {
  exercise: Exercise | ExerciseCreate;
};

export default function ExerciseTagEditor({ exercise }: ExerciseTagEditorProps) {
  const [tags, setTags] = useState(exercise.tags);
  const [options, setOptions] = useState<Tag[]>([]);

  return (
    <FormControl fullWidth>
      <Autocomplete
        autoComplete
        filterOptions={(x) => x}
        getOptionLabel={(option) => option.tag}
        multiple
        options={options}
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
      <pre>{JSON.stringify(tags, null, 2)}</pre>
    </FormControl>
  );
}
