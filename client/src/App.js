import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
<<<<<<< Updated upstream
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
=======
import Contact from "./pages/Contact";
>>>>>>> Stashed changes

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
<<<<<<< Updated upstream
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
=======
            <Route path="contact" element={<Contact />} />
>>>>>>> Stashed changes
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
