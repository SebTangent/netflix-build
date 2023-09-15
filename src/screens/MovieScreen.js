import React from 'react'
import "./MovieScreen.css"
import Nav from "../Nav.js";
import Banner from "../MovieBanner.js";
import Row from "../Row.js";
import requests from "../requests";

function MovieScreen({myList, addToMyList}) {
  return (
    <div className='MovieScreen'> 
    <Nav />
    <Banner />
    <Row 
          title = "Trending"
          fetchUrl = {requests.fetchTrending}
          myList={myList} addToMyList={addToMyList}
        /> 
         <Row 
          title = "Romance"
          fetchUrl = {requests.fetchRomanceMovies}
          myList={myList} addToMyList={addToMyList}
          
        />
         <Row 
          title = "Comedy"
          fetchUrl = {requests.fetchComedyMovies}
          myList={myList} addToMyList={addToMyList}
          isLargeRow
        />
         <Row 
          title = "Top Rated"
          fetchUrl = {requests.fetchTopRated}
          myList={myList} addToMyList={addToMyList}
          
        />
         <Row 
          title = "Action"
          fetchUrl = {requests.fetchActionMovies}
          myList={myList} addToMyList={addToMyList}
          isLargeRow
        />
        <Row 
         title = "Music"
         fetchUrl={requests.fetchMusicMovies}
         myList={myList} addToMyList={addToMyList}
         isLargeRow
        />
         <Row 
          title = "Netflix Originals"
          fetchUrl = {requests.fetchNetflixOriginals}
          myList={myList} addToMyList={addToMyList}
          
        />







    </div>
  )
}

export default MovieScreen