const driversRoutes = (app, fs) => {
  const dataPath = './data/drivers.json';

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

  //add new drivers

  app.post('/drivers', (req, res) => {
    readFile(data => {
      const newDriversId = Date.now().toString();

      data[newDriversId] =req.body;

      writeFile(JSON.stringify(data, null, 2), () => {
        res.stauts(200).send('new driver added');
      });
    }, true);
  });

  //update drivers

  app.put('/drivers/:id', (req, res) => {
    readFile(data => {
      const driversId = req.params['id'];
      data[driversId] = req.body;

      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send(`drivers id:${driversId} updated`);
      });
    }, true);
  });

  // Delete

  app.delete('/drivers/:id', (req, res) => {
    readFile(data =>{
      const driversId = req.params['id'];
      delete data[driversId];

      writeFile(JSON.stringify(data, null, 2), ()=>{
        res.status(200).send(`drivers id: ${driversId} removed`);
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


  app.get('/drivers', (req, res) => {
    readFile(data => {
      res.send(data);
    }, true);
  });
};

module.exports = driversRoutes;