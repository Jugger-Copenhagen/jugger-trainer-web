import { Tag } from '@/lib/types';
import { Chip, ChipProps } from '@mui/material';

type ExerciseTagProps = {
  tag: Tag;
} & ChipProps;

export default function ExerciseTag(props: ExerciseTagProps) {
  const { tag, ...rest } = props;

  return <Chip label={tag.tag} size="small" {...rest} />;
}
