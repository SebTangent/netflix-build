import React from 'react';
import "./HomeScreen.css";
import Nav from "../Nav.js";
import Banner from "../Banner.js";
import requests from "../requests";
import Row from "../Row.js";



function HomeScreen({ myList, addToMyList }) {
  return (
    <div className= "homeScreen"> 
        <Nav />
        <Banner />
        <Row 
          title = "Trending"
          fetchUrl = {requests.fetchTrending}
          myList={myList} addToMyList={addToMyList}
        /> 
        <Row 
          title = "Netflix Originals"
          fetchUrl = {requests.fetchNetflixOriginals}
          myList={myList} addToMyList={addToMyList}
          isLargeRow
        />
         <Row 
          title = "Top Rated"
          fetchUrl = {requests.fetchTopRated}
          myList={myList} addToMyList={addToMyList}
          
        />
         <Row 
          title = "Action Movies"
          fetchUrl = {requests.fetchActionMovies}
          myList={myList} addToMyList={addToMyList}
          isLargeRow
        />
         <Row 
          title = "Comedy Movies"
          fetchUrl = {requests.fetchComedyMovies}
          myList={myList} addToMyList={addToMyList}
          isLargeRow
        />

         <Row 
          title = "Romance Movies"
          fetchUrl = {requests.fetchRomanceMovies}
          myList={myList} addToMyList={addToMyList}
          
        />
         <Row 
          title = "Fantasy Movies"
          fetchUrl = {requests.fetchFantasy}
          myList={myList} addToMyList={addToMyList}
          isLargeRow
        />

  

    </div>
  ); 
}
 
export default HomeScreen