import React from 'react';
import "./MyList.css";
import Nav from "../Nav.js";

const base_url = "https://image.tmdb.org/t/p/original/";  // The same URL you used in Row component

function MyList({myList}) {
  return (
    <div className="ListPage">
      <Nav />
      <h1>My List</h1>
      <div className="rowPosters">  
        {myList.map((movie, index) => (
          <div className="posterContainer" key={index}>
            <img
              className="row__poster" 
              src={`${base_url}${movie.poster_path || movie.backdrop_path}`}  
              alt={movie.name || movie.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyList;