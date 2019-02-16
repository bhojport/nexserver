import { NexserverApplication } from './application';
import { ApplicationConfig } from '@loopback/core';
import { PostgresDataSource } from './datasources/postgres.datasource'

export { NexserverApplication };

export async function main(options: ApplicationConfig = {}) {
  const app = new NexserverApplication(options);
  await app.bind('datasources.config.db').to({
    name: 'postgres',
    connector: 'postgres',
    url: process.env.DATABASE_URL,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  }).toClass(PostgresDataSource);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
