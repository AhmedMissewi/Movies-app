import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./MovieBox.css";
import { Link } from 'react-router-dom';




const MovieBox = ({ titel, poster_path, vote_average, release_date, overview, backdrop_path, original_title, original_name, id

}) => {

  const [images, setimages] = useState([]);



  return (
    <div className='card-container' style={{ width: "18rem" }} >

      <div className='card-body'>
        <img className='card-img' src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2" + poster_path} width={300} height={300} />
        <h5 className='card-title' style={{ color: 'white', textAlign: 'center' }}> {original_title} </h5>
        <h5 className='card-title' style={{ color: 'white', textAlign: 'center' }}> {original_name} </h5>
        <p className='card-text' style={{ fontSize: "15px" }}></p>


        <Link to={`/movies/${id}`} >
          <button type='button' className='btn btn-dark'> View More
          </button>
        </Link>

        {/* <h6 className='vote'> {vote_average} </h6> */}
      </div>
    </div>
  )
}

export default MovieBox;