import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Men from "./Components/Category/Men";
import Women from "./Components/Category/Women";
import Kids from "./Components/Category/Kids";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/men" element={<Men />} />
          <Route exact path="/women" element={<Women />} />
          <Route exact path="/kids" element={<Kids />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
