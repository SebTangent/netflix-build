import React from 'react';
import "./TVScreen.css";
import Nav from "../Nav.js";
import Banner from "../TvBanner.js";
import Row from "../Row.js";
import requests from "../requests";

function TVScreen() {
  return (
    <div className = "TVScreen"> 
     <Nav />
     <Banner />
     <Row 
     title = "Kids & Family"
     fetchUrl = {requests.fetchFamilyTV}
     />
     <Row 
     title = "Sci-Fi & Fantasy"
     fetchUrl = {requests.fetchSciFiTV}
     isLargeRow
     />
     <Row 
     title = "Animation"
     fetchUrl = {requests.fetchAnimationTV}
     isLargeRow
     />
     <Row 
     title = "Action & Adventure"
     fetchUrl = {requests.fetchActionTV}
     isLargeRow
     
     />
     <Row 
     title = "Comedy"
     fetchUrl = {requests.fetchComedyTV}
     />

    <Row 
     title = "Reality"
     fetchUrl = {requests.fetchRealityTV}
     isLargeRow
     />


    </div>
  )
}

export default TVScreen