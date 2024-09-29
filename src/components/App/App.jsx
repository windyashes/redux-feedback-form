// Components
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import Footer from '../Footer/Footer';
import NextButton from '../NextButton/NextButton';
  // Question Components
  import Feeling from '../Questions/Feeling/Feeling';
  import Understanding from '../Questions/Understanding';
  import Support from '../Questions/Support';
  import Comments from '../Questions/Comments';

// Dependencies
import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';

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
          <NextButton path={'/feeling'} text={'Start'} dothing={() => {console.log('starting form')}}/>
        </Route>
        <Route path='/admin'>

        </Route>
        <Route path='/feeling'>
          <Feeling />
        </Route>
        <Route path='/understanding'>
          <Understanding />
        </Route>
        <Route path='/support'>
          <Support />
        </Route>
        <Route path='/comments'>
          <Comments />
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
