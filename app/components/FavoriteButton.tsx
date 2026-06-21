import { useUserStore } from '@/lib/store';
import { FirebaseId } from '@/lib/types';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { IconButton, IconButtonProps } from '@mui/material';

type FavoriteButtonProps = {
  eid: FirebaseId;
} & Omit<IconButtonProps, 'onClick' | 'aria-label'>;

export default function FavoriteButton(props: FavoriteButtonProps) {
  const { eid, ...iconButtonProps } = props;
  const { user, favorites, toggleFavorite } = useUserStore();

  if (user === null) {
    return null;
  }

  const isFavorited = favorites.has(eid);

  async function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    event.stopPropagation();
    await toggleFavorite(eid);
  }

  return (
    <IconButton
      aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
      color="secondary"
      onClick={handleClick}
      {...iconButtonProps}
    >
      {isFavorited ? <Favorite /> : <FavoriteBorder />}
    </IconButton>
  );
}
