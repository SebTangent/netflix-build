import React from 'react';
import './App.css';
import Login from "./screens/LoginScreen";
import HomeScreen from './screens/HomeScreen';
import TVScreen from './screens/TVScreen';
import MovieScreen from './screens/MovieScreen';
import NewAndPop from './screens/NewAndPop';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
    const user = true;
  return (
    <div className="app">
      
    {!user ?(
      <Login/>) 
      :(
        <BrowserRouter>
          <Routes>
             <Route path="/" element={<HomeScreen/>} />
             <Route path="/TVShows" element={<TVScreen/>} />
             <Route path = "/Movies" element={<MovieScreen/>} />
             <Route path = "/New&Popular" element={<NewAndPop/>} />
             
          </Routes>

       </BrowserRouter>
        

      )}

      

    </div>
  );
}

export default App;