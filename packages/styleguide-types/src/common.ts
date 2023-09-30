export type CustomOnSubmitEvent = React.FormEvent<HTMLFormElement> & {
  target: { value: string };
};
