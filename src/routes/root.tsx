import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <div>
      <h1>Jugger Trainer</h1>
      <p>Welcome to the Jugger Trainer web app!</p>
      <Outlet />
    </div>
  );
}
