import React, { useState, useEffect } from 'react';
import './Row.css';
import axios from './axios';

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const [hoveredMovie, setHoveredMovie] = useState(null);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 className="MovieTitle">{title}</h2>
      <div className="rowPosters">
        {movies.map((movie, index) => (
          <div
            className="posterContainer"
            key={movie.id}
            onMouseOver={() => setHoveredMovie({ ...movie, index })}
            onMouseOut={() => setHoveredMovie(null)}
          >
            <img
              className={`row__poster ${isLargeRow ? 'row__posterLarge' : ''}`}
              src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name || movie.title}
            />
            {hoveredMovie && hoveredMovie.id === movie.id && (
              <div className="previewModal--container">
                <h3>{hoveredMovie.name || hoveredMovie.title}</h3> {/* Only the title */}
              <div className= "previewModal--buttonContainer"> 
                <button className = "PlayButton">
                    <i className="fa fa-play"></i>
                </button>
                <button className = "addtolist"> +</button>
              </div>
            </div>
            )}
          </div>
        ))}
      </div>
    </div>
);
}

export default Row;