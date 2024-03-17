import { Box, Button, Divider, Grid, TextField } from '@mui/material';
import { Form, Link } from 'react-router-dom';

export default function Login() {
  function signInWithGoogle() {
    // TODO: Implement Google sign-in
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
