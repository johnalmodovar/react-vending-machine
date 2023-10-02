import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <Link to="/chips" >Chips |</Link>
      <Link to="/kitkat">KitKat |</Link>
      <Link to="/snickers">Snickers</Link>
    </div>
  )
}

export default Nav;