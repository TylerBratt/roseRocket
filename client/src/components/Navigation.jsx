import './Navigation.css';
import { Link } from 'react-router-dom'

export default function Navigation() {
  return(
    <div className="nav">
      <div className="logo">
        <img src="https://assets-global.website-files.com/60d188ae990678453cff815f/60d1932a2a24f32cd519c9bb_RR%20Logo%2BWordmark.svg" alt="Rose Rocket Logo" />
      </div>
      <div className="links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Dispatch">Dispatch</Link></li>
          <li><Link to="/Drivers">Drivers</Link></li>
          <li><Link to="/Orders">Orders</Link></li>
        </ul>
      </div>
    </div>
    
  )
};