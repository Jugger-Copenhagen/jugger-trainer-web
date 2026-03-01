import { countryFlag, countryHumanReadable } from '@/lib/copy';
import { COUNTRIES, Country, Exercise, ExerciseCreate } from '@/lib/types';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';

type ExerciseOriginCountryEditorProps = {
  exercise: Exercise | ExerciseCreate;
};

export default function ExerciseOriginCountryEditor({
  exercise,
}: ExerciseOriginCountryEditorProps) {
  const [originCountry, setOriginCountry] = useState(exercise.originCountry);

  return (
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
  );
}
