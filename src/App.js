import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import GeneralTerms from './components/GeneralTerms';
import PersonalData from './components/PersonalData';


function App() {
  return (
      <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/projects' component={Projects} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/copyright' component={Copyright} />
        <Route path='/generalTerms' component={GeneralTerms} />
        <Route path='/personalData' component={PersonalData} />
      </Switch>
      <Footer />
      </>
  );
}

export default App;

