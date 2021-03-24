import React from 'react';
import { useHistory } from 'react-router';
import Login from '../Login/Login';
import LoginWithEmail from '../LoginWithEmail/LoginWithEmail';
import LoginWithFacebook from '../LoginWithFacebook/LoginWithFacebook';
import LoginWIthGoogle from '../LoginWithGoogle/LoginWIthGoogle';
import './LoginPage.css';
import logo from '../../../logo.png'
import frame from '../../../frame.png'
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';

const LoginPage = () => {
    const history = useHistory()
    return (
        <>
            <div className="d-flex flex-wrap justify-content-between">
                <div className=''>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <img src={frame} alt="" />
                </div>
            </div>
            <div className='d-flex justify-content-center flex-wrap container' style={{ marginTop: '-80px' }}>

                <div className="col-5">
                    <Login />
                    <LoginWIthGoogle />
                    <LoginWithFacebook />
                </div>
                <div className='mt-5' style={{ borderRight: '2px solid lightgrey' }}></div>
                <div className="col-5 text-center">
                    <h4 className='font-weight-bold text-center' style={{ color: '#ABABAB' }}>JOIN It's 100% free</h4>
                    <button type="submit" className="btn col-md-6 ml-2 px-3 mt-1 py-2" style={{ borderRadius: '40px', backgroundColor: '#DFCCF4', border: '2px solid #A0A1A1' }} onClick={() => history.push('/signup')}><h6 style={{ color: '#ABABAB' }}>Sign Up</h6></button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default LoginPage;