import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import TrailersMovies from "../Trailers/TrailersMovies";
import {AiFillPlayCircle} from "react-icons/ai";

export default function MovieDetails() { 
 
    const params = useParams()
    const movieId = params.id
    console.log({ movieId });
    const [movie, setMovie] = useState(null)
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_MOVIES_API_KEY}`)
            .then(res => setMovie(res.data))
    }, [])

    const [trailer, setTrailer] = useState(true)
    const [movieTitle, setMovieTitle] = useState("")
    const MoviesTitle = (movie) => {
        setMovieTitle(movie.title)
        setTrailer(!trailer)
    }

    console.log(JSON.stringify(movie));
    return (
        <div>
            {movie ? (
                <div className="bg-dark text-light">
                    <div className="d-flex">
                        <div>
                            <h1>{movie.original_title}</h1>
                            <p>{movie.overview}</p>
                            {/* <h3>Genres</h3>
                            <ul>
                                {movie.genres.map(item => <li key={item.id}>{item.name}</li>)}
                            </ul> */}
                           
                            <div id={trailer ? 'container' : 'NoContainer'}> 
                            <AiFillPlayCircle color="#fff" fontSize={40} id={trailer ? "playIcon" : "hide"} onClick={() => MoviesTitle(movie)} /> Trailer
                            {trailer ? console.log : <TrailersMovies moviesTitle={movieTitle} />}
                            
                            </div>
                            
                            
                        </div>
                        <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`} alt="" />
                    </div>
                </div>
            ) : (
                <div className="bg-dark text-light">
                    <p>Loading ...</p>
                </div>
            )}
             
        </div>
    )
}
