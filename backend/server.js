const express = require('express');
const fs = require('fs')
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes/routes.js')(app, fs);

const server = app.listen(PORT, () => {
  console.log(`listening on ${PORT}`, server.address().port);
});