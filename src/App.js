import React, {} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
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
import MovieDetails from "./pages/MovieDetails";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import Public from "./routes/Public";
import { login } from "./redux/actions/userActionCreators";
import { useDispatch } from "react-redux";
import Login from "./Login";




function App() {
 



  return (
    <div>
      {/* <BrowserRouter>
        <Navbar/> 
        <Route exact path="/"  component={Home} />
        <Route exact path="/movies" component={Movies} />
        <Route path="/series" component={Series} />
        <Route path="/trending" component={Trending} />
        <Route path="/categories" component={Categories} />
        <Route path="/Action" component={Action} />
        <Route path="/Dramas" component={Dramas} />
        <Route path="/Horror" component={Horror} />
        <Route path="/KidsAndFamily" component={KidsAndFamily} />
        <Route path="/Comedies" component={Comedies} />
        <Route path="/Romance" component={Romance} />
        <Route path="/movies/:id" component={MovieDetails} />
        
        <Route path="/Login" component={Loginswitch} />
        <Route path="/Register" component={Registerswitch} /> 
      </BrowserRouter> */}
      {/* <BrowserRouter>
        <Switch>
          <PublicRoute restricted={false} component={Public} path="/" exact />
          <PublicRoute restricted={true} component={Loginswitch} path="/Login" exact />
          <PrivateRoute component={Navbar} path="../Navbar" exact />
        </Switch>
      </BrowserRouter> */}

<BrowserRouter>
      <div className="App">
      <Navbar/>
      <Switch>
          <PublicRoute exact path="/" component={Loginswitch} />
          {/* <Navbar/>  */}
          <PrivateRoute  path='/home' component={Home} /> 
          <PrivateRoute  path='/movie' component={Movie} /> 
          <PrivateRoute  path='/series' component={Series} /> 
          <PrivateRoute path='/trending' component={Trending} /> 
          <PrivateRoute path="/movies/:id" component={MovieDetails} />
          {/* <PrivateRoute path="/" component={} /> */}
      </Switch>
        
      </div>
    </BrowserRouter>
        
      
      
    </div> 

  
  )
}

export default App
        
   
        