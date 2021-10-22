import React, { useEffect, useState } from "react";
import './Orders.css'
import axios from 'axios';


export default function Orders() {
  const [deliveries, setDeliveries] = useState([]);

  useEffect( () => {
    const deliveriesList = `http://localhost:3001/deliveries/`
    axios.get(deliveriesList)
      .then(response => {
        setDeliveries(response.data.deliveries);
      });
    },[]);

    const delivery = deliveries.map(({id, description, revenue, cost}) =>(
      <tbody className="orderCard">
        <tr>
          <td className="orderId">{id}</td>
          <td className="orderDesc">{description}</td>
          <td className="orderRev">{revenue}</td>
          <td className="orderCost">{cost}</td>
        </tr>
      </tbody>

    ))

    console.log(deliveries)


  return(
    <div className="orders">
      <h1>Orders</h1>
      <div className="allOrders">
        <table className="ordersTable">
          <thead>
            <tr>
              <th className="orderId">Order ID</th>
              <th className="orderDesc">Description</th>
              <th className="orderRev">Revenue</th>
              <th className="orderCost">Cost</th>
            </tr>
          </thead>
          <tbody>
            {delivery}
          </tbody>
        </table>
      </div>
      
    </div>
  )
}