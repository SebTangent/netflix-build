import React, {useState, useEffect} from 'react';
import './App.css';
import Login from "./screens/LoginScreen";
import HomeScreen from './screens/HomeScreen';
import TVScreen from './screens/TVScreen';
import MyList from "./screens/MyList";
import MovieScreen from './screens/MovieScreen';
import { MyListProvider } from './listContents';
import NewAndPop from './screens/NewAndPop';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth } from "./screens/firebase1"
import { useDispatch, useSelector } from 'react-redux';
import {logout, login,selectUser} from "./features/counter/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      console.log("Auth state changed", userAuth); // Debugging line
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      } else {
        dispatch(logout());
      }
    });
  
    return () => {
      unsubscribe();
    };
  }, []);
  
  const [myList, setMyList] = useState([]);

  const addToMyList = (movie) => {
    setMyList([...myList, movie]);
  };

    
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