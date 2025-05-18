import ExerciseTagList from '@/components/ExerciseTagList';
import HttpMethod from '@/components/HttpMethod';
import { countryFlag, exertionLevelHumanReadable, numberOfPlayersHumanReadable } from '@/lib/copy';
import { Exercise, ExerciseCreate, EXERTION_LEVELS, ExertionLevel, Tag } from '@/lib/types';
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import Markdown from 'react-markdown';
import { Form } from 'react-router-dom';

type ExerciseFormProps = {
  exercise: ExerciseCreate | Exercise;
  tags: Tag[];
};

export default function ExerciseForm({ exercise, tags }: ExerciseFormProps) {
  const [name, setName] = useState(exercise.name);
  const [exertionLevel, setExertionLevel] = useState(exercise.exertionLevel);
  // TODO: number of players
  // TODO: tags
  const [country, setCountry] = useState(exercise.originCountry);
  const [howToPlay, setHowToPlay] = useState(exercise.howToPlay);

  const flag = countryFlag(country);

  const isEditing = 'eid' in exercise;

  return (
    <Box mt={2}>
      <Form method="post">
        {isEditing && <HttpMethod method="put" />}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="name"
              label="Name"
              value={name}
              variant="outlined"
              fullWidth
              placeholder="Name of exercise"
              onChange={(evt) => setName(evt.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={4}>
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
            <Box mt={1}>
              <Typography style={{ fontWeight: 700 }} component="strong">
                Number of Players:
              </Typography>{' '}
              <Typography component="span">{numberOfPlayersHumanReadable(exercise)}</Typography>
            </Box>
            <Box mt={1}>
              <Typography style={{ fontWeight: 700 }} component="strong">
                Skills and Equipment:
              </Typography>{' '}
              <ExerciseTagList component="span" exercise={exercise} />
            </Box>
            <Box mt={1}>
              {flag !== null && (
                <>
                  <Typography style={{ fontWeight: 700 }} component="strong">
                    Origin Country:
                  </Typography>{' '}
                  <Typography component="span">{flag}</Typography>
                </>
              )}
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Markdown>{exercise.howToPlay}</Markdown>
          </Grid>
        </Grid>
      </Form>
    </Box>
  );
}
