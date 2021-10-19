import React, { useEffect, useState }from "react";
import "./Dispatch.css"
import { useParams } from 'react-router';


export default function Dispatch() {
  const [delivery, setDelivery] = useState(null);
  const { deliveryId } = useParams


  useEffect(()=> {
    fetch('../../backend/deliveries.json')
      .then((res) => res.json())
      .then((deliveries) => deliveries.filter((delivery) => {
        return delivery.id === deliveryId;
      }))
      .then((matched) => setDelivery(matched[0]));
    }, []);

  return (
    <div className="dispatch">
      <h1>Deliveries</h1>

      <section className="allDeliveries">
        <div className="singleDelivery">
          <div className="orderId">2242</div>
          <div className="driverName">Ted Lindsey</div>
          <div className="orderDescription">Lumber</div>
          <div className="departure">Jan 3</div>
          <div className="arrival">Jan 7</div>
          <button>modify</button>
          <button>delete</button>
        </div>
      </section>

    </div>
  )
}