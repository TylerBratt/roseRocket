import React, { useEffect, useState }from "react";
import "./Dispatch.css"
import axios from 'axios';


export default function Dispatch() {
  const [delivery, setDelivery] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [state, setState] = useState('')


  useEffect( () => {
    const driversList = `/drivers/`
    axios.get(driversList)
      .then(response => {
        setDrivers(response.data.drivers);
      });
    },[]);

  useEffect( () => {
    const deliveriesList = `/deliveries/`
    axios.get(deliveriesList)
      .then(response => {
        setDelivery(response.data.deliveries);
      });
    },[]);

    //Attempt to create drag and drop functionality
    //can drag and drop, but only in the order of the original array


    const onDragStart = (event, id) => {
      event.dataTransfer.setData('text/plain', event.target.id)
      let data = event.dataTransfer.getData('Text');
      console.log('this is also data',data)
    };

    const onDragOver = (event) => {
      event.preventDefault();
    };

    const onDrop = (event) => {
      event.preventDefault();
      if (event.target.id === "driverContainer") {
        document.getElementById('dispatchModify').style.display='none';
        let data = event.dataTransfer.getData('Text')
        event.target.appendChild(document.getElementById(data));
      }
    };

    //allow user to edit cost/revenue

    // const editPrice = () => {
    //   let editElem = document.getElementById('dispatchRev');
    //   let userVersion = editElem.innerHTML;
    //   localStorage.userEdits = userVersion;
    // }

    const removeDelivery = (event) => {
      document.addEventListener('click', () => {
        let elem = document.getElementById("dispatchOrder");
        elem.parentNode.removeChild(elem);
        event.stopPropagation()
      }, {once: true});
    };


    const singleOrder = delivery.map(({id, description, revenue, cost }) => (

      <div 
        key={id}
        id="dispatchOrder" 
        draggable 
        onDragStart={(e)=>onDragStart(e, id)}
        >
          <div className="dispatchId">{id}</div>
          <div className="dispatchDesc">{description}</div>
          <div
            id="dispatchRev" 
            // contentEditable="true"
            >{revenue}</div>
          <div 
            id="dispatchCost" 
            // contentEditable="false"
            >{cost}</div>
            <button id="dispatchModify">modify</button>
            <button 
              id="dispatchDelete"
              onClick={(e)=>removeDelivery(e)}
              >delete</button>
      </div>
    ));



    const singleDriver = drivers.map(({id, name})=> (
      <div 
        id="driverContainer" 
        key={id} 
        onDragOver={(e)=>onDragOver(e)}
        onDrop={(e)=>onDrop(e, 'complete')}
        >
        <h3 className="dispatchName">{name}</h3>
      </div>
    ));

  return (
    <div className="dispatch">
      <h1>Deliveries</h1>

        <section className="allDeliveries">
          <div className="availableDeliveries">
            <thead className="tableHead">
              <th>Order ID</th>
              <th>Description</th>
              <th>Revenue</th>
              <th>Cost</th>
            </thead>
              {singleOrder}
          </div>
            <div className="allDriversContainer">
              {singleDriver}
              <div className="dropArea"></div>
            </div>

        </section>


    </div>
  )
}