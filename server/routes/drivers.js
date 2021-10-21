const express = require('express');
const driverRoutes = express.Router()
const cors = require('cors');
const drivers = require('../data/drivers.json')


// let drivers = [{
//     "id": 1,
//     "name": "Steve Williams",
//     "insurance": "xr6ct7vy8bu9n",
//     "licence": "d5r6ft7gy8"
//   },
//   {
//     "id": 2,
//     "name": "Chris Horton",
//     "insurance": "sdcft7v8gyb3",
//     "licence": "7fg8hbiu"
//   },
//   {
//     "id": 3,
//     "name": "Alex Novak",
//     "insurance": "d6vf7b68gn79h",
//     "licence": "ftgy89bun"
// }]


driverRoutes.use(cors());
driverRoutes.use(express.json());
driverRoutes.use(express.urlencoded({ extended: false }));

driverRoutes.post('/', (req, res) => {
  const driver = req.body;

  console.log(driver);
  drivers.push(driver);

  res.send("Driver added to Database")
});

driverRoutes.get('/', (req, res) => {
  res.json(drivers);
});

driverRoutes.get('/:id', (req, res) => {
  const id = req.params.id;


  for (let driver of drivers) {
    if (driver.id === id) {
      res.json(driver);
      return;
    }
  }

  res.status(404).send('driver not found')

});

driverRoutes.delete('/:id', (req, res) => {
  const id = req.params.id;

  drivers = drivers.filter(i => {
    if (i.id !== id) {
      return true;
    }
    return false;
  });
  res.send('Driver Deleted')
});

driverRoutes.post('/:id', (req, res) => {
  const id = req.params.id;
  const newdriver = req.body;

  for (let i = 0; i < drivers.length; i++) {
    let driver = drivers[i];

    if (driver.id === id) {
      drivers[i] = newDriver;
    }
  }
  res.send('Driver Edited')
});

driverRoutes.get('/', (req, res) => {
  res.send('Hello!')
})


module.exports = driverRoutes;