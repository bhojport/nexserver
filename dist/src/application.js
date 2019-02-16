"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const boot_1 = require("@loopback/boot");
const rest_explorer_1 = require("@loopback/rest-explorer");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const service_proxy_1 = require("@loopback/service-proxy");
const path = require("path");
const sequence_1 = require("./sequence");
// import { PostgresDataSource } from './datasources/postgres.datasource'
class NexserverApplication extends boot_1.BootMixin(service_proxy_1.ServiceMixin(repository_1.RepositoryMixin(rest_1.RestApplication))) {
    constructor(options = {}) {
        super(options);
        // this.bind('datasources.config.db').to({
        //   name: 'postgres',
        //   connector: 'postgres',
        //   url: process.env.DATABASE_URL,
        //   host: process.env.DB_HOST,
        //   port: process.env.DB_PORT,
        //   user: process.env.DB_USER,
        //   password: process.env.DB_PASSWORD,
        //   database: process.env.DB_DATABASE,
        // });
        // this.bind('datasources.db').toClass(PostgresDataSource);
        // Set up the custom sequence
        this.sequence(sequence_1.MySequence);
        // Set up default home page
        this.static('/', path.join(__dirname, '../../public'));
        // Customize @loopback/rest-explorer configuration here
        this.bind(rest_explorer_1.RestExplorerBindings.CONFIG).to({
            path: '/explorer',
        });
        this.component(rest_explorer_1.RestExplorerComponent);
        this.projectRoot = __dirname;
        // Customize @loopback/boot Booter Conventions here
        this.bootOptions = {
            controllers: {
                // Customize ControllerBooter Conventions here
                dirs: ['controllers'],
                extensions: ['.controller.js'],
                nested: true,
            },
        };
    }
}
exports.NexserverApplication = NexserverApplication;
//# sourceMappingURL=application.js.map