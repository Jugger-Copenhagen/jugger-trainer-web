import ExerciseSearch from '@/routes/ExerciseSearch';
import ExerciseView from '@/routes/ExerciseView';
import Login from '@/routes/Login';
import { loaderExerciseSearch, loaderExerciseView } from '@/routes/loaders';
import Root from '@/routes/root';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <ExerciseSearch />,
        loader: loaderExerciseSearch,
      },
      {
        path: 'exercises/:eid',
        element: <ExerciseView />,
        loader: loaderExerciseView,
      },
      {
        path: 'exercises/favorited',
        element: <div>Favorited exercises</div>,
      },
      {
        path: 'exercises/random',
        element: <div>Random exercise</div>,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
