import React,{useState,useEffect} from 'react';
import axios from 'axios'


export default function Action() {
  const [actio,setAction] = useState ([]);

  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=dceb434c5254e155e2b5976630bccbca" )
      .then((res) => res.data)
      .then(data => {
        console.log(data);
        setAction(data.results)
      })
  }, []);


  return (
    <div>Action</div>
  )
}
