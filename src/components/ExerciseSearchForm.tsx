import { exertionLevelHumanReadable } from '@/lib/copy';
import { EXERTION_LEVELS, ExerciseSearchParams, Tag } from '@/lib/types';
import {
  Autocomplete,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { Form } from 'react-router-dom';

const SELECT_VALUE_ANY = '*';

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
  const [exertionLevel, setExertionLevel] = useState(params.exertionLevel ?? SELECT_VALUE_ANY);

  const searchOptions = tags
    .map(getOptionForTag)
    .toSorted((a, b) => a.label.localeCompare(b.label));

  function handleClearAll() {
    // TODO: actually clear all
    alert('TODO: actually clear all');
  }

  function handleExertionLevelChange(evt: SelectChangeEvent<string>) {
    setExertionLevel(evt.target.value);
  }

  function handleSearchChange(
    _evt: React.SyntheticEvent,
    value: (string | ExerciseSearchOption)[]
  ) {
    setSearchValue(value);
  }

  return (
    <Form>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
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
        <Grid item xs={12} md={2}>
          <FormControl fullWidth>
            <InputLabel id="label_exertion_level">Exertion Level</InputLabel>
            <Select
              defaultValue={exertionLevel}
              fullWidth
              label="Exertion Level"
              labelId="label_exertion_level"
              name={exertionLevel === SELECT_VALUE_ANY ? undefined : 'exertionLevel'}
              size="small"
              onChange={handleExertionLevelChange}
            >
              <MenuItem value={SELECT_VALUE_ANY}>Any</MenuItem>
              {EXERTION_LEVELS.map((exertionLevel) => (
                <MenuItem key={exertionLevel} value={exertionLevel}>
                  {exertionLevelHumanReadable(exertionLevel)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={2}>
          <Stack alignItems="center" direction="row" spacing={1}>
            <Button type="submit" variant="contained">
              Search
            </Button>

            <Button variant="outlined" onClick={handleClearAll}>
              Clear All
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Form>
  );
}
