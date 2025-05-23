import { Exercise, ExerciseCreate, Tag } from '@/lib/types';
import { Autocomplete, debounce, FormControl, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useFetcher } from 'react-router-dom';

type ExerciseTagEditorProps = {
  exercise: Exercise | ExerciseCreate;
};

export default function ExerciseTagEditor({ exercise }: ExerciseTagEditorProps) {
  const fetcherTags = useFetcher<Tag[]>();

  const [tags, setTags] = useState(exercise.tags);
  const [options, setOptions] = useState<Tag[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchTags = debounce(async (inputValue: string) => {
    setLoading(true);

    const searchParams = new URLSearchParams();
    searchParams.set('tag', inputValue);

    fetcherTags.load(`/tags?${searchParams.toString()}`);
  }, 500);

  useEffect(() => {
    if (!loading) {
      return;
    }

    if (inputValue === '') {
      setOptions([]);
      return;
    }

    fetchTags(inputValue);
  }, [fetchTags, inputValue, loading]);

  useEffect(() => {
    if (fetcherTags.data === undefined) {
      return;
    }

    const tags = fetcherTags.data;

    setOptions(tags);
    setLoading(false);
  }, [fetcherTags.data]);

  return (
    <FormControl fullWidth>
      <Autocomplete
        autoComplete
        filterOptions={(x) => x}
        getOptionLabel={(option) => option.tag}
        multiple
        noOptionsText="No tags found"
        options={options}
        value={tags}
        onChange={(_evt, newValue) => {
          setTags(newValue);
        }}
        onInputChange={(_evt, newInputValue) => {
          setInputValue(newInputValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            name="tags"
            label="Skills and Equipment"
            placeholder="Type to search or add..."
            variant="outlined"
            fullWidth
          />
        )}
      />
      <pre>{JSON.stringify(tags, null, 2)}</pre>
    </FormControl>
  );
}
