import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";
import firebaseconfig from '../firebaseconfig';
import LoginWIthGoogle from '../LoginWithGoogle/LoginWIthGoogle';
import LoginWithFacebook from '../LoginWithFacebook/LoginWithFacebook';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseconfig);
}

const Login = () => {
    const history = useHistory()
    const location = useLocation()
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState({
        checkbox: ''
    })
    const { from } = location.state || { from: { pathname: `/home` } };
 
    useEffect(() => {

        fetch('https://intense-mesa-02860.herokuapp.com/data')
            .then(res => res.json())
            .then(data => {
                setUser(data)
            })
    }, [])
    const [manageError, setManageError] = useState('')
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            checkbox: false,
        },
        onSubmit: (values, { resetForm }) => {
            setLoading(true)
            user.map(x => {
                if (x.email == values.email && x.password == values.password) {
                    // if(values.checkbox){
                        localStorage.setItem('loggedIn', x.id)
                    // }else{
                    //     sessionStorage.setItem('loggedIn', x.id)
                    // }
                    
                    setLoading(false)
                    setTimeout(() => {
                        history.replace(from)
                        window.location.reload(true);
                        
                    },1000)
                }
                else if (x.email == values.email && x.password !== values.password) {
                    setLoading(false)
                    setManageError('no password saved for this email. you can use gmail login')
                    setTimeout(function () {
                        setManageError('');
                    }, 5000);

                }
                // else {
                //     setLoading(false)
                //     setManageError('Invalid Email or Password! Please try again.')
                //     setTimeout(function () {
                //         setManageError('');
                //     }, 5000);

                // }
            })
        },
    })
    return (
        <>
            <div style={{ padding: '10px 0' }}>
                <div className='text-center' id='er'>
                    {manageError ? <p className='bg-danger text-white px-5'>{manageError}</p> : null}
                </div>
                <div className='d-flex flex-wrap justify-content-center ' style={{ backgroundColor: 'white', width: '' }}>
                    <h4 className='mb-3 text-center' style={{ color: '#ABABAB', fontWeight: 'bold' }}>Log In</h4>
                    <form className='d-flex flex-wrap justify-content-center mb-3' onSubmit={formik.handleSubmit}>
                        <div className="form-group col-12 col-sm-8 col-lg-8 mb-4">
                            <input style={{ borderRadius: '40px', border: '2px solid #A0A1A1' }} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} type="email" className="form-control px-3 py-3" name='email' id='email' placeholder="Email" />
                            {formik.touched.email && formik.errors.email ? (<div className="text-danger text-left">{formik.errors.email}</div>) : null}
                        </div>
                        <div className="form-group col-12 col-sm-8 col-lg-8 mb-4">
                            <input style={{ borderRadius: '40px', border: '2px solid #A0A1A1' }} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} type="password" className="form-control px-3 py-3" name='password' id='password' placeholder="Password" />
                            {formik.touched.password && formik.errors.password ? (<div className="text-danger text-left">{formik.errors.password}</div>) : null}
                        </div>
                        <div className="form-check col-8">
                            <input type="checkbox" className="form-check-input" id="checkbox" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.checkbox} />
                            <label className="form-check-label" htmlFor="exampleCheck1" style={{ color: '#ABABAB', fontStyle: 'italic' }}>Keep me Logged In</label>
                        </div>
                        <Link to='/forget' className='text-center col-md-10 col-8 text-decoration-none mb-3 font-weight-bold pt-3' style={{ color: '#B6E8DA', fontStyle: 'italic' }}>Forgot my password</Link>
                        <button type="submit" className="btn col-12 col-sm-8 col-lg-8 ml-2 px-3 mt-1 py-2" style={{ borderRadius: '40px', backgroundColor: '#84EBD2', border: '2px solid #A0A1A1' }}><h6 style={{ color: '#A0A1A1', fontWeight: 'bold' }}> Log In</h6></button>

                        {loading ? <div className="mt-2 ml-5">
                            <div className="spinner-border text-primary" role="status">
                                {/* <span className = "sr-only">Loading...</span> */}
                            </div>
                        </div> : null}
                    </form>
                    <LoginWIthGoogle/>
                    <LoginWithFacebook />
                </div>
            </div>
        </>
    );
};

export default Login;