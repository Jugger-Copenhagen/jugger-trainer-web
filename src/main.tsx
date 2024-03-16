import '@/index.css';
import ExerciseSearch from '@/routes/ExerciseSearch';
import ExerciseView from '@/routes/ExerciseView';
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
      },
      {
        path: 'exercises/:eid',
        element: <ExerciseView />,
      },
      {
        path: 'exercises/starred',
        element: <div>Starred exercises</div>,
      },
      {
        path: 'exercises/random',
        element: <div>Random exercise</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
