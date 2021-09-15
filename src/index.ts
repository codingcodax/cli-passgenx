import { Command } from 'commander';
import chalk from 'chalk';
import clipboardy from 'clipboardy';

import { version } from '../package.json';
import createPassword from './scripts/createPassword';
import savePassword from './scripts/savePassword';

const program = new Command();

program.version(version).description('Simple password generator');
program
  .option('-l, --length <number>', 'length of password', '8')
  .option('-s, --save', 'save password to password.txt')
  .option('-nn, --no-numbers', 'remove numbers')
  .option('-ns, --no-symbols', 'remove symbols')
  .parse();

const { length, save, numbers, symbols } = program.opts();

// Generate password
const generatedPassword = createPassword(length, numbers, symbols);

// Save to file
if (save) savePassword(generatedPassword);

// Copy password to clipboard
clipboardy.writeSync(generatedPassword);

// Print password and extra messages
console.log(`Generated Password: ${chalk.magenta(generatedPassword)}`);
console.log(chalk.gray('✔ Password copied to clipboard'));
