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

  const onDragStart = (event, id) => {
    event.dataTransfer.setData('text/plain', event.target.id);
    let data = event.dataTransfer.getData('Text')
    console.log('this is data',data)
  };

  const onDragOver = (event) => {
    event.preventDefault();
  }

  const onDrop =(event) => {
    event.preventDefault();
    if (event.target.id === "dropArea1" ||
        event.target.id === "dropArea2" ||
        event.target.id === "dropArea3") {
      let data = event.dataTransfer.getData("text")
        event.target.appendChild(document.getElementById(data));
      }
  }


    const driver = drivers.map(({id, name}) => (
      <div 
        key={id}
        id='card' 
        draggable
        onDragStart={(e)=>onDragStart(e, id)}>
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
            className="onDelivery"
            id="dropArea1"
            onDragOver={(e)=>onDragOver(e)}
            onDrop={(e)=>onDrop(e, 'complete')}
            >
            <h2 className="header">On Delivery</h2>
            {driver}
          </div>
          <div 
            className="onCall"
            id="dropArea2"
            onDragOver={(e)=>onDragOver(e)}
            onDrop={(e)=>onDrop(e, 'complete')}
            >
            <h2 className="header">On Call</h2>
          </div>
          <div 
            className="unavailable"
            id="dropArea3"
            onDragOver={(e)=>onDragOver(e)}
            onDrop={(e)=>onDrop(e, 'complete')}
            >
            <h2 className="header">Off Duty</h2>
          </div>
        

      </section>
    </div>
  )
}