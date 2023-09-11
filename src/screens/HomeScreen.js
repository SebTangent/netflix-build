import React from 'react';
import "./HomeScreen.css";
import Nav from "../Nav.js";
import Banner from "../Banner.js";
import requests from "../requests";
import Row from "../Row.js";


function HomeScreen() {
  return (
    <div className= "homeScreen"> 
        <Nav />
        <Banner />
        <Row 
          title = "Trending"
          fetchUrl = {requests.fetchTrending}
        /> 
        <Row 
          title = "Netflix Originals"
          fetchUrl = {requests.fetchNetflixOriginals}
          isLargeRow
        />
         <Row 
          title = "Top Rated"
          fetchUrl = {requests.fetchTopRated}
          
        />
         <Row 
          title = "Action Movies"
          fetchUrl = {requests.fetchActionMovies}
          isLargeRow
        />
         <Row 
          title = "Comedy Movies"
          fetchUrl = {requests.fetchComedyMovies}
          isLargeRow
        />

         <Row 
          title = "Romance Movies"
          fetchUrl = {requests.fetchRomanceMovies}
          
        />
         <Row 
          title = "Fantasy Movies"
          fetchUrl = {requests.fetchFantasy}
          isLargeRow
        />

  

    </div>
  ); 
}
 
export default HomeScreen