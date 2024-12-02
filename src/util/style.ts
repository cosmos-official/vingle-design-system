export const conditionalStyle = (
  condition: string | undefined,
  style: string
) => (condition ? style : '');
