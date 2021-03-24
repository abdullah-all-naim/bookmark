import React, { useContext, useEffect, useState } from 'react';
import { useFormik } from 'formik'
// import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
// import logo from '../logo.jpg'

const Login = () => {
    const history = useHistory()
    const [status, setStatus] = useState({
        checkbox: ''
    })

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            checkbox: false,
        },
        onSubmit: (values, { resetForm }) => {
            const tokenId = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
            setStatus()
            console.log(values)
            console.log('this is trus')

            // if (status.mode == 'Login') {
            // axios.post('http://localhost:5000/users', { values: values, token: tokenId })
            //     .then(response => console.log(response))

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
        // validate: (values) => {
        //     let errors = {};
        //     if (status === 'Signup') {
        //         if (!values.name) {
        //             errors.name = 'Required'
        //         }
        //     }
        //     if (!values.email) {
        //         errors.email = 'Required'
        //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9,-]+\.[A-Z]{2,}$/i.test(values.email)) {
        //         errors.email = 'Invalid Email Address'
        //     }
        //     if (!values.password) {
        //         errors.password = 'Required'
        //     } else if (values.password.length < 4) {
        //         errors.password = 'Must be at least 4 characters'
        //     }

        //     if (status.mode == 'Signup') {
        //         if (!values.confirmPass) {
        //             errors.confirmPass = 'Required'
        //         } else if (values.password !== values.confirmPass) {
        //             errors.confirmPass = 'Password does not match'
        //         }
        //     }
        //     return errors

        // }
    })

    // if (loggedinUser.token) {
    //     Window.sessionStorage.setItem('loggedIn', tokenId)
    // }


    const handleClick = () => {
        if (status.mode === 'Signup') {
            setStatus({ mode: 'Login' })
        }
        else {
            setStatus({ mode: 'Signup' })
        }
    }
    return (
        <>
            <div style={{ padding: '10px 0' }}>
                <div className='d-flex flex-wrap justify-content-center mb-5 mx-auto' style={{ backgroundColor: 'white', width: '500px' }}>
                    <h4 className='font-weight-bold mb-3' style={{color: '#ABABAB'}}>Log In</h4>
                    <form className='d-flex flex-wrap justify-content-center' onSubmit={formik.handleSubmit}>
                        <div className="form-group col-md-8 mb-4" >
                            <input style={{ borderRadius: '40px',border:'2px solid #A0A1A1' }} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} type="email" className="form-control px-3 py-3" name='email' id='email' placeholder="Email" />
                            {formik.touched.email && formik.errors.email ? (<div className="text-danger text-left">{formik.errors.email}</div>) : null}
                        </div>
                        <div className="form-group col-md-8 mb-4">
                            <input style={{ borderRadius: '40px', border:'2px solid #A0A1A1' }} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} type="password" className="form-control px-3 py-3" name='password' id='password' placeholder="Password" />
                            {formik.touched.password && formik.errors.password ? (<div className="text-danger text-left">{formik.errors.password}</div>) : null}
                        </div>
                        <div class="form-check col-8">
                            <input type="checkbox" class="form-check-input" id="checkbox" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.checkbox} />
                            <label class="form-check-label" for="exampleCheck1" style={{color: '#ABABAB', fontStyle:'italic'}}>Keep me loggedin</label>
                        </div>
                        <Link className='text-center col-10 text-decoration-none mb-3 font-weight-bold pt-3' style={{color: '#B6E8DA', fontStyle:'italic'}}>Forgot my password</Link>
                        <button type="submit" className="btn col-md-8 ml-2 px-3 mt-1 py-2" style={{ borderRadius: '40px', backgroundColor: '#84EBD2', border:'2px solid #A0A1A1' }}><h6 style={{color: '#ABABAB'}}> Log In</h6></button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;