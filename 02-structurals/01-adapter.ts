/**
 * ! Adapter Pattern
 *  Allows objects with incompatible interfaces to work together, it's also very
 *  useful for using third-party libraries in our application without depending
 *  directly on them.
 *
 * * It's useful when you want to reuse a class that doesn't have the interface
 * * we need or when we want to create an abstraction layer for a third-party
 * * library.
 *
 * https://refactoring.guru/design-patterns/adapter
 */

import { DenoLoggerAdapter } from "./adapter-files/logger-adapter.ts";

// import { LocalLogger } from "./adapter-files/local-logger.ts";


const logger = new DenoLoggerAdapter('01-adapter.ts');

logger.writeLog('Normal log');
logger.writeWarning('Warning log');
logger.writeError('Error log');