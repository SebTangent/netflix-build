import React from 'react'
import "./NewAndPop.css";
import Nav from "../Nav.js";
import Banner from "../Banner.js";
import Row from "../Row.js";
import requests from "../requests";

function NewAndPop({myList, addToMyList}) {
  return (
    <div className='NewAndPop'>
     <Nav />
     <Banner />
     <Row 
          title = "Trending"
          fetchUrl = {requests.fetchTrending}
          myList={myList} addToMyList={addToMyList}
        /> 
     <Row 
          title = "Top Rated"
          fetchUrl = {requests.fetchTopRated}
          myList={myList} addToMyList={addToMyList}
          />
        




    </div>
  )
}

export default NewAndPop