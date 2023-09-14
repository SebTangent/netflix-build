import React from 'react';
import "./MyList.css";
import Nav from "../Nav.js";

const base_url = "https://image.tmdb.org/t/p/original/";

function MyList({myList}) {
  return (
    <div className="ListPage">
      <Nav />
      <div className="ListName"> 
        <h1>My List</h1>
      </div>
      <div className="myListRowPosters">  
        {myList.map((movie, index) => (
          <div className="myListPosterContainer" key={index}> 
            <img
              className="myListRow__poster" 
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
