import { auth } from '@/lib/firebase';
import { useUserStore } from '@/lib/store';
import { AppRegistration, Google, Login as IconLogin } from '@mui/icons-material';
import { Alert, Box, Button, Divider, GridLegacy, Snackbar, TextField } from '@mui/material';
import { FirebaseError } from 'firebase/app';
import {
  GoogleAuthProvider,
  OAuthCredential,
  createUserWithEmailAndPassword,
  linkWithCredential,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';

let pendingCredential: OAuthCredential | null = null;

export default function Login() {
  const userStore = useUserStore();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<FirebaseError | null>(null);

  useEffect(() => {
    if (userStore.user !== null) {
      navigate('/');
    }
  }, [userStore.user]);

  function handleAuthMessage(message: string) {
    setMessage(message);
  }

  function onCloseMessageSnackbar() {
    setMessage(null);
  }

  function handleAuthError(err: unknown) {
    if (!(err instanceof FirebaseError)) {
      throw err;
    }

    setError(err);
  }

  function onCloseErrorSnackbar() {
    setError(null);
  }

  async function signInWithAppUser() {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);

      let user = result.user;
      if (pendingCredential !== null) {
        const credentialLinked = await linkWithCredential(user, pendingCredential);
        user = credentialLinked.user;
      }

      userStore.setUser(user);
    } catch (err) {
      handleAuthError(err);
    }
  }

  async function createAppUser() {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);

      let user = result.user;
      if (pendingCredential !== null) {
        const credentialLinked = await linkWithCredential(user, pendingCredential);
        user = credentialLinked.user;
      }

      userStore.setUser(user);
    } catch (err) {
      handleAuthError(err);
    }
  }

  async function resetUserPassword() {
    try {
      await sendPasswordResetEmail(auth, email);

      handleAuthMessage(
        'If you have an account with this email, a password reset link has been sent to your email address.'
      );
    } catch (err) {
      handleAuthError(err);
    }
  }

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
      handleAuthError(err);
    }
  }

  return (
    <GridLegacy container spacing={2}>
      <GridLegacy item sm={12} md={8} lg={6}>
        <h2>Login</h2>

        <Form method="post">
          <TextField
            type="email"
            name="email"
            label="Email"
            required
            value={email}
            variant="outlined"
            fullWidth
            onChange={(evt) => setEmail(evt.target.value)}
          />
          <TextField
            type="password"
            name="password"
            label="Password"
            required
            value={password}
            variant="outlined"
            fullWidth
            sx={{ mt: 2 }}
            onChange={(evt) => setPassword(evt.target.value)}
          />

          <Button
            type="button"
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 2 }}
            onClick={signInWithAppUser}
          >
            Sign In <IconLogin sx={{ ml: 1 }} />
          </Button>

          <Button
            type="button"
            variant="outlined"
            size="large"
            sx={{ ml: 2, mt: 2 }}
            onClick={createAppUser}
          >
            Sign Up <AppRegistration sx={{ ml: 1 }} />
          </Button>

          <Button
            type="button"
            variant="text"
            size="large"
            sx={{ ml: 2, mt: 2 }}
            onClick={resetUserPassword}
          >
            Forgot Password?
          </Button>
        </Form>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ mb: 4 }}>
          <Button size="large" variant="outlined" onClick={signInWithGoogle}>
            <Google sx={{ mr: 1 }} /> Sign in with Google
          </Button>
        </Box>
      </GridLegacy>

      <Snackbar open={message !== null} autoHideDuration={6000} onClose={onCloseMessageSnackbar}>
        <Alert
          onClose={onCloseMessageSnackbar}
          severity="info"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>

      <Snackbar open={error !== null} autoHideDuration={6000} onClose={onCloseErrorSnackbar}>
        <Alert
          onClose={onCloseErrorSnackbar}
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {error?.message ?? 'Unknown error'}
        </Alert>
      </Snackbar>
    </GridLegacy>
  );
}
