import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Practice from "./compo/Practice";
import Product from "./compo/new assignment/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./compo/new assignment/ProductDetail";


function App() {
 
  return (

   <BrowserRouter>
   <Routes>
    <Route path= "/" element={<Product/>} />
    <Route path="/productdetail/:id" element={<ProductDetail/>} />
 
   </Routes>
   </BrowserRouter>
  );
}

export default App;
