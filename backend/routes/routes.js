const deliveryRoutes = require('./deliveries')

const appRouter = (app, fs) => {
  app.get('/', (req, res) => {
    res.send("welcome to the dev api-server");
  });
  deliveryRoutes(app, fs);
};

module.exports = appRouter