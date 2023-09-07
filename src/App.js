import React from 'react';
import './App.css';
import Login from "./screens/LoginScreen"
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
    const user = false;
  return (
    <div className="app">
      
    {!user ?(
      <Login/>) 
      :(
        <BrowserRouter>
          <Routes>
             <Route path="/" element={<HomeScreen/>} />

          </Routes>
       </BrowserRouter>
        

      )}

      

    </div>
  );
}

export default App;