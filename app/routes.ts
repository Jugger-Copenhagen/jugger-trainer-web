import { index, layout, route, type RouteConfig } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('exercises/new', 'routes/exercise-new.tsx'),
  route('exercises/favorited', 'routes/exercise-favorited.tsx'),
  route('exercises/random', 'routes/exercise-random.tsx'),
  route('exercises/:eid', 'routes/exercise-view.tsx'),
  route('login', 'routes/login.tsx'),
  layout('routes/admin-layout.tsx', [
    route('admin', 'routes/admin.tsx'),
    route('admin/tags', 'routes/admin-tags.tsx'),
  ]),
] satisfies RouteConfig;
