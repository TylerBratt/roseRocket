const express = require('express');
const path = require('path');
const fs = require('fs');
const deliveryRoutes = require('./routes/deliveries.js');
const PORT = process.env.PORT || 3001;
const app = express();

app.use('/src', express.static(path.join(__dirname, 'public')));
console.log('working');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
  });

const routes = require('./routes/routes.js')(app, fs);
console.log(routes);

const server = app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

deliveryRoutes();