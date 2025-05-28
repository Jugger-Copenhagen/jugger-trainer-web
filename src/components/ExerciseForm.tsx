import ExerciseHowToPlayEditor from '@/components/ExerciseHowToPlayEditor';
import ExercisePlayersEditor from '@/components/ExercisePlayersEditor';
import ExerciseTagEditor from '@/components/ExerciseTagEditor';
import HttpMethod from '@/components/HttpMethod';
import { countryFlag, countryHumanReadable, exertionLevelHumanReadable } from '@/lib/copy';
import {
  COUNTRIES,
  Country,
  Exercise,
  ExerciseCreate,
  EXERTION_LEVELS,
  ExertionLevel,
  Tag,
} from '@/lib/types';
import {
  Box,
  Button,
  FormControl,
  GridLegacy,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';

type ExerciseFormProps = {
  exercise: ExerciseCreate | Exercise;
  tags: Tag[];
};

export default function ExerciseForm({ exercise, tags }: ExerciseFormProps) {
  const navigate = useNavigate();

  const [name, setName] = useState(exercise.name);
  const [exertionLevel, setExertionLevel] = useState(exercise.exertionLevel);
  const [originCountry, setOriginCountry] = useState(exercise.originCountry);

  const isEditing = 'eid' in exercise;
  const action = isEditing ? `/exercises/${exercise.eid}` : '/exercises/new';

  const onClickCancel = () => {
    const confirmed = window.confirm('Are you sure you want to cancel? Your changes will be lost.');

    if (confirmed) {
      navigate('/');
    }
  };

  return (
    <Box mt={2}>
      <Form method="post" action={action}>
        {isEditing && <HttpMethod method="put" />}
        <GridLegacy container spacing={2}>
          <GridLegacy item xs={12}>
            <TextField
              name="name"
              autoComplete="off"
              fullWidth
              label="Name"
              required
              value={name}
              variant="outlined"
              placeholder="Name of exercise"
              onChange={(evt) => setName(evt.target.value)}
            />
          </GridLegacy>
          <GridLegacy item xs={12} md={4}>
            <Box>
              <img
                src={exercise.images[0]}
                alt={'Image of ' + exercise.name}
                style={{ width: '100%' }}
              />
            </Box>

            <Box mt={2}>
              <FormControl fullWidth>
                <InputLabel id="label-exertionLevel">Difficulty *</InputLabel>
                <Select
                  name="exertionLevel"
                  labelId="label-exertionLevel"
                  label="Difficulty *"
                  value={exertionLevel}
                  onChange={(evt) => setExertionLevel(evt.target.value as ExertionLevel)}
                >
                  {EXERTION_LEVELS.map((level) => (
                    <MenuItem key={level} value={level}>
                      {exertionLevelHumanReadable(level)}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Box mt={2}>
              <ExercisePlayersEditor exercise={exercise} />
            </Box>

            <Box mt={2}>
              <ExerciseTagEditor exercise={exercise} tags={tags} />
            </Box>

            <Box mt={2}>
              <FormControl fullWidth>
                <InputLabel id="label-originCountry">Origin Country *</InputLabel>
                <Select
                  name="originCountry"
                  labelId="label-originCountry"
                  label="Origin Country *"
                  value={originCountry}
                  onChange={(evt) => setOriginCountry(evt.target.value as Country)}
                >
                  {COUNTRIES.map((c) => (
                    <MenuItem key={c} value={c}>
                      {countryFlag(c)} {countryHumanReadable(c)}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </GridLegacy>
          <GridLegacy item xs={12} md={8}>
            <ExerciseHowToPlayEditor exercise={exercise} />

            <Stack mt={4} direction="row" spacing={2} justifyContent="flex-end">
              <Button
                type="button"
                variant="outlined"
                color="primary"
                size="large"
                onClick={onClickCancel}
              >
                Cancel
              </Button>

              <Button type="submit" variant="contained" color="primary" size="large">
                {isEditing ? 'Update' : 'Save'}
              </Button>
            </Stack>
          </GridLegacy>
        </GridLegacy>
      </Form>
    </Box>
  );
}
