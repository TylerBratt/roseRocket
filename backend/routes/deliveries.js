const deliveryRoutes = (app, fs) => {
  const dataPath = './data/deliveries.json';

  const readFile = (
    callback,
    returnJson = false,
    filePath = dataPath,
    encoding = 'utf8'
  ) => {
    fs.readFile(filePath, encoding, (err, data) => {
      if (err) {
        throw err;
      }
      callback(returnJson ? JSON.parse(data) : data);
    });
  };

  //add new delivery

  app.post('/deliveries', (req, res) => {
    readFile(data => {
      const newDeliveryId = Date.now().toString();

      data[newDeliveryId] =req.body;

      writeFile(JSON.stringify(data, null, 2), () => {
        res.stauts(200).send('new delivery added');
      });
    }, true);
  });

  //update delivery

  app.put('/deliveries/:id', (req, res) => {
    readFile(data => {
      const deliveryId = req.params['id'];
      data[deliveryId] = req.body;

      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send(`delivery id:${deliveryId} updated`);
      });
    }, true);
  });

  // Delete

  app.delete('/deliveries/:id', (req, res) => {
    readFile(data =>{
      const deliveryId = req.params['id'];
      delete data[deliveryId];

      writeFile(JSON.stringify(data, null, 2), ()=>{
        res.status(200).send(`delivery id: ${deliveryId} removed`);
      });
    }, true);
  });

  const writeFile = (
    fileData,
    callback,
    filePath = dataPath, 
    encoding = 'utf8'
  ) => {
    fs.writeFile(filePath, fileData, encoding, err => {
      if (err) {
        throw err;
      }
      callback();
    });
  };


  app.get('/deliveries', (req, res) => {
    readFile(data => {
      res.send(data);
    }, true);
  });
};

module.exports = deliveryRoutes;