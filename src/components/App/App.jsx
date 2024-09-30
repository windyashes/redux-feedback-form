// Components
import Header from '../Header/Header';
import AdminPage from '../AdminPage/AdminPage';
import HomePage from '../HomePage/HomePage';
import Footer from '../Footer/Footer';
import NextButton from '../NextButton/NextButton';
import ReviewPage from '../ReviewPage/ReviewPage';
import SuccessPage from '../SuccessPage/SuccessPage';
  // Question Components
  import Feeling from '../Questions/Feeling/Feeling';
  import Understanding from '../Questions/Understanding/Understanding';
  import Support from '../Questions/Support/Support';
  import Comments from '../Questions/Comments/Comments';

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
          <NextButton path={'/feeling'} text={'Start'} dothing={() => {console.log('starting form')}}/>
        </Route>
        <Route path='/admin'>
          <AdminPage />
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
          <ReviewPage />
        </Route>
        <Route path='/success'>
          <SuccessPage />
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
