import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MovieBox from '../MovieBox'




export default function Home() {
  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])
  

  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=dceb434c5254e155e2b5976630bccbca")
      .then((res) => res.data)
      .then(data => {
        console.log(data);
        setMovies(data.results);
      })
  }, []);

  // useEffect(() => {
  //   axios.get("https://api.themoviedb.org/3/discover/tv?api_key=dceb434c5254e155e2b5976630bccbca&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0")
  //     .then((res) => res.data)
  //     .then(data => {
  //       console.log(data);
  //       setSeries(data.results)
  //     })
  // }, []);







  return (
    <div className="container mt-5 mb-5 ">
      <div className="row row-cols-2 g-5">
        {[...movies, ...series].map((movieReq) => <MovieBox key={movieReq.id} {...movieReq} />)}
        {/* {Series.map((serieReq)=> <MovieBox key={serieReq.id} {...serieReq} /> )} */}
        
      </div>

    </div>
  )
}
