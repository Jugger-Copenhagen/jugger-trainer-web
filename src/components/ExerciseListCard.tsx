import { Exercise } from '@/lib/firebase';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
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
        image="https://source.unsplash.com/random/800x600"
        title={'Image of ' + exercise.name}
      />
      <CardContent sx={{ height: 200 }}>
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
        {/* TODO: tags */}
        {/* TODO: difficulty, number of players, favorites, etc. */}
      </CardContent>
    </Card>
  );
}
