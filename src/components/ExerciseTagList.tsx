import ExerciseTag from '@/components/ExerciseTag';
import { Exercise } from '@/lib/types';
import { Box, BoxProps } from '@mui/material';

type ExerciseTagListProps = {
  exercise: Exercise;
} & BoxProps;

export default function ExerciseTagList(props: ExerciseTagListProps) {
  const { exercise, ...rest } = props;

  return (
    <Box {...rest}>
      {exercise.tags.map((tag) => (
        <>
          <ExerciseTag key={tag.tagID} tag={tag} component="span" />{' '}
        </>
      ))}
    </Box>
  );
}
