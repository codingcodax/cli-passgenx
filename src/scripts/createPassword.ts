import { CreatePassword } from '../../types';

const alpha = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '1234567890';
const symbols = '!@#$%^&*_-+=';

const createPassword: CreatePassword = (
  length,
  hasNumbers = true,
  hasSymbols = true
) => {
  let chars = alpha;
  let password = '';

  hasNumbers ? (chars += numbers) : '';
  hasSymbols ? (chars += symbols) : '';

  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return password;
};

export default createPassword;
