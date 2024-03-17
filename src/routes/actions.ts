import { ActionFunctionArgs, json } from 'react-router-dom';
import { z } from 'zod';
import { zfd } from 'zod-form-data';

const FormSchema = zfd.formData({
  email: zfd.text(z.string().email()),
  password: zfd.text(z.string().min(8)),
});

export type FormErrors = z.inferFlattenedErrors<typeof FormSchema>;

export async function actionLogin({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const validatedForm = FormSchema.safeParse(formData);
  if (!validatedForm.success) {
    return json(validatedForm.error.flatten());
  }

  const { email, password } = validatedForm.data;

  console.log(email, password);

  return null;
}
