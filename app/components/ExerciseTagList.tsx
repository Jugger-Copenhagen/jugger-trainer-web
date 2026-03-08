import ExerciseTag from '@/components/ExerciseTag';
import { Exercise, ExerciseCreate } from '@/lib/types';
import { Box, BoxProps } from '@mui/material';
import { Fragment } from 'react';

type ExerciseTagListProps = {
  exercise: Exercise | ExerciseCreate;
} & BoxProps;

export default function ExerciseTagList(props: ExerciseTagListProps) {
  const { exercise, ...rest } = props;

  return (
    <Box {...rest}>
      {exercise.tags.map((tag) => (
        <Fragment key={tag.tagID}>
          <ExerciseTag tag={tag} component="span" />{' '}
        </Fragment>
      ))}
    </Box>
  );
}
