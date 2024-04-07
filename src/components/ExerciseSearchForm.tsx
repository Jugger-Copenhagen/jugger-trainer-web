import { ExerciseSearchParams, Tag } from '@/lib/types';
import { Autocomplete, Button, Grid, TextField } from '@mui/material';
import { useState } from 'react';
import { Form } from 'react-router-dom';

type ExerciseSearchFormProps = {
  params: ExerciseSearchParams;
  tags: Tag[];
};

type ExerciseSearchOption = {
  label: string;
  value: string;
};

function getOptionForTag({ tag, tagID }: Tag): ExerciseSearchOption {
  return { label: `Tag: ${tag}`, value: tagID };
}

function getSearchDefaultValue(params: ExerciseSearchParams, tags: Tag[]) {
  const defaultValue: (string | ExerciseSearchOption)[] = [];

  params.tagIDs.forEach((tagID) => {
    const tag = tags.find((tag) => tag.tagID === tagID);
    if (tag) {
      defaultValue.push(getOptionForTag(tag));
    }
  });

  if (params.name) {
    defaultValue.push(params.name);
  }

  return defaultValue;
}

export default function ExerciseSearchForm({ params, tags }: ExerciseSearchFormProps) {
  const searchDefaultValue = getSearchDefaultValue(params, tags);
  const [searchValue, setSearchValue] =
    useState<(string | ExerciseSearchOption)[]>(searchDefaultValue);

  const { name, tagIDs, exertionLevel, playersMin, playersMax } = params;

  const searchOptions = tags
    .map(getOptionForTag)
    .toSorted((a, b) => a.label.localeCompare(b.label));

  function handleSearchChange(
    _evt: React.SyntheticEvent,
    value: (string | ExerciseSearchOption)[]
  ) {
    setSearchValue(value);
  }

  return (
    <Form>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Autocomplete
            defaultValue={searchDefaultValue}
            freeSolo
            multiple
            options={searchOptions}
            renderInput={(inputProps) => (
              <TextField {...inputProps} label="Search" placeholder="Search by name or tags" />
            )}
            size="small"
            onChange={handleSearchChange}
          />
          {searchValue.map((value) => {
            if (typeof value === 'string') {
              return <input key={value} name="name" type="hidden" value={value} />;
            }

            return <input key={value.value} name="tagIDs" type="hidden" value={value.value} />;
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button type="submit" variant="contained">
            Search
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
}
