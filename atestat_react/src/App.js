import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router,Route,Link ,Switch } from "react-router-dom";

import Anunturi from './components/anunturi';
import Navbar from './components/navbar';
import Search from './components/search';
import Contulmeu from'./components/Contulmeu';


function App() {
  return (

    <div className="App">
      <Navbar />
      <br></br>
      <Router>
       
            <Route path="/cauta_anunt"  exact component={Search}/>
          <Route path="/creare_anunt" component={Anunturi}/>
          <Route path="/contul_meu" component={Contulmeu}/>

      </Router>
    </div>

    
  );
}

export default App;
