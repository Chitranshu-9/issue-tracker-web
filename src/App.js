// import logo from './logo.svg';
import './App.css';
import HomePage from './components/homepage';
import CreateIssue from './components/createIssue';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './components/navbar.css';
import { useState } from "react";
import { createIssue } from "./components/createIssue";
import { ProjectDetail } from "./components/ProjectDetail";


function App() {
  var [isHome, setIsHome] = useState(false);
  function updateHome() {
    setIsHome(!isHome);
  }

  // console.log(isHome)
  return (

    < Router >

      <div className="App">
        {/* <h1>Issue tracker</h1> */}
        {/* <nav class="navbar navbar-expand-sm   navbar-light bg-light">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#">Issue Tracker</a>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#" onClick={updateHome}> Home </a>
              </li>
              
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input id="search-box" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            </form>
          </div>
        </nav> */}
        <HomePage />
      </div>
    </Router >
  );
}

export default App;
