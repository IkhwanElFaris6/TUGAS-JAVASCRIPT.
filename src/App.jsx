import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Pages";
import Location from "./Pages/Location";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="location" element={<Location />} />
        </Routes>
        </BrowserRouter>
  </div>

  
  </>
  )
}

export default App
