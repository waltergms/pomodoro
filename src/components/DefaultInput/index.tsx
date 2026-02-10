type DefaultInputProps = {
  type: 'text' | 'number' | 'search';
};
export function DefaultInput({ type }: DefaultInputProps) {
  return (
    <>
      <label htmlFor=''>task</label>
      <input id='input' type={type} />
    </>
  );
}
