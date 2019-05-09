import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

import NavBar from "./component/nav/nav"
import Home from "./component/home/home"
import Lore from "./component/lore/lore"
import TheTest from "./component/theTest/theTest"
import About from "./component/about/about"
import Contact from "./component/contact/contact"

function App() {
  return (

    <BrowserRouter>
    <div className="App">
      <NavBar />


        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/lore' component={Lore} />
          <Route path='/test' component={TheTest} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
