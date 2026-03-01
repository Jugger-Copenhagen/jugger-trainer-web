import { AlertColor } from '@mui/material';
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
