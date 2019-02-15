const application = require('./dist');

module.exports = application;

if (require.main === module) {
  // Run the application
  const config = {
    rest: {
      port: process.env.PORT || 8080,
      host: process.env.HOST || '0.0.0.0',
      url: process.env.URL || '0.0.0.0',
      openApiSpec: {
        // useful when used with OASGraph to locate your application
        servers: [{url: 'http://0.0.0.0:8080'}],
        setServersFromRequest: true,
      },
    },
  };
  application.main(config).catch(err => {
    console.error('Cannot start the application.', err);
    process.exit(1);
  });
}
