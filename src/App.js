import "./App.css";
import Navbar from "./Components/Views/Navbar";
import Home from "./Components/Views/Home";
import Stacke from "./Components/Views/Stacke";

import Footer from "./Components/Views/Footer";
import { Route, Routes } from "react-router-dom";
import Admin from "./Components/Views/Admin";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/connect" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
