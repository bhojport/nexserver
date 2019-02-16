"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = require("./application");
exports.NexserverApplication = application_1.NexserverApplication;
const postgres_datasource_1 = require("./datasources/postgres.datasource");
async function main(options = {}) {
    const app = new application_1.NexserverApplication(options);
    await app.bind('datasources.config.db').to({
        name: 'postgres',
        connector: 'postgres',
        url: process.env.DATABASE_URL,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    }).toClass(postgres_datasource_1.PostgresDataSource);
    await app.boot();
    await app.start();
    const url = app.restServer.url;
    console.log(`Server is running at ${url}`);
    console.log(`Try ${url}/ping`);
    return app;
}
exports.main = main;
//# sourceMappingURL=index.js.map