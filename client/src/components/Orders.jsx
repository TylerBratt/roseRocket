import React, { useEffect, useState } from "react";
import axios from 'axios';


export default function Orders(props) {

  fetch('http://localhost:3001/backend/data/deliveries.json')

  return(
    <div className="orders">
      <h1>This is Orders</h1>
      
    </div>
  )
}