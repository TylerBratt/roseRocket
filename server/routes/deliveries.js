const express = require('express');
const deliveryRoutes = express.Router();
const cors = require('cors');



let deliveries = [
  {
    "id": 1,
    "description": "Construction Materials",
    "revenue": "$4,200.00",
    "cost": "$100.00"
  },
  {
    "id": 2,
    "description": "Construction Materials",
    "revenue": "$3,948.45",
    "cost": "$71.38"
  },
  {
    "id": 3,
    "description": "Wood and Lumber",
    "revenue": "$1,950.52",
    "cost": "$263.88"
  },
  {
    "id": 4, 
    "description": "Wood and Lumber",
    "revenue": "$4,991.025",
    "cost": "$116.98"
  },
  {
    "id": 5, 
    "description": "Meat",
    "revenue": "$6,739.72",
    "cost": "$279.17"
  },
  {
    "id": 6,
    "description": "Meat",
    "revenue": "$3,618.08",
    "cost": "$537.91"
  },
  {
    "id": 7, 
    "description": "Fresh Produce",
    "revenue": "$5,345.91",
    "cost": "$420.69"
  },
  {
    "id": 8, 
    "description": "Farm Supplies",
    "revenue": "$7,4292.78",
    "cost": "$171.13"
  },
  {
    "id": 9,  
    "description": "Cheetos",
    "revenue": "$7,231.98",
    "cost": "$310.38"
  },
  {
    "id": 10,
    "description": "Rose Rocket Swag Shirts",
    "revenue": "$5,404.24",
    "cost": "$350.79"
}];


  deliveryRoutes.use(cors());
  deliveryRoutes.use(express.json());
  deliveryRoutes.use(express.urlencoded({ extended: false }));

  deliveryRoutes.post('/', (req, res) => {
    const delivery = req.body;

    console.log(delivery);
    deliveries.push(delivery);

    res.send("Delivery added to Database")
  });

  deliveryRoutes.get('/', (req, res) => {
    console.log('hi')
    res.json(deliveries);
  });

  deliveryRoutes.get('/:id', (req, res) => {
    const id = req.params.id;


    for (let delivery of deliveries) {
      if (delivery.id === id) {
        res.json(delivery);
        return;
      }
    }

    res.status(404).send('Delivery not found')

  });

  deliveryRoutes.delete('/:id', (req, res) => {
    const id = req.params.id;

    deliveries = deliveries.filter(i => {
      if (i.id !== id) {
        return true;
      }
      return false;
    });
    res.send('Delivery Deleted')
  });

  deliveryRoutes.post('/:id', (req, res) => {
    const id = req.params.id;
    const newDelivery = req.body;

    for (let i = 0; i < deliveries.length; i++) {
      let delivery = deliveries[i];

      if (delivery.id === id) {
        deliveries[i] = newDelivery;
      }
    }
    res.send('Delivery Edited')
  });

  deliveryRoutes.get('/', (req, res) => {
    res.send('Hello!')
});




module.exports = deliveryRoutes;