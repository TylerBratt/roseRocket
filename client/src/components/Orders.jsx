import React, { useEffect, useState } from "react";
import './Orders.css'
import axios from 'axios';


export default function Orders() {
  const [deliveries, setDeliveries] = useState([]);

  useEffect( () => {
    const deliveriesList = `/deliveries/`
    axios.get(deliveriesList)
      .then(response => {
        setDeliveries(response.data.deliveries);
      });
    },[]);

    const delivery = deliveries.map(({id, description, revenue, cost}) =>(
      <tbody key={id} className="orderCard">
        <tr>
          <td className="orderId">{id}</td>
          <td className="orderDesc">{description}</td>
          <td className="orderRev">{revenue}</td>
          <td className="orderCost">{cost}</td>

          {/* The CSS for this portion completely broke the page  */}
          
          {/* <div className="inputs">
            <div className="sd">
              <input type="date" className="orderStart" />
            </div>
            <div className="ed">
              <input type="date" className="orderEnd" />  
            </div>
            <div className="btn">
              <input type="button" value="Save" />
            </div> 
          </div> */}


        </tr>
      </tbody>
    ));

  return(
    <div className="orders">
      <h1>Orders</h1>
      <div className="allOrders">
        <table className="ordersTable">
          <thead className="ordersHead">
            <tr>
              <th className="orderId">Order ID</th>
              <th className="orderDesc">Description</th>
              <th className="orderRev">Revenue</th>
              <th className="orderCost">Cost</th>
              {/* <th className="startDate">Start Date</th>
              <th className="endDate">End Date</th> */}

            </tr>
          </thead>
            {delivery}
        </table>
      </div>
      
    </div>
  )
}