import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Application from "./Application";
import Footer from "./Footer";
import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/applcation" element={<Application />} />
        </Routes>
        <Header />
      </BrowserRouter>
      <Home />
      <About />
      <Application />
      <Footer />
    </>
  );
}

export default App;
