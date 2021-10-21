import React, { useEffect, useState } from 'react';
import './Drivers.css';
import axios from 'axios';

export default function Drivers() {
  const [drivers, setDrivers] = useState([]);

  useEffect( () => {
    const driversList = `http://localhost:3001/drivers/`
    axios.get(driversList)
      .then(response => {
        setDrivers(response.data.drivers);
      });
    },[]);

    const driver = drivers.map(({id, name}) => (
      <div className='card' draggable='true'>
        <span className='driversId'>{id}</span>
        <h4 className='driversName'>{name}</h4>
      </div>
    )
      );

  return(
    <div className="drivers">
      <h1>Drivers</h1>
      <section className="allDrivers">
        
          <div 
            className="onDelivery">
            <h2 className="header">On Delivery</h2>
            {driver}
          </div>
        
        
          <div 
            className="onCall">
            <h2 className="header">On Call</h2>
          </div>
        
        
          <div 
            className="unavailable">
            <h2 className="header">Off Duty</h2>
          </div>
        

      </section>
    </div>
  )
}