import React from 'react';
import "./TVScreen.css";
import Nav from "../Nav.js";
import Banner from "../TvBanner.js";
import Row from "../Row.js";
import requests from "../requests";

function TVScreen({myList,addToMyList}) {
  return (
    <div className = "TVScreen"> 
     <Nav />
     <Banner />
     <Row 
     title = "Kids & Family"
     fetchUrl = {requests.fetchFamilyTV}
     myList={myList} addToMyList={addToMyList}
     />
     <Row 
     title = "Sci-Fi & Fantasy"
     fetchUrl = {requests.fetchSciFiTV}
     myList={myList} addToMyList={addToMyList}
     isLargeRow
     />
     <Row 
     title = "Animation"
     fetchUrl = {requests.fetchAnimationTV}
     myList={myList} addToMyList={addToMyList}
     isLargeRow
     />
     <Row 
     title = "Action & Adventure"
     fetchUrl = {requests.fetchActionTV}
     myList={myList} addToMyList={addToMyList}
     isLargeRow
     
     />
     <Row 
     title = "Comedy"
     fetchUrl = {requests.fetchComedyTV}
     myList={myList} addToMyList={addToMyList}
     />

    <Row 
     title = "Reality"
     fetchUrl = {requests.fetchRealityTV}
     myList={myList} addToMyList={addToMyList}
     isLargeRow
     />


    </div>
  )
}

export default TVScreen