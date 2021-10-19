import './Drivers.css';
// import axios from 'axios';

export default function Drivers() {

  


  return(
    <div className="drivers">
      <h1>Drivers</h1>

      <section className="allDrivers">
        <div className="onDelivery">
          <h2 className="header">On Delivery</h2>
          <div className="card"><span className="driverId">1</span> Dirk Stickler</div>
        </div>
        <div className="onCall">
          <h2 className="header">On Call</h2>
          <div className="card"><span className="driverId">2</span>Jordon Coswell </div>
        </div>
        <div className="unavailable">
          <h2 className="header">Off Duty</h2>
          <div className="card"><span className="driverId">13</span>Ralphy Windlow</div>
        </div>
      </section>
    </div>
  )
}