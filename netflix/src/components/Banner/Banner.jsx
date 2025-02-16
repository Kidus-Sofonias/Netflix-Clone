import React, { useState, useEffect } from 'react'
import './Banner.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from '../../utilities/axios.js'
import requests from '../../utilities/request.js'

export const Banner = () => {
    const [movie, setMovie] = useState({});
    useEffect(() => {
        (async function fetchData() {
            try {
                const request = await axios.get(requests.fetchNetflixOriginals);
                console.log(request)
                setMovie(request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                ]);
            } catch (error) {
                console.log("ERROR", error)
            }
        })()
    }, [])
return (
    <div
            className='banner'
            style={{
                    paddingTop: '100px',
                    backgroundSize: 'cover',
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${window.innerWidth < 320 ? movie?.poster_path : movie?.backdrop_path}")`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
            }}
    >
            <div className='banner_contents'>
                    <h1 className='banner_title'>{movie?.title || movie?.name || movie?.original_name}</h1>
                    <div className='banner_buttons'>
                            <button className='banner_button'>Play</button>
                            <button className='banner_button'>My List</button>
                    </div>
                    <h1 className='banner_description'>{movie?.overview}</h1>
            </div>
            <div className="banner_fadeBottom"/>
    </div>
)
}
