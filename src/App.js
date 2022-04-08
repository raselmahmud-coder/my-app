import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Module 58/Home/Home";
import Login from "./components/Module 58/Login/Login";
import Header from "./components/Module 58/Header/Header";
const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<Login/>}></Route>
      </Routes>
    </>
  );
};

export default App;
