import React from 'react'
import "./MovieScreen.css"
import Nav from "../Nav.js";
import Banner from "../Banner.js";
import Row from "../Row.js";
import requests from "../requests";

function MovieScreen() {
  return (
    <div className='MovieScreen'> 
    <Nav />
    <Banner />
    <Row 
          title = "Trending"
          fetchUrl = {requests.fetchTrending}
        /> 
         <Row 
          title = "Romance"
          fetchUrl = {requests.fetchRomanceMovies}
          
        />
         <Row 
          title = "Comedy"
          fetchUrl = {requests.fetchComedyMovies}
          isLargeRow
        />
         <Row 
          title = "Top Rated"
          fetchUrl = {requests.fetchTopRated}
          
        />
         <Row 
          title = "Action"
          fetchUrl = {requests.fetchActionMovies}
          isLargeRow
        />
        <Row 
         title = "Music"
         fetchUrl={requests.fetchMusicMovies}
         isLargeRow
        />
         <Row 
          title = "Netflix Originals"
          fetchUrl = {requests.fetchNetflixOriginals}
          
        />







    </div>
  )
}

export default MovieScreen