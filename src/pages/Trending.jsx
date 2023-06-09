import React,{useState, useEffect} from 'react'
import axios from 'axios'
import MovieBox from '../MovieBox'

export default function Trending() {
const [trend,setTrend]= useState ([])

useEffect(() => {
  axios.get("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&api_key=dceb434c5254e155e2b5976630bccbca")
    .then((res) => res.data)
    .then(data => {
      console.log(data);
      setTrend(data.results);
    })
}, []);



  return (
    <div className="container mt-5 mb-5 ">
      <div className="row row-cols-2 g-5">
        {trend.map((trendReq)=> <MovieBox key={trendReq.id} {...trendReq} /> )} 
        
      </div>

    </div>
  )
  
}
