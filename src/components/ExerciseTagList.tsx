import ExerciseTag from '@/components/ExerciseTag';
import { Exercise } from '@/lib/types';
import { Box, BoxProps } from '@mui/material';
import React from 'react';

type ExerciseTagListProps = {
  exercise: Exercise;
} & BoxProps;

export default function ExerciseTagList(props: ExerciseTagListProps) {
  const { exercise, ...rest } = props;

  return (
    <Box {...rest}>
      {exercise.tags.map((tag) => (
        <React.Fragment key={tag.tagID}>
          <ExerciseTag tag={tag} component="span" />{' '}
        </React.Fragment>
      ))}
    </Box>
  );
}
