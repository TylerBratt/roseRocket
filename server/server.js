const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');
const fs = require('fs');
const deliveriesRoute = require('./routes/deliveries');
const driversRoute = require('./routes/drivers');


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
  });

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public", "index.html"))
});


app.use("/deliveries", deliveriesRoute);
app.get('routes/deliveries', (req, res) => {
  res.send('deliveries');
});

app.use("/drivers", driversRoute);
app.get('routes/drivers', (req, res) => {
  res.send('drivers');
});

const server = app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
