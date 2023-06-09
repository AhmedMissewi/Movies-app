import React, {useEffect, useState} from 'react'
import axios from 'axios';
import MovieBox from '../MovieBox';


export default function Series() {

  const [tvshow,setTvshow] = useState ([]);
  
  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&api_key=dceb434c5254e155e2b5976630bccbca")
      .then((res) => res.data)
      .then(data => {
        console.log(data);
        setTvshow(data.results)
      })
  }, []);

  return (
    <div className="container mt-5 mb-5 ">
      <div className="row row-cols-2 g-5">
        {tvshow.map((tvshowReq)=> <MovieBox key={tvshowReq.id} {...tvshowReq} /> )} 
        
      </div>

    </div>
  )
}
