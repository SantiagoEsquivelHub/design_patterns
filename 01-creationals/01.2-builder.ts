/**
 * ! Builder Pattern:
 * It's a creational design pattern that allows us to build complex objects
 * step by step.
 *
 * The pattern allows us to produce different types and representations
 * of an object using the same construction code.
 *
 * * It's useful when we need to build a complex object with many parts
 * * and we want the construction process to be independent of the parts
 * * that compose it.
 */

import { COLORS } from '../helpers/colors.ts';

//! Task: create a QueryBuilder to build SQL queries
/**
 * It should have the following methods:
 * - constructor(table: string)
 * - select(fields: string[]): QueryBuilder -- if no field is passed, select all with (*)
 * - where(condition: string): QueryBuilder - optional
 * - orderBy(field: string, order: string): QueryBuilder - optional
 * - limit(limit: number): QueryBuilder - optional
 * - execute(): string - returns the SQL query
 * 
 ** Example usage:
  const usersQuery = new QueryBuilder("users") // users is the table name
    .select("id", "name", "email")
    .where("age > 18")
    .where("country = 'Cri'")
    .orderBy("name", "ASC")
    .limit(10)
    .execute();

  console.log('Query: ', usersQuery);
  // Select id, name, email from users where age > 18 and country = 'Cri' order by name ASC limit 10;
 */

//! Solution

class QueryBuilder {
  private table: string;
  private fields: string[] = [];
  private conditions: string[] = [];
  private orderFields: string[] = [];
  private limitCount?: number;

  constructor(table: string) {
    this.table = table;
  }

  select(...fields: string[]): QueryBuilder {
    this.fields = fields;
    return this;
  }

  where(condition: string): QueryBuilder {
    this.conditions.push(condition);
    return this;
  }

  orderBy(field: string, direction: 'ASC' | 'DESC' = 'ASC'): QueryBuilder {
    this.orderFields.push(field + ' ' + direction);
    return this;
  }

  limit(count: number): QueryBuilder {
    this.limitCount = count;
    return this;
  }

  execute(): string {
    // Select id, name, email from users where age > 18 and country = 'Cri' order by name ASC limit 10;
    const fields = this.fields.length > 0 ? this.fields.join(', ') : '*';
    const whereClause = this.orderFields.length > 0 ? this.conditions.join(' AND ') : ' ';
    const orderByClause = this.orderFields.length > 0 ? this.orderFields.join(', ') : '';
    const limitClause = this.limitCount ? this.limitCount : '';

    let query = `SELECT ${fields} FROM ${this.table} WHERE ${whereClause} ORDER BY ${orderByClause} LIMIT ${limitClause}`;

    return query;
  }
}

function main() {
  const usersQuery = new QueryBuilder('users')
    .select('id', 'name', 'email')
    .where('age > 18')
    .where("country = 'Cri'") // This should make an AND condition
    .orderBy('name', 'ASC')
    .limit(10)
    .execute();

  console.log('%cQuery:\n', COLORS.red);
  console.log(usersQuery);
}

main();
