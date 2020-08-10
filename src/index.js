import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Hero from './component/Hero';
import Heroes from "./component/Heroes";
import NavBar from "./component/NavBar";
import Home from "./component/Home";
import HeroDetail from "./component/HeroDetail";

// let firstElement = <h1>Hello World!</h1>; // not a good practice to write HTML code in index.js
// ReactDOM.render(firstElement, document.getElementById('root'));
ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <Route exact path="/" component={Home} />
    <Route exact path="/heroes" component={Heroes} />
    <Route exact path="/heroes/:id" component={HeroDetail} />
  </BrowserRouter>,
  document.getElementById('root'));



















  // import React from 'react';
  // import ReactDOM from 'react-dom';
  // import './index.css';
  // import App from './App';
  // import * as serviceWorker from './serviceWorker';

  // ReactDOM.render(
  //   <React.StrictMode>
  //     <App />
  //   </React.StrictMode>,
  //   document.getElementById('root')
  // );

  // // If you want your app to work offline and load faster, you can change
  // // unregister() to register() below. Note this comes with some pitfalls.
  // // Learn more about service workers: https://bit.ly/CRA-PWA
  // serviceWorker.unregister();