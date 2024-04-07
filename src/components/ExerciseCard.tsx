import ExerciseCardMetadata from '@/components/ExerciseCardMetadata';
import ExerciseTagList from '@/components/ExerciseTagList';
import { Exercise } from '@/lib/types';
import { Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

type ExerciseListCardProps = {
  exercise: Exercise;
};

export default function ExerciseListCard(props: ExerciseListCardProps) {
  const { exercise } = props;

  return (
    <Card>
      <CardMedia
        sx={{ height: 200 }}
        image={exercise.images[0]}
        title={'Image of ' + exercise.name}
      />
      <CardContent sx={{ height: 240 }}>
        <Stack justifyContent="space-between" height="100%">
          <Stack spacing={2}>
            <Typography gutterBottom variant="h5" component="div">
              <Link to={`/exercises/${exercise.eid}`}>{exercise.name}</Link>
            </Typography>
            <Typography
              sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 3,
              }}
              variant="body1"
            >
              {exercise.howToPlay}
            </Typography>
          </Stack>

          <Stack spacing={1}>
            <ExerciseTagList exercise={exercise} mt={2} />
            <ExerciseCardMetadata exercise={exercise} />
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
