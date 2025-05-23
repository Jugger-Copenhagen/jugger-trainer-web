import ExerciseHowToPlayEditor from '@/components/ExerciseHowToPlayEditor';
import ExerciseTagEditor from '@/components/ExerciseTagEditor';
import HttpMethod from '@/components/HttpMethod';
import {
  countryFlag,
  countryHumanReadable,
  exertionLevelHumanReadable,
  numberOfPlayersHumanReadable,
} from '@/lib/copy';
import {
  COUNTRIES,
  Country,
  Exercise,
  ExerciseCreate,
  EXERTION_LEVELS,
  ExertionLevel,
} from '@/lib/types';
import {
  Box,
  FormControl,
  GridLegacy,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { Form } from 'react-router-dom';

type ExerciseFormProps = {
  exercise: ExerciseCreate | Exercise;
};

export default function ExerciseForm({ exercise }: ExerciseFormProps) {
  const [name, setName] = useState(exercise.name);
  const [exertionLevel, setExertionLevel] = useState(exercise.exertionLevel);
  // TODO: number of players
  // TODO: tags
  const [originCountry, setOriginCountry] = useState(exercise.originCountry);

  const isEditing = 'eid' in exercise;
  const action = isEditing ? `/exercises/${exercise.eid}` : '/exercises/new';

  return (
    <Box mt={2}>
      <Form method="post" action={action}>
        {isEditing && <HttpMethod method="put" />}
        <GridLegacy container spacing={2}>
          <GridLegacy item xs={12}>
            <TextField
              name="name"
              label="Name"
              value={name}
              variant="outlined"
              fullWidth
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
                <InputLabel id="label-exertionLevel">Difficulty</InputLabel>
                <Select
                  name="exertionLevel"
                  labelId="label-exertionLevel"
                  label="Difficulty"
                  value={exertionLevel}
                  onChange={(evt) => setExertionLevel(evt.target.value as ExertionLevel)}
                >
                  {EXERTION_LEVELS.map((level) => (
                    <MenuItem value={level}>{exertionLevelHumanReadable(level)}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Box mt={2}>
              <Typography style={{ fontWeight: 700 }} component="strong">
                Number of Players:
              </Typography>{' '}
              <Typography component="span">{numberOfPlayersHumanReadable(exercise)}</Typography>
            </Box>

            <Box mt={2}>
              <ExerciseTagEditor exercise={exercise} />
            </Box>

            <Box mt={2}>
              <FormControl fullWidth>
                <InputLabel id="label-originCountry">Origin Country</InputLabel>
                <Select
                  name="originCountry"
                  labelId="label-originCountry"
                  label="Origin Country"
                  value={originCountry}
                  onChange={(evt) => setOriginCountry(evt.target.value as Country)}
                >
                  {COUNTRIES.map((c) => (
                    <MenuItem value={c}>
                      {countryFlag(c)} {countryHumanReadable(c)}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </GridLegacy>
          <GridLegacy item xs={12} md={8}>
            <ExerciseHowToPlayEditor exercise={exercise} />
          </GridLegacy>
        </GridLegacy>
      </Form>
    </Box>
  );
}
