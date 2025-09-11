/**
 * ! Singleton:
 * It's a creational design pattern that ensures a class
 * has only one instance and provides a global access point to it.
 *
 * * It's useful when you need to control access to a single instance
 * * of a class, for example, in a database object or a
 * * configuration object.
 *
 * https://refactoring.guru/design-patterns/singleton
 */

import { configManager } from "./singleton/config-manager.ts";

configManager.setConfig('api_url', 'http://localhost:3000/api');
configManager.setConfig('timeout', '5000');
configManager.setConfig('apikey', 'ABC123');

console.log(configManager.getConfig('api_url'));
console.log(configManager.getConfig('timeout'));
console.log(configManager.getConfig('apikey'));