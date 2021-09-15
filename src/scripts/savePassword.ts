import fs from 'fs';
import path from 'path';
import os from 'os';
import chalk from 'chalk';

import { SavePassword } from '../../types';

const savePassword: SavePassword = (password) => {
  fs.open(
    path.join(__dirname, '../../', 'passwords.txt'),
    'a',
    666,
    (e, id) => {
      fs.write(id, password + os.EOL, null, 'utf-8', () => {
        fs.close(id, () => {
          console.log(chalk.green('✔ Password saved to password.txt'));
        });
      });
    }
  );
};

export default savePassword;
