import { ExerciseSearchParams } from '@/lib/types';
import { Box, Button } from '@mui/material';
import { Form } from 'react-router-dom';

type ExerciseSearchFormProps = {
  params: ExerciseSearchParams;
};

export default function ExerciseSearchForm({ params }: ExerciseSearchFormProps) {
  return (
    <Form>
      <Box display="flex" marginY={2}>
        <Button type="submit" variant="contained">
          Search
        </Button>
      </Box>
    </Form>
  );
}
