import React, {useEffect, useState} from 'react'
import './Row.css'
import axios from '../../../utilities/axios'
import movieTrailer from 'movie-trailer'
import YouTube from 'react-youtube'


const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState('')
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
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('')
        } else {
            movieTrailer(movie?.title || movie?.name || movie?.original_name )
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParams.get('v'))
            }).catch(error => console.log(error))
    }
    }
    const opts ={
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    }
    return (
    <div className='row'> {/* Container for the entire row */}
        <h1 className='title'>{title}</h1> {/* Display the title of the row */}
        <div className="row-posters"> {/* Container for the movie posters */}
            {movies?.map((movie, i) => ( /* Iterate over the movies array and render each movie poster */
                <img
                    onClick={() => handleClick(movie)} /* Set up click handler to play trailer */
                    key={i} /* Unique key for each movie poster */
                    className={`row-poster ${isLargeRow && "row-poster-large"}`} /* Apply CSS classes conditionally */
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} /* Set the image source URL */
                    alt={movie.name} /* Set the alt text for the image */
                />
            ))}
        </div>
        <div style={{padding: '40px'}}> {/* Padding around the YouTube player */}
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} {/* Render YouTube player if trailerUrl is set */}
        </div> 
    </div>
  )
}

export default Row