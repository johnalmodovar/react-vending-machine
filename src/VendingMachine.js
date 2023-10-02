import { Link } from "react-router-dom";

function VendingMachine() {

  return (
    <div className="VendingMachine">
      <h1>VENDING MACHINE HERE:</h1>
      <ul>
        <li><Link to="/chips" >Chips</Link></li>
        <li><Link to="/kitkat">KitKat</Link></li>
        <li><Link to="/snickers">Snickers</Link></li>
      </ul>
    </div>
  )
}

export default VendingMachine;