/**
 * ! Factory Function
 * It's a design pattern that allows us to create objects or functions dynamically that will be
 * used later in the code.
 *
 * * It's useful when we need to create objects or functions dynamically,
 * * that is, at runtime and not at compile time.
 *
 */

//! Expected output
//! Add log colors according to the level
//* [INFO:2025-10-21:07] Application started correctly.
//* [WARNING:2025-10-21:07] Memory usage is high.
//* [ERROR:2025-10-21:07] Database connection error.

import { COLORS } from '../helpers/colors.ts';

function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months start from 0
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// Factory function that creates a log handler
type LogLevel = 'info' | 'warn' | 'error';

function createLogger(level: LogLevel) {
  // Returns a function that receives the "message" as argument
  // Complete: implement the logger with format and color for each level
  return function (message: string) {
    const timestamp = formatDate(new Date());

    const prefix = {
      info: 'INFO',
      warn: 'WARNING',
      error: 'ERROR',
    }

    const logColor = {
      info: COLORS.gray,
      warn: COLORS.orange,
      error: COLORS.red,
    }

    return console.log(`%c[${prefix[level]}: ${timestamp}] ${message}`, logColor[level]);
  }
}

// Usage example
function main() {
  const infoLogger = createLogger('info');
  const warnLogger = createLogger('warn');
  const errorLogger = createLogger('error');

  infoLogger('Application started correctly.');
  warnLogger('Memory usage is high.');
  errorLogger('Database connection error.');
}

main();
