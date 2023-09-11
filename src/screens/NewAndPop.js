import React from 'react'
import "./NewAndPop.css";
import Nav from "../Nav.js";
import Banner from "../Banner.js";
import Row from "../Row.js";
import requests from "../requests";

function NewAndPop() {
  return (
    <div className='NewAndPop'>
     <Nav />
     <Banner />
     <Row 
          title = "Trending"
          fetchUrl = {requests.fetchTrending}
        /> 
     <Row 
          title = "Top Rated"
          fetchUrl = {requests.fetchTopRated}
          />
        




    </div>
  )
}

export default NewAndPop