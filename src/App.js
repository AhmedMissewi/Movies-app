import React, {} from "react";
import { BrowserRouter, Route,  } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Trending from "./pages/Trending";
import Categories from "./pages/CategoriesList/Categories";
import Action from "./pages/CategoriesList/Action";
import Dramas from "./pages/CategoriesList/Dramas";
import Horror from "./pages/CategoriesList/Horror";
import KidsAndFamily from "./pages/CategoriesList/KidsAndFamily";
import Comedies from "./pages/CategoriesList/Comedies";
import Romance from "./pages/CategoriesList/Romance";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Loginswitch from "./Loginswitch";
import Registerswitch from "./Registerswitch";
import Youtube from "react-youtube";




function App() {



  return (
    <div>
      <BrowserRouter>
        <Navbar/> 
        <Route exact path="/"  component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/series" component={Series} />
        <Route path="/trending" component={Trending} />
        <Route path="/categories" component={Categories} />
        <Route path="/Action" component={Action} />
        <Route path="/Dramas" component={Dramas} />
        <Route path="/Horror" component={Horror} />
        <Route path="/KidsAndFamily" component={KidsAndFamily} />
        <Route path="/Comedies" component={Comedies} />
        <Route path="/Romance" component={Romance} />
        
        
        <Route path="/Login" component={Loginswitch} />
        <Route path="/Register" component={Registerswitch} /> 
      
           
        
      </BrowserRouter>
      
    </div> 

  
  )
}

export default App
        
   
        