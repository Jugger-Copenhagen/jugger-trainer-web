import ExerciseNew from '@/routes/ExerciseNew';
import ExerciseSearch from '@/routes/ExerciseSearch';
import ExerciseView from '@/routes/ExerciseView';
import Login from '@/routes/Login';
import { actionExerciseEdit, actionExerciseNew } from '@/routes/actions';
import {
  loaderExerciseNew,
  loaderExerciseSearch,
  loaderExerciseView,
  loaderTagsSearch,
} from '@/routes/loaders';
import Root from '@/routes/root';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter(
  [
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
          path: 'exercises/new',
          element: <ExerciseNew />,
          loader: loaderExerciseNew,
          action: actionExerciseNew,
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
          path: 'exercises/:eid',
          element: <ExerciseView />,
          loader: loaderExerciseView,
          action: actionExerciseEdit,
        },
        {
          path: 'login',
          element: <Login />,
        },
        {
          path: 'tags',
          loader: loaderTagsSearch,
        },
      ],
    },
  ],
  {
    basename: '/jugger-trainer-web',
  }
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
