import React from 'react';
import { useHistory } from 'react-router';
import Login from '../Login/Login';
import LoginWithFacebook from '../LoginWithFacebook/LoginWithFacebook';
import LoginWIthGoogle from '../LoginWithGoogle/LoginWIthGoogle';
import './LoginPage.css';
import logo from '../../../logo.png'
import frame from '../../../frame.png'
import Footer from '../../Footer/Footer';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    document.title = 'QikDaw | Login'
    const history = useHistory()
    return (
        <>
            <div className="d-flex flex-wrap justify-content-between" >
                <Link to="/home" className='mt-3 px-4 text-center justify-content-center' style={{ height: '100px' }}>
                    <img className='img-responsive' style={{ width: '150px' }} src={logo} alt="" />
                    <h5 style={{ color: '#ABABAB' }}>Quick door to the world</h5>
                </Link>
                <div className='d-none d-sm-flex'>
                    <img className='img-responsive' src={frame} alt="" />
                </div>
            </div>
            <div className='d-flex justify-content-center flex-wrap container-lg' id='top'>
                <div className="col-12 col-md-8 col-lg-5 mb-5" >
                    <Login />
                    {/* <LoginWIthGoogle/> */}
                </div>
                <div className='mt-5 col-1 d-none d-lg-block' style={{ borderRight: '2px solid lightgrey' }}></div>
                <div className="col-12 col-md-8 col-lg-5 mx-auto text-center mb-5 m-lg-0">
                    {/* <div className='text-center mx-auto'> */}
                    <h4 className='font-weight-bold text-center mx-auto' style={{ color: '#ABABAB', fontWeight: 'bold' }}>JOIN.It's 100% free.</h4>
                    <button type="submit" className="btn col-6 col-md-5 col-lg-5 px-3 mt-1 py-2 mx-auto text-center" style={{ borderRadius: '40px', backgroundColor: '#DFCCF4', border: '2px solid #A0A1A1' }} onClick={() => history.push('/signup')}><h4 style={{ color: '#ABABAB' }}>SIGN UP</h4></button>
                    {/* </div> */}
                </div>
            </div>
            {/* <div id='footer'> */}
                <Footer />
            {/* </div> */}

        </>
    );
};

export default LoginPage;