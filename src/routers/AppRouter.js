import React, {useState} from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { NavBar } from "../components/UI/Navbar";
import About from "../page/About";
import Contact from "../page/Contact";
import Home from "../page/Home";
import Search from "../page/Search";
export const AppRouter = () => {
  const [Categories, setCategories] = useState(['Lofis']);

  return (
    <BrowserRouter >
      <NavBar  setCategories = {setCategories}/>
      <div className="container">
      <Routes>
        <Route path="/" element={<Home  setCategories = {setCategories} Categories = {Categories}/>} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="search" element={<Search />} />
      </Routes>
      </div>

    </BrowserRouter>
  );
};
