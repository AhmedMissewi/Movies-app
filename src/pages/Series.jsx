import React, {useEffect, useState} from 'react'
import axios from 'axios';
import MovieBox from '../MovieBox';


export default function Series() {

  const [tvshow,setTvshow] = useState ([]);
  
  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=dceb434c5254e155e2b5976630bccbca&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true")
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
