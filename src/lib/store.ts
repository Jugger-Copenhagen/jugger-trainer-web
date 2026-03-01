import { User } from 'firebase/auth';
import { create } from 'zustand';
import { upsertUserProfile } from '@/lib/firebase';
import { UserProfile } from '@/lib/types';

interface UserStore {
  user: User | null;
  profile: UserProfile | null;
  setUser: (user: User | null) => Promise<void>;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  profile: null,
  setUser: async (user: User | null) => {
    if (user === null) {
      set({ user: null, profile: null });
      return;
    }
    const profile = await upsertUserProfile(user.uid);
    set({ user, profile });
  },
}));
