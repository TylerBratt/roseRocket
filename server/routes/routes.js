const deliveryRoutes = require('./deliveries');
const driversRoutes = require('./drivers');

const path = require('path');

const appRouter = (app, fs) => {
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/public', 'index.html'));
  });
  deliveryRoutes(app, fs);
  driversRoutes(app, fs);
};

module.exports = appRouter