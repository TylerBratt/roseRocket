import './Navigation.css'
export default function Navigation() {
  return(
    <div className="nav">
      <div className="logo">
        <img src="https://assets-global.website-files.com/60d188ae990678453cff815f/60d1932a2a24f32cd519c9bb_RR%20Logo%2BWordmark.svg" alt="" />
      </div>
      <div className="links">
        <ul>
          <li><a href="./">Home</a></li>
          <li><a href="./Drivers">Drivers</a></li>
          <li><a href="./Orders">Orders</a></li>
        </ul>
      </div>
    </div>
  )
}