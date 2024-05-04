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
import { Form, useNavigate } from 'react-router-dom';

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

function getSearchValue(params: ExerciseSearchParams, tags: Tag[]) {
  const searchValue: (string | ExerciseSearchOption)[] = [];

  params.tagIDs.forEach((tagID) => {
    const tag = tags.find((tag) => tag.tagID === tagID);
    if (tag) {
      searchValue.push(getOptionForTag(tag));
    }
  });

  if (params.name) {
    searchValue.push(params.name);
  }

  return searchValue;
}

export default function ExerciseSearchForm({ params, tags }: ExerciseSearchFormProps) {
  const navigate = useNavigate();

  const searchInitialValue = getSearchValue(params, tags);
  const [searchValue, setSearchValue] =
    useState<(string | ExerciseSearchOption)[]>(searchInitialValue);
  const [exertionLevel, setExertionLevel] = useState(params.exertionLevel ?? SELECT_VALUE_ANY);
  const [players, setPlayers] = useState(params.players ?? '');

  const searchOptions = tags
    .map(getOptionForTag)
    .toSorted((a, b) => a.label.localeCompare(b.label));

  function handleClearAll() {
    navigate('/');
  }

  function handleExertionLevelChange(evt: SelectChangeEvent<string>) {
    setExertionLevel(evt.target.value);
  }

  function handlePlayersChange(evt: React.ChangeEvent<HTMLInputElement>) {
    setPlayers(evt.target.value);
  }

  function handlePlayersInput(evt: React.FormEvent<HTMLInputElement>) {
    const input = evt.target as HTMLInputElement;
    input.setCustomValidity('');
  }

  function handlePlayersInvalid(evt: React.FormEvent<HTMLInputElement>) {
    const input = evt.target as HTMLInputElement;
    if (input.validity.patternMismatch) {
      input.setCustomValidity('Please enter the number of players');
    }
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
        <Grid item xs={12} sm={6} md={4}>
          <Autocomplete
            freeSolo
            multiple
            options={searchOptions}
            renderInput={(inputProps) => (
              <TextField {...inputProps} label="Search" placeholder="Search by name or tags" />
            )}
            size="small"
            value={searchValue}
            onChange={handleSearchChange}
          />
          {searchValue.map((value) => {
            if (typeof value === 'string') {
              return <input key={value} name="name" type="hidden" value={value} />;
            }

            return <input key={value.value} name="tagIDs" type="hidden" value={value.value} />;
          })}
        </Grid>
        <Grid item xs={12} sm={3} md={2}>
          <FormControl fullWidth>
            <InputLabel id="label_exertion_level">Exertion Level</InputLabel>
            <Select
              fullWidth
              label="Exertion Level"
              labelId="label_exertion_level"
              name={exertionLevel === SELECT_VALUE_ANY ? undefined : 'exertionLevel'}
              size="small"
              value={exertionLevel}
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
        <Grid item xs={12} sm={3} md={2}>
          <FormControl fullWidth>
            <TextField
              fullWidth
              inputMode="numeric"
              inputProps={{ pattern: '[0-9]*' }}
              label="Players"
              name={players === '' ? undefined : 'players'}
              size="small"
              title="Number of players"
              value={players}
              onChange={handlePlayersChange}
              onInput={handlePlayersInput}
              onInvalid={handlePlayersInvalid}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
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
