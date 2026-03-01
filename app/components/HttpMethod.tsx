type HttpMethodProps = {
  method: 'patch' | 'put' | 'delete';
};

export default function HttpMethod({ method }: HttpMethodProps) {
  return <input type="hidden" name="_method" value={method} />;
}
