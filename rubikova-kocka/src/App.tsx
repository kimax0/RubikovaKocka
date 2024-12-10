import { BrowserRouter, Route, Routes } from "react-router"
import Istorija from "./stranice/Istorija"
import Uputstva from "./stranice/Uputstva"
import Varijante from "./stranice/Varijante"
import Glavna from "./stranice/Glavna"
import Kviz from "./stranice/Kviz"
import Navigacija from "./komponente/Navigacija"

function App() {
  return (
    <BrowserRouter>
      <Navigacija />
      <Routes>
        <Route path="/" element={ <Glavna /> } />
        <Route path="/istorija" element={ <Istorija /> } />
        <Route path="/uputstva" element={ <Uputstva /> } />
        <Route path="/varijante" element={ <Varijante /> } />
        <Route path="/kviz" element={ <Kviz /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
