import Layout from './Pages/Layout/Layout.jsx'
import './App.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./Pages/About/About.jsx";

function App() {

  return (
      <BrowserRouter basename="/drivoxe">
          <Routes>
              <Route path="/" element={<Layout />} />
              <Route path="About" element={<About/>}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App
