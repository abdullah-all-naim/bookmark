import React, { useContext, useEffect, useState } from 'react';
import { useFormik } from 'formik'
// import axios from 'axios';
import { Link, NavLink, useHistory } from 'react-router-dom';
import axios from 'axios';
import profile from '../../../profile.png'
import logo from '../../../logo.png'
// import logo from '../logo.jpg'

const LoginWithEmail = () => {
    const history = useHistory()
    const [status, setStatus] = useState({
        signup: false,
        email: true,
        fname: false,
        lname: false,
        password: false,
        photoURL: false
    })
    const tokenId = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    const formik = useFormik({
        initialValues: {
            fname: '',
            lname: '',
            email: '',
            password: '',
            photoURL: '',
            id: tokenId,
        },
        onSubmit: (values, { resetForm }) => {
            if (status.photoURL) {
                values.photoURL = status.photoURL
            }
            // const tokenId = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
            // if(values.email){
            // setStatus({ email : true})
            // }
            console.log(values)


            // if (status.mode == 'Login') {
            axios.post('http://localhost:5000/users', values)
                .then(response => console.log(response))

            // localStorage.setItem('loggedIn', tokenId)
            // setTimeout(function () { window.location.reload() }, 2000);
            // history.push('/userprofile/home')

            // }
            // if (status.mode == 'Login') {
            //     axios.get(`http://localhost:3001/users?values.email=${values.email}&&values.password=${values.password}`)
            //         .then(response => console.log(response.data))
            //     localStorage.setItem('loggedIn', tokenId)
            // }
            // resetForm()
            // if(Window.localStorage.getItem('loggedIn')){
            //     console.log('yes')
            //     Window.localStorage.setItem('loggedIn', tokenId)
            // }
            // setLoggedinUser(values)
            // Window.localStorage.setItem('log', tokenId)
            // handleSubmit()
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
            } else if (values.password.length < 4) {
                errors.password = 'Must be at least 4 characters'
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

    // if (loggedinUser.token) {
    //     Window.sessionStorage.setItem('loggedIn', tokenId)
    // }


    const handleClick = () => {
        setStatus({ email: false, fname: true })
        // setStatus({ email: false });
        // if (status.email == false) {
        //     // setStatus({email: true})
        //     // if(status.email == true){
        //     setStatus({ password: true })
        //     if (status.password == true) {
        //         setStatus({ fname: true })
        //         setStatus({ password: false })
        //     }
        //     // }
        // }


        // if (status.email) {
        //     setStatus({ mode: 'Login' })
        // }
        // else {
        //     setStatus({ mode: 'Signup' })
        // }
    }
    console.log(status)
    console.log(formik.values.photoURL)
    console.log(formik.values.email)
    return (
        <>
            {/* <div className='mr-5 mb-4 text-center'>
                <Link to='/' className='text-decoration-none'><img style={{width: '150px'}} src={logo} alt=""/></Link>
            </div> */}
            <div style={{ padding: '10px 0' }}>
                <div className='text-center container'>
                        <img src={logo} alt="" />
                </div>
                <div className='d-flex flex-wrap justify-content-center my-5 container' style={{ backgroundColor: 'white', width: '500px' }}>



                    <form className='d-flex justify-content-center' onSubmit={formik.handleSubmit}>

                        {status.email ?
                            <div className=''>
                                <div className="form-group col-md-12 my-4" >
                                    <h4 className='text-center mx-5 text-muted'>SIGN UP - Enter your email</h4>
                                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} type="email" className="form-control" name='email' id='email' placeholder="Email" />
                                    {formik.touched.email && formik.errors.email ? (<div className="text-danger text-left">{formik.errors.email}</div>) : null}
                                </div>
                                <div className="form-group col-md-12 my-4 text-center">
                                    {formik.errors.email || !formik.values.email ?
                                        <button type="button" className="form-control btn px-3 mt-1 py-2 mb-5" style={{ borderRadius: '40px', backgroundColor: '#DFCCF4' }} ><h6>Next</h6></button> :
                                        <button type="button" className="form-control btn px-3 mt-1 py-2 mb-5" style={{ borderRadius: '40px', backgroundColor: '#DFCCF4' }} onClick={() => setStatus({ email: false, password: true })}><h6>Next</h6></button>}
                                </div>
                            </div> : null}

                        {status.password ?
                            <div className=''>
                                <div className="form-group col-md-12 my-4" >
                                    <h4 className='text-center mx-5 text-muted'>SIGN UP - Choose your password</h4>
                                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} type="password" className="form-control" name='password' id='password' placeholder="password" />
                                    {formik.touched.password && formik.errors.password ? (<div className="text-danger text-left">{formik.errors.password}</div>) : null}
                                </div>
                                <div className="form-group col-md-12 my-4 text-center">
                                    {formik.errors.password || !formik.values.password ?
                                        <button type="button" className="form-control btn px-3 mt-1 py-2 mb-5" style={{ borderRadius: '40px', backgroundColor: '#DFCCF4' }}><h6>Next</h6></button> :
                                        <button type="button" className="form-control btn px-3 mt-1 py-2 mb-5" style={{ borderRadius: '40px', backgroundColor: '#DFCCF4' }} onClick={(e) => setStatus({ password: false, fname: true })}><h6>Next</h6></button>}
                                </div>
                            </div> : null}

                        {status.fname ?
                            <div className=''>
                                <div className="form-group col-md-12 my-4" >
                                    <h4 className='text-center mx-5 text-muted'>SIGN UP - First Name</h4>
                                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.fname} type="password" className="form-control" name='fname' id='fname' placeholder="fname" />
                                    {formik.touched.fname && formik.errors.fname ? (<div className="text-danger text-left">{formik.errors.fname}</div>) : null}
                                </div>
                                <div className="form-group col-md-12 my-4 text-center">
                                    {formik.errors.fname || !formik.values.fname ?
                                        <button type="button" className="form-control btn px-3 mt-1 py-2 mb-5" style={{ borderRadius: '40px', backgroundColor: '#DFCCF4' }}><h6>Next</h6></button> :
                                        <button type="button" className="form-control btn px-3 mt-1 py-2 mb-5" style={{ borderRadius: '40px', backgroundColor: '#DFCCF4' }} onClick={(e) => setStatus({ fname: false, lname: true })}><h6>Next</h6></button>}
                                </div>
                            </div> : null}

                        {status.lname ?
                            <div className=''>
                                <div className="form-group col-md-12 my-4" >
                                    <h4 className='text-center mx-5 text-muted'>SIGN UP - Last Name</h4>
                                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lname} type="password" className="form-control" name='lname' id='lname' placeholder="lname" />
                                    {formik.touched.lname && formik.errors.lname ? (<div className="text-danger text-left">{formik.errors.lname}</div>) : null}
                                </div>
                                <div className="form-group col-md-12 my-4 text-center">
                                    {formik.errors.lname || !formik.values.lname ?
                                        <button type="button" className="form-control btn px-3 mt-1 py-2 mb-5" style={{ borderRadius: '40px', backgroundColor: '#DFCCF4' }}><h6>Next</h6></button> :
                                        <button type="button" className="form-control btn px-3 mt-1 py-2 mb-5" style={{ borderRadius: '40px', backgroundColor: '#DFCCF4' }} onClick={(e) => setStatus({ lname: false, photoURL: true })}><h6>Next</h6></button>}
                                </div>
                            </div> : null}
                        {status.photoURL ?
                            <div className=''>
                                <div className="form-group col-md-12 my-4" >
                                    <h4 className='text-center mx-5 text-muted'>Upload a profile picture</h4>
                                    <div className='text-center'>
                                        <img style={{ width: '150px' }} src={profile} alt="" />
                                    </div>
                                    <input onChange={(event) => {
                                        setStatus({ photoURL: event.currentTarget.files[0] })
                                    }} value={formik.values.photoURL} type="file" className="btn btn-primary form-control" name='photoURL' id='photoURL' placeholder="photoURL" />
                                </div>
                                <div className="form-group col-md-12 my-4 text-center">
                                    <button type="button" className="form-control btn px-3 mt-1 py-2" style={{ borderRadius: '40px', backgroundColor: '#DFCCF4' }} ><h6>Upload</h6></button>
                                </div>
                                <div className="form-group col-md-12 my-4 text-center">
                                    <button type="submit" className="form-control btn px-3 py-2 mb-5" style={{ borderRadius: '40px', backgroundColor: '#DFCCF4' }} ><h6>Later</h6></button>
                                </div>
                            </div> : null}

                    </form>

                </div>
            </div>
        </>
    );
};

export default LoginWithEmail;