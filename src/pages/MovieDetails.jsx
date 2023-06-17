import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


export default function MovieDetails() { 
 
    const params = useParams()
    const movieId = params.id
    console.log({ movieId });
    const [movie, setMovie] = useState(null)
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=dceb434c5254e155e2b5976630bccbca`)
            .then(res => setMovie(res.data))
    }, [])

    console.log(JSON.stringify(movie));
    return (
        <div>
            {movie ? (
                <div className="bg-dark text-light">
                    <div className="d-flex">
                        <div>
                            <h1>{movie.original_title}</h1>
                            <p>{movie.overview}</p>
                            <h3>Genres</h3>
                            <ul>
                                {movie.genres.map(item => <li key={item.id}>{item.name}</li>)}
                            </ul>

                            
                            
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
