import React, { Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaHome} from "react-icons/fa";
import { FaFilm} from "react-icons/fa";
import { FaTv} from "react-icons/fa";
import { FaFire} from "react-icons/fa"
import { FaList} from "react-icons/fa"
import {FaUserCircle} from "react-icons/fa"


export default function Navbar() {
  return (
    <>
    <nav className="navbar bg-black navbar-dark navbar-expand-md  ">
            <div className="container-fluid ">
                <Link className="navbar-brand " to="/" style={{  }}>Watch ToYou</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-around "  id="navbarNav">
                    <ul className="navbar-nav  nav-underline ">
                        <li className="nav-item ">
                            <NavLink className="nav-link active " to="/"><FaHome size="20px" color='red' /> <br/> Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  className="nav-link  cursor-pointer" to="/Movies">  <FaFilm size="20px" color='red' /> <br/>Movies</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Series"> <FaTv size="20px" color='red' /> <br/> Series</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " to="/Trending"> <FaFire size="20px" color='red' /> <br/> Trending</NavLink>
                        </li>
                        
                        <li className="nav-item dropdown">
                          <NavLink className="nav-link dropdown-toggle" to="/Categories" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <FaList size="20px" color='red'/> <br/> Categories </NavLink>
                         <ul className="dropdown-menu  bg-dark">
                         <li><NavLink className="dropdown-item bg-dark text-light" to="/Action">Action</NavLink></li> <br/>
                         <li><NavLink className="dropdown-item bg-dark text-light" to="/Dramas">Dramas</NavLink></li> <br/>
                         <li><NavLink className="dropdown-item bg-dark text-light" to="/KidsAndFamily">Kids And Family</NavLink></li> <br/>
                         <li><NavLink className="dropdown-item bg-dark text-light" to="/Horror">Horror</NavLink></li> <br/>
                         <li><NavLink className="dropdown-item bg-dark text-light" to="/Comedies">Comedies</NavLink></li> <br/>
                         <li><NavLink className="dropdown-item bg-dark text-light" to="/Romance">Romance</NavLink></li>
                        </ul>
                        </li>  
                        <li className="nav-item d-flex justify-content-end">
                            <NavLink className="nav-link " to="/Login" style={{marginLeft:"150px"}}> <FaUserCircle size="30px" color='BLUE' /> <br/> Account</NavLink>
                        </li>
                    </ul>

                    
                  
                </div>
            </div>
    </nav>
    </>
  )
}

