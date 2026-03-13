import { getExercisesRaw, getTags } from '@/lib/firebase';
import { ExerciseFirebase } from '@/lib/types';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import type { Route } from './+types/admin';

export async function clientLoader() {
  const [tags, exercisesRaw] = await Promise.all([getTags(), getExercisesRaw()]);
  return { tags, exercisesRaw };
}

function getCountryBreakdown(exercises: ExerciseFirebase[]) {
  const counts = new Map<string, number>();
  for (const exercise of exercises) {
    const country = exercise.originCountry ?? 'Unknown';
    counts.set(country, (counts.get(country) ?? 0) + 1);
  }
  return Array.from(counts.entries()).sort((a, b) => b[1] - a[1]);
}

export default function AdminDashboard({ loaderData }: Route.ComponentProps) {
  const { tags, exercisesRaw } = loaderData;
  const countryBreakdown = getCountryBreakdown(exercisesRaw);

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {tags.length} tags
      </Typography>
      <Typography variant="h6" gutterBottom>
        {exercisesRaw.length} exercises
      </Typography>
      <Typography variant="subtitle1" sx={{ mt: 2, mb: 1 }}>
        Exercises by country
      </Typography>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Country</TableCell>
              <TableCell align="right">Exercises</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {countryBreakdown.map(([country, count]) => (
              <TableRow key={country}>
                <TableCell>{country}</TableCell>
                <TableCell align="right">{count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
