export type CreatePassword = (
  length: number,
  numbers: true,
  symbols: boolean
) => string;

export type SavePassword = (password: string) => void;
