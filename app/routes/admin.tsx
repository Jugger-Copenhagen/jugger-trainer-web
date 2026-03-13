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
  TableSortLabel,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import type { Route } from './+types/admin';

type SortField = 'country' | 'count';
type SortDir = 'asc' | 'desc';

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
  return Array.from(counts.entries());
}

function sortBreakdown(
  breakdown: [string, number][],
  sortField: SortField,
  sortDir: SortDir,
) {
  return breakdown.slice().sort((a, b) => {
    const cmp = sortField === 'country'
      ? a[0].localeCompare(b[0])
      : a[1] - b[1];
    return sortDir === 'asc' ? cmp : -cmp;
  });
}

export default function AdminDashboard({ loaderData }: Route.ComponentProps) {
  const { tags, exercisesRaw } = loaderData;
  const countryBreakdown = getCountryBreakdown(exercisesRaw);

  const [sortField, setSortField] = useState<SortField>('count');
  const [sortDir, setSortDir] = useState<SortDir>('desc');

  function handleSort(field: SortField) {
    if (sortField === field) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDir('asc');
    }
  }

  const sorted = sortBreakdown(countryBreakdown, sortField, sortDir);

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
              <TableCell>
                <TableSortLabel
                  active={sortField === 'country'}
                  direction={sortField === 'country' ? sortDir : 'asc'}
                  onClick={() => handleSort('country')}
                >
                  Country
                </TableSortLabel>
              </TableCell>
              <TableCell align="right">
                <TableSortLabel
                  active={sortField === 'count'}
                  direction={sortField === 'count' ? sortDir : 'asc'}
                  onClick={() => handleSort('count')}
                >
                  Exercises
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sorted.map(([country, count]) => (
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
