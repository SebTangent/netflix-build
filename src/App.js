import React, {useState} from 'react';
import './App.css';
import Login from "./screens/LoginScreen";
import HomeScreen from './screens/HomeScreen';
import TVScreen from './screens/TVScreen';
import MyList from "./screens/MyList";
import MovieScreen from './screens/MovieScreen';
import { MyListProvider } from './listContents';
import NewAndPop from './screens/NewAndPop';
import { BrowserRouter, Routes, Route } from "react-router-dom";
 

function App() {
  const [myList, setMyList] = useState([]);

  const addToMyList = (movie) => {
    setMyList([...myList, movie]);
  };

    const user = false;
  return (
    <div className="app">
      
    {!user ?(
      <Login/>) 
      :(
       <BrowserRouter>
        <MyListProvider>
          <Routes>
             <Route path="/" element={<HomeScreen myList={myList} addToMyList={addToMyList} />} />
             <Route path="/TVShows" element={<TVScreen myList={myList} addToMyList={addToMyList} />} />
             <Route path = "/Movies" element={<MovieScreen myList={myList} addToMyList={addToMyList} />} />
             <Route path = "/New&Popular" element={<NewAndPop myList={myList} addToMyList={addToMyList} />} />
             <Route path="/MyList" element={<MyList myList={myList} />} />
             
          </Routes>
          </MyListProvider>
       </BrowserRouter>
        

      )}

      

    </div>
  );
}

export default App;