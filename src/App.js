import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import BmiCalculator from "./Component/BmiCalculator";



function App() {
  return (
    <BrowserRouter>
      <div className="App " style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<BmiCalculator/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
