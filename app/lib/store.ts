import { AlertColor } from '@mui/material';
import { User } from 'firebase/auth';
import { create } from 'zustand';
import { favoriteExercise, unfavoriteExercise, upsertUserProfile } from '@/lib/firebase';
import { FirebaseId, UserProfile } from '@/lib/types';

interface UserStore {
  user: User | null;
  profile: UserProfile | null;
  favorites: Set<FirebaseId>;
  setUser: (user: User | null) => Promise<void>;
  toggleFavorite: (eid: FirebaseId) => Promise<void>;
}

export const useUserStore = create<UserStore>((set, get) => ({
  user: null,
  profile: null,
  favorites: new Set(),
  setUser: async (user: User | null) => {
    if (user === null) {
      set({ user: null, profile: null, favorites: new Set() });
      return;
    }
    const profile = await upsertUserProfile(user.uid);
    const favorites = new Set(Object.keys(profile.favorites ?? {}));
    set({ user, profile, favorites });
  },
  toggleFavorite: async (eid: FirebaseId) => {
    const { user, favorites } = get();
    if (user === null) {
      return;
    }

    const isFavorited = favorites.has(eid);
    const optimistic = new Set(favorites);
    if (isFavorited) {
      optimistic.delete(eid);
    } else {
      optimistic.add(eid);
    }
    set({ favorites: optimistic });

    try {
      if (isFavorited) {
        await unfavoriteExercise(eid);
      } else {
        await favoriteExercise(eid);
      }
    } catch (error) {
      // Revert on failure.
      set({ favorites });
      useToastStore.getState().setToast('Failed to update favorites.', 'error');
      throw error;
    }
  },
}));

interface ToastStore {
  message: string | null;
  severity: AlertColor;
  setToast: (message: string, severity?: AlertColor) => void;
  clearToast: () => void;
}

export const useToastStore = create<ToastStore>((set) => ({
  message: null,
  severity: 'info',
  setToast: (message: string, severity: AlertColor = 'info') => set({ message, severity }),
  clearToast: () => set({ message: null }),
}));
