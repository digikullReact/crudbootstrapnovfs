import React,{useState} from 'react';


/**
 * ES6 module -->react 
 * 
 * common js module system -->node js --> require()  ,modules.exports
; */

import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Home } from './components/Home';
import {Login,k} from './components/Login';
import Header from './components/Header';
import Ref from './components/Ref';
import RefsIn from './components/RefsIn';


function App() {



  return (
    <BrowserRouter>
    {k}
    <Header/>
    <Routes>

        <Route  path="/home" element={<Home />} />

        <Route  path="/login" element={<Login/>} />
      
        <Route  path="/ref" element={<RefsIn/>} />

  
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;
