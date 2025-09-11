/**
 * ! Singleton:
 * It's a creational design pattern that ensures a class
 * has only one instance and provides a global access point to it.
 *
 * * It's useful when you need to control access to a single instance
 * * of a class, for example, in a database object or a
 * * configuration object.
 */

import { COLORS } from '../helpers/colors.ts';

class DatabaseConnection {
  private static instance: DatabaseConnection;
  private connected: boolean = false;

  // Private constructor to prevent direct instances
  private constructor() { }

  // Static method to get the unique instance
  public static getInstance(): DatabaseConnection {
    // Complete: implement the Singleton pattern
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
      console.log('%cConnected to database', COLORS.green);
    }

    return DatabaseConnection.instance;
  }

  // Method to connect to the database
  public connect(): void {
    // Complete: if not connected, show connection message
    if (this.connected) {
      console.log('%cWe were already connected to database', COLORS.cyan);
      return;
    }
    this.connected = true;
    console.log('%cDatabase has been connected again', COLORS.green);
  }

  // Method to disconnect from the database
  public disconnect(): void {
    // Complete: disconnect and show disconnection message
    if (this.connected) {
      this.connected = false;
      console.log('%cDatabase has been disconnect', COLORS.red);
      return;
    }
    console.log('There is not an active connection', COLORS.gray);
  }
}

// Tests
function main() {
  const db1 = DatabaseConnection.getInstance();
  db1.connect(); // Should connect to the database

  const db2 = DatabaseConnection.getInstance();
  db2.connect(); // Should show that there's already an active connection

  console.log('Are they equal:', db1 === db2); // Should show true

  db1.disconnect(); // Should close the connection

  db2.connect(); // Now it should connect again, since the previous one was closed
}

main();
