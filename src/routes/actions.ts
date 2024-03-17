import { ActionFunctionArgs, redirect } from 'react-router-dom';

export async function actionLogin({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  return redirect('/');
}
