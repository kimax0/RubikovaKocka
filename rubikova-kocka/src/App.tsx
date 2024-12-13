import { BrowserRouter, Route, Routes } from "react-router"
import Istorija from "./stranice/Istorija"
import Uputstvo from "./stranice/Uputstvo"
import Varijante from "./stranice/Varijante"
import Glavna from "./stranice/Glavna"
import Kviz from "./stranice/Kviz"
import Navigacija from "./komponente/Navigacija"
import Main from "./stranice/Main"
import Navigation from "./komponente/Navigation"
import History from "./stranice/History"
import Variations from "./stranice/Variations"
import Guide from "./stranice/Guide"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <><Navigacija /> <Glavna /></> } />
        <Route path="/istorija" element={ <><Navigacija /> <Istorija /></> } />
        <Route path="/uputstvo" element={ <><Navigacija /> <Uputstvo /></> } />
        <Route path="/varijante" element={ <><Navigacija /> <Varijante /></> } />
        <Route path="/kviz" element={ <><Navigacija /> <Kviz /></> } />
        <Route path="/en" element={ <><Navigation /> <Main /></> } />
        <Route path="/history" element={ <><Navigation /> <History /></> }/>
        <Route path="/variations" element={ <><Navigation /> <Variations /></> } />
        <Route path="/guide" element={ <><Navigation /> <Guide /></> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
