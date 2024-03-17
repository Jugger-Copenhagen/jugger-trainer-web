import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div>
      <h2>Register</h2>

      <p>
        Returning user? <Link to="/login">Sign in here.</Link>
      </p>
    </div>
  );
}
