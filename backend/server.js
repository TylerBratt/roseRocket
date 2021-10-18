const express = require('express');
const path = require('path');
const fs = require('fs')
const PORT = process.env.PORT || 3001;
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes/routes.js')(app, fs);

const server = app.listen(PORT, () => {
  console.log(`listening on ${PORT}`, server.address().port);
});