import { Routes, Route } from "react-router-dom";

import Chips from "./Chips";
import KitKat from "./KitKat";
import Snickers from "./Snickers";
import VendingMachine from "./VendingMachine";

function RouteList() {
  return (
    <Routes>
      <Route path="/chips" element={<Chips />} />
      <Route path="/kitkat" element={<KitKat />} />
      <Route path="/snickers" element={<Snickers />} />
      <Route path="/" element={<VendingMachine />} />
    </Routes>
  )
}

export default RouteList;