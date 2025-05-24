import { Exercise, ExerciseCreate, Tag } from '@/lib/types';
import { Autocomplete, FormControl, TextField } from '@mui/material';
import { useState } from 'react';

type ExerciseTagEditorProps = {
  exercise: Exercise | ExerciseCreate;
  tags: Tag[];
};

export default function ExerciseTagEditor({ exercise, tags }: ExerciseTagEditorProps) {
  const [value, setValue] = useState<(string | Tag)[]>(exercise.tags);

  const options = tags.toSorted((a, b) => a.tag.localeCompare(b.tag));

  return (
    <FormControl fullWidth>
      <Autocomplete
        autoComplete
        freeSolo
        getOptionLabel={(option) => (typeof option === 'string' ? option : option.tag)}
        multiple
        noOptionsText="No tags found"
        options={options}
        value={value}
        onChange={(_evt, newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            fullWidth
            label="Skills and Equipment"
            name="tags"
            placeholder="Type to search or add..."
            variant="outlined"
          />
        )}
      />
    </FormControl>
  );
}
