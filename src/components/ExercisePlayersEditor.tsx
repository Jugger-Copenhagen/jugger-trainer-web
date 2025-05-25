import { numberOfPlayersHumanReadable } from '@/lib/copy';
import { PLAYERS_MAX_NOT_SPECIFIED } from '@/lib/exercise';
import { Exercise, ExerciseCreate } from '@/lib/types';
import { FormControl, TextField } from '@mui/material';
import { useState } from 'react';

type ExercisePlayersEditorProps = {
  exercise: ExerciseCreate | Exercise;
};

function parsePlayersMin(players: string): number {
  if (players.endsWith('+')) {
    return parseInt(players.slice(0, -1), 10);
  }

  if (players.includes('-')) {
    const [min] = players.split('-').map((p) => parseInt(p, 10));
    return min;
  }

  return parseInt(players, 10);
}

function parsePlayersMax(players: string): number {
  if (players.endsWith('+')) {
    return PLAYERS_MAX_NOT_SPECIFIED;
  }

  if (players.includes('-')) {
    const [, max] = players.split('-').map((p) => parseInt(p, 10));
    return max;
  }

  return parseInt(players, 10);
}

export default function ExercisePlayersEditor({ exercise }: ExercisePlayersEditorProps) {
  const [players, setPlayers] = useState(numberOfPlayersHumanReadable(exercise));

  const playersMin = parsePlayersMin(players);
  const playersMax = parsePlayersMax(players);

  return (
    <FormControl fullWidth>
      <TextField
        label="Number of Players"
        placeholder="e.g. 3, 2-4, 5+"
        required
        variant="outlined"
        onChange={(evt) => setPlayers(evt.target.value)}
      />
      <input type="hidden" name="playersMin" value={playersMin} />
      <input type="hidden" name="playersMax" value={playersMax} />
      <pre>
        <code>{`playersMin: ${playersMin}, playersMax: ${playersMax}`}</code>
      </pre>
    </FormControl>
  );
}
