import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import profile from '../../../profile.png';
import logo from '../../../logo.png';
import frame from '../../../frame.png';
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import firebaseconfig from '../firebaseconfig'
import Footer from '../../Footer/Footer';
import back from '../../../back.png'
import './LoginWithEmail.css';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseconfig);
}
const LoginWithEmail = () => {
    document.title = 'QIKDAW | Signup Page'
    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: `/home` } };
    const [status, setStatus] = useState({
        signup: false,
        email: true,
        fname: false,
        lname: false,
        password: false,
        photoURL: false,
        haserror: false,
        errmessage: '',
        id: null
    })
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch('https://intense-mesa-02860.herokuapp.com/data')
            .then((response) => response.json())
            .then(data => {
                if (data) {
                    setUser(data)
                }

            })
    }, [])
    const [manageError, setManageError] = useState('')
    const [handleImg, setHandleImg] = useState(null)
    const [handleInput, setHandleInput] = useState(false)
    const [loading, setLoading] = useState(true)
    const [isMailHere, setIsMailHere] = useState(false)
    const handleFileChange = (e) => {
        const newImageFile = e.target.files[0];
        setHandleImg(newImageFile);
    }
    const formik = useFormik({
        initialValues: {
            fname: '',
            lname: '',
            email: '',
            password: '',
            photoURL: '',
            id: '',
        },
        onSubmit: (values, { resetForm }) => {
            setLoading(false)
            firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
                .then((userCredential) => {
                    var user = userCredential.user;
                    var userT = user.b.a
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorMessage)
                    // ..
                });
            let randomToken;
            randomToken = uuidv4()
            const userData = new FormData()
            userData.append('fname', values.fname);
            userData.append('lname', values.lname);
            userData.append('email', values.email);
            userData.append('password', values.password);
            userData.append('id', randomToken);
            localStorage.setItem('loggedIn', randomToken)
            userData.append('type', 'withmail');

            if (handleImg) {
                userData.append('file', handleImg);
            } else {
                userData.append('nofile', true);
            }

            fetch('https://intense-mesa-02860.herokuapp.com/users', {
                method: 'POST',
                // headers: { 'Content-Type': 'application/json' },
                body: userData,
            })
                .then(response => response.json())
                .then(data => {
                    if (data) {
                        history.replace(from)
                        window.location.reload(true);
                    } 
                })
                .catch(error => {
                    console.error(error)
                })
                setTimeout(() => {
                    history.replace(from)
                    window.location.reload(true);
                    
                },3000)
        },
        validate: (values) => {
            let errors = {};
            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9,-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid Email Address'
            }
            if (!values.password) {
                errors.password = 'Required'
            } else if (values.password.length < 7) {
                errors.password = 'Must be at least 7 characters'
            }
            if (!values.fname) {
                errors.fname = 'Required'
            }
            if (!values.lname) {
                errors.lname = 'Required'
            }

            return errors

        }
    })

    const manageChange = () => {
        setIsMailHere(false)
        if (user != []) {
            setIsMailHere(true)
            user.map(x => {
                if (x.email == formik.values.email) {
                    setManageError('User already exists.')
                }
                else {
                    setStatus({ email: false, password: true })
                }
            })
        }
        else {
            setStatus({ email: false, password: true })
        }
    }


    return (
        <div >
            {loading ?
                <div >
                    <div className="d-flex flex-wrap justify-content-between">
                        <Link to="/home" className='mt-3 px-4 text-center' style={{ height: '100px' }}>
                            <img className='img-responsive' style={{ width: '150px' }} src={logo} alt="" />
                            <h5 style={{ color: '#ABABAB' }}>Quick door to the world</h5>
                        </Link>
                        <div className='d-none d-sm-flex'>
                            <img className='img-responsive' src={frame} alt="" />
                        </div>
                    </div>
                    <div style={{ padding: ' 0', minHeight : '50vh' }} id='signup'>
                        <div className='d-flex flex-wrap justify-content-center' style={{ backgroundColor: '', width: '' }}>
                            <form className='d-flex flex-wrap justify-content-center' onSubmit={formik.handleSubmit}>
                                {status.email ?
                                    <div className='d-flex flex-wrap justify-content-center'>
                                        <Link to='/login' className='col-lg-12 col-12' style={{ cursor: 'pointer' }} >
                                            <img style={{ width: '80px' }} src={back} alt="" />
                                        </Link>
                                        {/* <div className='col-12 col-sm-8 col-lg-8'> */}
                                        <div className="form-group col-10 col-sm-8 col-lg-8 ">
                                            <h4 className='text-center mx-5 text-muted mb-4'>SIGN UP - Enter your email</h4>
                                            <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} type="email" className="form-control" name='email' id='email' placeholder="Email" />
                                            {formik.touched.email && formik.errors.email ? (<div className="text-danger text-left">{formik.errors.email}</div>) : null}
                                            <p className='my-2' style={{ fontStyle: 'italic', fontSize: '12px' }}>By clicking the NEXT button, you are agreeing to <span style={{ color: '#B6E8DA', textDecoration: 'underline' }}>Terms and Conditions</span> governing QikDaw</p>
                                        </div>
                                        <div className="form-group col-8 col-sm-8 col-lg-8 ml-2 px-3 my-4 text-center">
                                            {formik.errors.email || !formik.values.email ?
                                                <button type="button" className="form-control btn px-3 mt-1 py-2 mb-5" style={{ borderRadius: '40px', backgroundColor: '#DFCCF4', border: '2px solid #A0A1A1' }} ><h6 className="text-muted">NEXT</h6></button> :
                                                <button type="button" className="form-control btn px-3 mt-1 py-2 mb-5" style={{ borderRadius: '40px', backgroundColor: '#DFCCF4', border: '2px solid #A0A1A1' }} onClick={() => manageChange()}><h6 className="text-muted">NEXT</h6></button>}
                                        </div>
                                       {/* /* <div className='text-center'>
                                            {isMailHere ? <div className="mt-2 ml-5">
                                                <div className="spinner-border text-primary" role="status">
                                                    {/* <span className = "sr-only">Loading...</span> */}
                                                {/* </div>
                                            </div> : null}
                                        </div> */} 

                                    </div> : null}
                                {manageError ?
                                    <p className='text-white bg-danger text-center p-2'>{manageError} <Link className='text-white' to='/login'>Click here to login</Link></p> :
                                    <div>
                                        {
                                            status.password ?
                                                <div className='d-flex flex-wrap justify-content-center'>
                                                    <div className='col-lg-12 col-12' style={{ cursor: 'pointer' }} onClick={() => {
                                                        setStatus({ password: false })
                                                        setStatus({ email: true })
                                                    }}>
                                                        <img style={{ width: '80px' }} src={back} alt="" />
                                                    </div>
                                                    <div className='col-md-12 col-10'>
                                                        <div className="form-group col-md-12 my-4" >
                                                            <h4 className='text-center mx-5 text-muted w-100 mx-auto mb-4'>SIGN UP - Choose your password</h4>

                                                            <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} type="password" className="form-control" name='password' id='password' placeholder="Choose Password" />
                                                            {formik.touched.password && formik.errors.password ? (<div className="text-danger text-left">{formik.errors.password}</div>) : null}
                                                        </div>
                                                        <div className="form-group col-md-12 my-4 text-center">
                                                            {formik.errors.password || !formik.values.password ?
                                                                <button type="button" className="form-control btn px-3 mt-1 py-2 mb-5" style={{ borderRadius: '40px', backgroundColor: '#DFCCF4', border: '2px solid #A0A1A1' }}><h6 className="text-muted">NEXT</h6></button> :
                                                                <button type="button" className="form-control btn px-3 mt-1 py-2 mb-5" style={{ borderRadius: '40px', backgroundColor: '#DFCCF4', border: '2px solid #A0A1A1' }} onClick={(e) => setStatus({ password: false, fname: true, haserror: false })}><h6 className="text-muted">NEXT</h6></button>}
                                                        </div>
                                                    </div>
                                                </div> : null
                                        }
                                    </div>}

                                {status.fname ?
                                    <div className='d-flex flex-wrap justify-content-center'>
                                        <div className='col-lg-12 col-10' style={{ cursor: 'pointer' }} onClick={() => {
                                            setStatus({ fname: false })
                                            setStatus({ password: true })

                                        }}>
                                            <img style={{ width: '80px' }} src={back} alt="" />
                                        </div>
                                        <div className='col-md-12 col-10'>
                                            <div className="form-group col-md-12" >
                                                <h4 className='text-center mx-5 text-muted  mb-4'>SIGN UP - Name</h4>
                                                <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.fname} type="text" className="form-control" name='fname' id='fname' placeholder="First Name" />
                                                {formik.touched.fname && formik.errors.fname ? (<div className="text-danger text-left">{formik.errors.fname}</div>) : null}
                                            </div>
                                            <div className="form-group col-md-12 my-4 text-center">
                                                {formik.errors.fname || !formik.values.fname ?
                                                    <button type="button" className="form-control btn px-3 mt-1 py-2 mb-5" style={{ borderRadius: '40px', backgroundColor: '#DFCCF4', border: '2px solid #A0A1A1' }}><h6 className="text-muted">NEXT</h6></button> :
                                                    <button type="button" className="form-control btn px-3 mt-1 py-2 mb-5" style={{ borderRadius: '40px', backgroundColor: '#DFCCF4', border: '2px solid #A0A1A1' }} onClick={(e) => setStatus({ fname: false, lname: true })}><h6 className="text-muted">NEXT</h6></button>}
                                            </div>
                                        </div>

                                    </div> : null}

                                {status.lname ?
                                    <div className='d-flex flex-wrap justify-content-center'>
                                        <div className='col-lg-12 col-12' style={{ cursor: 'pointer' }} onClick={() => {
                                            setStatus({ lname: false })
                                            setStatus({ fname: true })

                                        }}>
                                            <img style={{ width: '80px' }} src={back} alt="" />
                                        </div>
                                        <div className='col-md-12 col-10'>
                                            <div className="form-group col-md-12" >
                                                <h4 className='text-center mx-5 text-muted'>SIGN UP - Name</h4>
                                                <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lname} type="text" className="form-control" name='lname' id='lname' placeholder="Last Name" />
                                                {formik.touched.lname && formik.errors.lname ? (<div className="text-danger text-left">{formik.errors.lname}</div>) : null}
                                            </div>
                                            <div className="form-group col-md-12 my-4 text-center">
                                                {formik.errors.lname || !formik.values.lname ?
                                                    <button type="button" className="form-control btn px-3 mt-1 py-2 mb-5" style={{ borderRadius: '40px', backgroundColor: '#DFCCF4', border: '2px solid #A0A1A1' }}><h6 className="text-muted">NEXT</h6></button> :
                                                    <button type="button" className="form-control btn px-3 mt-1 py-2 mb-5" style={{ borderRadius: '40px', backgroundColor: '#DFCCF4', border: '2px solid #A0A1A1' }} onClick={(e) => setStatus({ lname: false, photoURL: true })}><h6 className="text-muted">NEXT</h6></button>}
                                            </div>
                                        </div>
                                    </div> : null}

                                {status.photoURL ?
                                    <div className='d-flex flex-wrap justify-content-center'>
                                        <div className='col-lg-12 col-12' style={{ cursor: 'pointer' }} onClick={() => {
                                            setStatus({ photoURL: false })
                                            setStatus({ lname: true })

                                        }}>
                                            <img style={{ width: '80px' }} src={back} alt="" />
                                        </div>
                                        <div className='col-md-12 col-10'>
                                            <div className="form-group col-md-12" >
                                                <h5 className='text-center mx-5 text-muted'>Upload a profile picture</h5>
                                                <div className='text-center'>
                                                    <img style={{ width: '150px' }} src={profile} alt="" />
                                                </div>
                                                {handleInput ? <input onChange={handleFileChange} type="file" className="btn form-control border" name='file' id='file' placeholder="file" /> : null}
                                            </div>
                                            <div className="form-group col-md-12 my-4 text-center">
                                                {handleImg ? <button type='submit' className="form-control btn px-3 mt-1 py-2" style={{ borderRadius: '40px', backgroundColor: '#DFCCF4', border: '1px solid #979797' }}><h6 className='text-white' style={{ fontWeight: 'bold' }}>UPLOAD</h6></button> :
                                                    <button type='button' className="form-control btn px-3 mt-1 py-2" style={{ borderRadius: '40px', backgroundColor: '#DFCCF4', border: '1px solid #979797' }} onClick={() => setHandleInput(true)}><h6 className='text-white' style={{ fontWeight: 'bold' }}>UPLOAD</h6></button>
                                                }
                                            </div>
                                            <div className="form-group col-md-12 mt-4 text-center">
                                                <button type={handleImg ? 'button' : 'submit'} className="form-control btn px-3 py-2" style={{ borderRadius: '40px', backgroundColor: '#DFDDE0', border: '1px solid #979797' }} ><h6 style={{ color: 'grey' }}>Later</h6></button>
                                            </div>
                                        </div>
                                    </div> : null}

                            </form>

                        </div>
                    </div>
                    <Footer />
                </div> :
                <div style={{

                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}>
                    <div className="spinner-border text-primary" role="status">
                        {/* <span className = "sr-only">Loading...</span> */}
                    </div>
                </div>
            }
        </div>
    );
};

export default LoginWithEmail;