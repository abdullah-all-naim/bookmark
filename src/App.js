import React from 'react';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from './Components/AllLogin/LoginPage/LoginPage';
import LoginWithEmail from './Components/AllLogin/LoginWithEmail/LoginWithEmail';
import HomePage from './Components/HomePage/HomePage';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import UserProfile from './Components/UserProfile/UserProfile';
import ForgetPass from './Components/ForgetPass/ForgetPass';
import Privacy from './Components/Privacy/Privacy';
import Terms from './Components/Terms/Terms';

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <PrivateRoute exact path ='/home' component ={HomePage} />
    <Route exact path ='/login' component ={LoginPage} />
    <Route exact path ='/signup' component ={LoginWithEmail} />
    <Route exact path ='/contact' component ={Contact} />
    <Route exact path ='/privacy' component ={Privacy} />
    <Route exact path ='/terms' component ={Terms} />
    <Route exact path ='/forget' component ={ForgetPass} />
    <PrivateRoute exact path ='/userprofile' component ={UserProfile} />
    <Redirect from = '/' to = '/home' />
    {/* <Footer/> */}
    </Switch>
    </BrowserRouter>
  );
}

export default App;
