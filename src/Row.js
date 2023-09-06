import React, { useState, useEffect } from 'react';
import "./Row.css";
import axios from './axios';

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      try {
        // Make an HTTP request using axios with the provided fetchUrl
        const response = await axios.get(fetchUrl);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    // Call the fetchData function when the component mounts
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="row">
      <h2 className = "MovieTitle">{title}</h2>

    <div className = "rowPosters">
      {movies.map(movie => (
        <img 
          className={`row__poster ${isLargeRow && "row__posterLarge"}`} // Use backticks
          key={movie.id}
          src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
          alt={movie.name} 
        />
      ))}
    </div>
</div>
  );
}

export default Row;
