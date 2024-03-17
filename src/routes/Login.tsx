import { auth } from '@/lib/firebase';
import { useUserStore } from '@/lib/store';
import { Box, Button, Divider, Grid, TextField } from '@mui/material';
import { FirebaseError } from 'firebase/app';
import {
  GoogleAuthProvider,
  OAuthCredential,
  linkWithCredential,
  signInWithPopup,
} from 'firebase/auth';
import { useEffect } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';

let pendingCredential: OAuthCredential | null = null;

export default function Login() {
  const userStore = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (userStore.user !== null) {
      navigate('/');
    }
  }, [userStore.user]);

  async function signInWithGoogle() {
    auth.useDeviceLanguage();

    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);

      let user = result.user;
      if (pendingCredential !== null) {
        const credentialLinked = await linkWithCredential(user, pendingCredential);
        user = credentialLinked.user;
      }

      userStore.setUser(user);
    } catch (err) {
      if (!(err instanceof FirebaseError)) {
        throw err;
      }

      if (err.code === 'auth/account-exists-with-different-credential') {
        pendingCredential = GoogleAuthProvider.credentialFromError(err);

        // TODO: prompt the user to sign in with the same provider they used to sign up
      }

      // TODO: handle this better
    }
  }

  return (
    <Grid container spacing={2}>
      <Grid item sm={12} md={8} lg={6}>
        <h2>Login</h2>

        <Form>
          <TextField name="email" label="Email" variant="outlined" fullWidth />
          <TextField
            type="password"
            name="password"
            label="Password"
            variant="outlined"
            fullWidth
            sx={{ mt: 2 }}
          />

          <Button type="submit" variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
            Submit
          </Button>
        </Form>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ mb: 4 }}>
          <Button size="large" variant="outlined" onClick={signInWithGoogle}>
            Sign in with Google
          </Button>
        </Box>

        <p>
          No account yet? <Link to="/register">Register here.</Link>
        </p>
      </Grid>
    </Grid>
  );
}
