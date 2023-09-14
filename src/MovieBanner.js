import React, {useEffect, useState} from 'react';
import "./TvBanner.css";
import axios from './axios';
import requests from './requests'
import 'font-awesome/css/font-awesome.min.css';


function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTopRated);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);
    console.log(movie);

  
    function truncate(string, n){
        return string?.length > n ? string.substring(0, n-1) + '...': string;
    }
  return (
    <header className ="Banner" style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}}> 
         
 
    <div className = "banner_contents">

        <h1 className = "banner_title">
            {movie?.title || movie?.name || movie?.original_name}
        </h1>

            <div className = "banner_buttons">
                <h1 className = "banner_description">{truncate( movie?.overview , 175)}</h1>

                <button className = "play_button"> 

                    <i className="fa fa-play"></i> Play

                </button>
                <button className = "banner_button"> 
                <i className="fa fa-info-circle"></i> More Info
                </button>
            
           
 
        </div>
    </div>
    <div className = "banner--fade" />
    </header>
  )
}

export default Banner