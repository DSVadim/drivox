import Layout from './Pages/Layout/Layout.jsx'
import './App.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./Pages/About/About.jsx";
import Cars from "./Pages/Cars/Cars.jsx";
import FAQs from "./Pages/FAQs/FAQs.jsx";

function App() {

  return (
      <BrowserRouter basename="/drivox">
          <Routes>
              <Route path="/" element={<Layout />} />
              <Route path="About" element={<About/>}/>
              <Route path="Cars" element={<Cars/>}/>
              <Route path="FAQs" element={<FAQs/>}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App
