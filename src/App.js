import React from 'react';
import './App.css';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import LoginPage from './Components/AllLogin/LoginPage/LoginPage';
import LoginWithEmail from './Components/AllLogin/LoginWithEmail/LoginWithEmail';
import HomePage from './Components/HomePage/HomePage';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
    <Route exact path ='/home' component ={HomePage} />
    <Route exact path ='/login' component ={LoginPage} />
    <Route exact path ='/signup' component ={LoginWithEmail} />
    <Route exact path ='/contact' component ={Contact} />
    {/* <Redirect from = '/' to = '/home' /> */}
    {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
