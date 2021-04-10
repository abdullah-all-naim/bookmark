import React, { useState } from 'react';
import logo from '../../logo.png';
import frame from '../../frame.png';
import Footer from '../Footer/Footer';
import back from '../../back.png'
import { useHistory } from 'react-router';
import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";
import firebaseconfig from '.././AllLogin/firebaseconfig'
import { Link } from 'react-router-dom';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseconfig);
}

const ForgetPass = () => {
    const [status, setStatus] = useState(false)
    const [userEmail, setUserEmail] = useState('')
    const history = useHistory()
    const handleChange = (e) => {
        setUserEmail(e.target.value)
    }

    const handleEmailChange = (e) => {
        if (userEmail) {
            setStatus(true)
            firebase.auth().sendPasswordResetEmail(userEmail)
                .then(() => {
                    console.log('Password Reset Email Sent Successfully!');
                })
                .catch(error => {
                    console.error(error);
                })
        }

    }
    return (
        <>
            <div className="d-flex flex-wrap justify-content-between">
                <Link to="/home" className='mt-3 px-4 text-center justify-content-center' style={{ height: '100px' }}>
                    <img className='img-responsive' style={{ width: '150px' }} src={logo} alt="" />
                    <h5 style={{ color: '#ABABAB' }}>Quick door to the world</h5>
                </Link>
                <div className='d-none d-sm-flex'>
                    <img className='img-responsive' src={frame} alt="" />
                </div>
            </div>
            {status == false ?
                <div className='d-flex flex-wrap justify-content-center flex-wrap container'>
                    <div className='col-12 col-lg-1' style={{ cursor: 'pointer' }} onClick={() => {
                        history.push('/login')
                        // setStatus({ status: false })
                        // setStatus({ noedit: true })

                    }}>
                        <img style={{ width: '80px' }} src={back} alt="" />
                    </div>

                    <form className='d-flex flex-wrap justify-content-center'>


                        <div className="form-group col-lg-8 col-12 mb-3 mx-5 d-flex flex-wrap">
                            <h4 className='col-12' style={{ color: '#ABABAB', fontWeight: 'bold' }}>Reset your password</h4>
                            <input type="email" className="form-control col-12" onBlur={handleChange} id="exampleFormControlInput1" placeholder="Enter your email" />
                        </div>
                        <div className="form-group col-12"></div>
                        <div className="col-5 text-center mt-3">
                            <button type="button" className="btn col-md-8 col-12 px-3 mt-1 py-2" style={{ borderRadius: '40px', backgroundColor: '#B7F3E5', border: '2px solid #A0A1A1' }}><h6 style={{ color: 'grey', fontWeight: 'bold' }} onClick={handleEmailChange}>Reset my password</h6></button>
                        </div>
                    </form>
                </div> :
                <div className=''>
                    <h5 className='text-center' style={{ color: '#ABABAB' }}>A link has been sent to the email you provided</h5>
                    <h5 className='text-center' style={{ color: '#ABABAB' }}>Go to your email and click the link to reset your password</h5>

                    <div className="col-4 text-center mt-3 mx-auto">
                        <button type="button" onClick={() => history.push('/login')} className="btn col-md-6 ml-2 px-3 mt-1 py-2" style={{ borderRadius: '40px', backgroundColor: '#B7F3E5', border: '2px solid #A0A1A1' }}><h6 style={{ color: '#ABABAB' }}>GOT IT</h6></button>
                    </div>
                </div>}
            <div style={{ position: 'fixed', width: '100%', bottom: '0', }}>
                <Footer />
            </div>

        </>
    );
};

export default ForgetPass;