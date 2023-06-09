import React, {useState, useEffect} from 'react';
import axios from 'axios'
import MovieBox from '../MovieBox';



const Movies = () => {
  const [movieShow,setMovieShow] = useState ([]);
  const [movieSho, setMovieSho] = useState ([]);

  
  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=5&api_key=dceb434c5254e155e2b5976630bccbca" )
      .then((res) => res.data)
      .then(data => {
        console.log(data);
        setMovieShow(data.results)
      })
  }, []);

  // useEffect(() => {
  //   axios.get("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&api_key=dceb434c5254e155e2b5976630bccbca" )
  //     .then((res) => res.data)
  //     .then(data => {
  //       console.log(data);
  //       setMovieSho(data.results)
  //     })
  // }, []);

  
return (
  <div className="container mt-5 mb-5 ">
  <div className="row row-cols-2 g-5">
  
        {movieShow.map((movieShowReq)=> <MovieBox key={movieShowReq.id} {...movieShowReq} /> )} 
        {movieSho.map((movieShoReq)=> <MovieBox key={movieShoReq.id} {...movieShoReq} /> )} 
      

    </div>

    </div> 
  )

}
export default Movies ;
  
