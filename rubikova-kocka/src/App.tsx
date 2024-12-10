import { BrowserRouter, Route, Routes } from "react-router"
import Istorija from "./stranice/Istorija"
import Tutorial from "./stranice/Tutorial"
import Varijante from "./stranice/Varijante"
import Glavna from "./stranice/Glavna"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Glavna /> } />
        <Route path="/istorija" element={ <Istorija /> } />
        <Route path="/tutorial" element={ <Tutorial /> } />
        <Route path="/varijante" element={ <Varijante /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
