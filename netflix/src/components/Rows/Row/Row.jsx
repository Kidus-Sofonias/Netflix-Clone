import React, {useEffect, useState} from 'react'
import './Row.css'
import axios from '../../../utilities/axios'


const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([])
    const base_url = "https://image.tmdb.org/t/p/original/"

    useEffect(() => {
        (async () => {
            try {
                const request = await axios.get(fetchUrl)
                setMovies(request.data.results)
            }  catch (error) {              
                console.log(error)
        }
        })();    
    }, [fetchUrl])
    const opts ={
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    }
    return (
    <div className='row'>
        <h1 className='title'>{title}</h1>
        <div className="row-posters">
            {movies?.map((movie, i) => (
                <img
                    onClick={() => handleClick(movie)}
                    key={i}
                    className={`row-poster ${isLargeRow && "row-poster-large"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}
                />
            ))}
        </div>
        {/* <div style={{padding: '40px'}}>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div> */}
    </div>
  )
}

export default Row