// Components
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import Footer from '../Footer/Footer';
import NextButton from '../NextButton/NextButton';
// Dependencies
import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min';

// Styles
import './App.css';


function App() {

  return (
    <div className='App'>
      <Router>
        <Route path='/'>
          <Header/>
        </Route>
      <div id="spacer">
        <Route path='/' exact>
          <HomePage />
          <NextButton path={'/feeling'} text={'Start'}/>
        </Route>
        <Route path='/admin'>

        </Route>
        <Route path='/feeling'>

        </Route>
        <Route path='/understanding'>

        </Route>
        <Route path='/support'>

        </Route>
        <Route path='/comments'>

        </Route>
        <Route path='/review'>

        </Route>
        <Route path='/success'>

        </Route>
      </div>
        <Route path='/'>
          <Footer />
        </Route>
      </Router>
    </div>
  );
}

export default App;
