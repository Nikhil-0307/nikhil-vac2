import React from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Route,Routes } from "react-router-dom"
import Home from"./Pages/Home";
import About from"./Pages/About";
import Contacts from"./Pages/Contacts";
import Service from"./Pages/Service";
const App = () => {
  return (
    <div>
      {/* <Header/>
      <Footer /> */}
      
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contacts/>}/>
        <Route path="/service" element={<Service/>}/>
      </Routes>
      App</div>
      
  );
};

export default App