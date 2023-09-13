import { createContext, useContext, useState } from 'react';

export const MyListContext = createContext();

export function MyListProvider({ children }) {
  const [myList, setMyList] = useState([]);
  
  const addToMyList = (movie) => {
    setMyList([...myList, movie]);
  };

  return (
    <MyListContext.Provider value={{ myList, addToMyList }}>
      {children}
    </MyListContext.Provider>
  );
}

export function useMyList() {
  return useContext(MyListContext);
}
