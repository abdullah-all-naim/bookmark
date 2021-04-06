import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import noimg from '../../noprofile.png'
import logo from '../../logo.png'
import frame from '../../frame.png'
import { useFormik } from 'formik'
import back from '../../back.png'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
const UserProfile = () => {
    document.title = 'QIKDAW | UserProfile Page'
    const [user, setUser] = useState([])
    const getUser = localStorage.getItem('loggedIn')
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState({
        noedit: true,
        edit: false,
        passChange: false
    })
    const [manageError, setManageError] = useState('')
    const history = useHistory()
    useEffect(() => {
        axios.get('https://intense-mesa-02860.herokuapp.com/userinfo?id=' + getUser)
            .then((response) => response.data)
            .then(data => {
                if (data) {
                    setUser(data)
                    setLoading(true)
                }

            })
    }, [])
    let userName = '';
    let usermail = '';
    let userpassword = '';
    let photo;
    let photoURL
    user.map(x => {
        userName = x.name
        usermail = x.email
        userpassword = x.password
        photo = x.photo
        photoURL = x.photoURL
    })
    const formik = useFormik({
        initialValues: {
            name: userName,
            email: usermail,
            password: userpassword,
            id: getUser
        },
        onSubmit: (values, { resetForm }) => {

            if (status.edit) {
                if (values.name) {
                    fetch(`https://intense-mesa-02860.herokuapp.com/user`, {
                        method: 'PUT',
                        body: JSON.stringify({
                            type: 'edit',
                            name: values.name,
                            id: values.id
                        }),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then(response => response.json())
                        .then(data => {
                            console.log(data)
                            if (data) {
                            }

                        })
                    setManageError('Account Updated')
                    setTimeout(function () {
                        setManageError('');
                        window.location.reload()
                    }, 3000);

                }
                if (values.email) {
                    fetch(`https://intense-mesa-02860.herokuapp.com/user`, {
                        method: 'PUT',
                        body: JSON.stringify({
                            type: 'edit',
                            email: values.email,
                            id: values.id
                        }),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then(response => response.json())
                        .then(json => {
                            console.log(json)
                            if (json) {
                            }

                        })
                    setManageError('Account Updated')
                    setTimeout(function () {
                        setManageError('');
                        window.location.reload()
                    }, 3000);

                }


            }
            if (status.passChange) {
                fetch(`https://intense-mesa-02860.herokuapp.com/user`, {
                    method: 'PUT',
                    body: JSON.stringify({
                        type: 'pass',
                        password: values.password,
                        id: values.id
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(response => response.json())
                    .then(data => {
                        if (data) {

                        }
                    })
                setManageError('Account Updated')
                setTimeout(function () {
                    setManageError('');
                    window.location.reload()
                }, 3000);
            }
        },
    })
    return (
        <div >
            <div className="d-flex flex-wrap justify-content-between">
                <Link to="/home" className='mt-3 px-4 text-center justify-content-center' style={{ height: '100px' }}>
                    <img className='img-responsive' style={{ width: '150px' }} src={logo} alt="" />
                    <h5 style={{ color: '#ABABAB' }}>Quick door to the world</h5>
                </Link>
            </div>
            <div style={{ minHeight: '80vh' }}>
                {loading ?
                    <div className='d-flex justify-content-between flex-wrap container' >

                        {status.noedit ?
                            <div>
                                <div className='col-3' style={{ cursor: 'pointer' }} onClick={() => {
                                    history.push('/home')
                                    // setStatus({ status: false })
                                    // setStatus({ noedit: true })

                                }}>
                                    <img style={{ width: '80px' }} src={back} alt="" />
                                </div>
                                <h6 style={{ color: '#ABABAB', fontWeight: 'bold' }}>Profile</h6>
                                <div className='text-left my-4'>
                                    {photoURL ?
                                        <div>
                                            <img style={{ width: '150px', borderRadius: '50px' }} src={photoURL} alt="" />
                                        </div>
                                        :
                                        <div className=''>

                                            {photo ?
                                                <img style={{ width: '150px', borderRadius: '50px' }} src={`data:/png;base64,${photo.image}`} alt="" /> :
                                                <img style={{ width: '80px' }} src={noimg} alt="" />
                                            }
                                        </div>
                                    }
                                </div>

                                <div>
                                    <h4 style={{ color: '#ABABAB' }}>{userName}</h4>
                                    <h4 style={{ color: '#ABABAB' }}>{usermail}</h4>
                                    <h4 style={{ color: '#ABABAB', cursor: 'pointer' }} onClick={() => setStatus({ passChange: true })}>Change my password</h4>
                                    <button type={formik.values.email != '' || formik.values.name != '' ? 'submit' : 'button'} className="btn col-6 col-md-12 ml-2 px-3 mt-3 py-2" style={{ borderRadius: '40px', backgroundColor: '#DFCCF4', border: '1px solid #A0A1A1' }} ><h5 className="text-center" style={{ color: '#ABABAB' }} onClick={() => setStatus({ edit: true })}>EDIT</h5></button>
                                    <h4 className="text-center my-4" style={{ color: '#ABABAB', cursor: 'pointer' }} onClick={() => {
                                        localStorage.clear()
                                        window.location.reload()
                                    }}>Logout</h4>
                                </div>
                            </div> : null}


                        {status.edit ?
                            <div>
                                <div className='d-flex'>
                                    <div className='col-3' style={{ cursor: 'pointer' }} onClick={() => {
                                        // history.push('/login')
                                        setStatus({ status: false })
                                        setStatus({ noedit: true })

                                    }}>
                                        <img style={{ width: '80px' }} src={back} alt="" />
                                    </div>

                                </div>
                                <h6 className='col-6 mt-4' style={{ color: '#ABABAB', fontWeight: 'bold' }}>Profile</h6>
                                <div className='text-left'>
                                    {photoURL ?
                                        <div>
                                            <img style={{ width: '150px', borderRadius: '50px' }} src={photoURL} alt="" />
                                        </div>
                                        :
                                        <div className=''>

                                            {photo ?
                                                <img style={{ width: '150px', borderRadius: '50px' }} src={`data:/png;base64,${photo.image}`} alt="" /> :
                                                <img style={{ width: '80px' }} src={noimg} alt="" />
                                            }
                                        </div>
                                    }
                                </div>

                                <form className='mt-4' onSubmit={formik.handleSubmit}>
                                    <div className="form-group col-md-12 mb-4 col-12" >

                                        <input style={{ border: '2px solid #A0A1A1' }} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name || userName} type="text" className="form-control" name='name' id='name' placeholder="Name" />
                                    </div>
                                    <div className="form-group col-md-12 mb-4 col-12" >
                                        <input style={{ border: '2px solid #A0A1A1' }} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email || usermail} type="email" className="form-control" name='email' id='email' placeholder="Email" />
                                    </div>
                                    <h4 style={{ color: '#ABABAB', cursor: 'pointer' }} onClick={() => setStatus({ passChange: true })}>Change my password</h4>
                                    <button type="submit" className="btn col-md-8 col-6 ml-2 px-3 mt-1 py-2" style={{ borderRadius: '40px', backgroundColor: '#84EBD2', border: '2px solid #A0A1A1' }}><h6 style={{ color: '#74737C' }}>DONE</h6></button>
                                </form>
                            </div> : null}


                        {status.passChange ?
                            <div>
                                <div className='col-3' style={{ cursor: 'pointer' }} onClick={() => {
                                    // history.push('/login')
                                    setStatus({ passChange: false })
                                    setStatus({ noedit: true })

                                }}>
                                    <img style={{ width: '80px' }} src={back} alt="" />
                                </div>
                                <div className='d-flex flex-wrap justify-content-around'>

                                    <form className=' mt-4' onSubmit={formik.handleSubmit}>
                                        <h5 style={{ color: '#ABABAB', fontWeight: 'bold' }}>Change Your Password</h5>
                                        <div className="form-group mb-4 d-flex flex-wrap" >
                                            <h4 className='col-lg-6 col-12' style={{ color: '#ABABAB' }}>Current Password</h4>
                                            <div className="col-lg-6 col-12">
                                                <input style={{ border: '2px solid #A0A1A1' }} onChange={formik.handleChange} onBlur={formik.handleBlur} value={userpassword} type="password" className="form-control" name='cpassword' id='cpassword' placeholder="" />
                                            </div>
                                        </div>
                                        <div className="form-group mb-4 d-flex flex-wrap" >
                                            <h4 className='col-lg-6 col-12' style={{ color: '#ABABAB' }}>Choose New Password</h4>
                                            <div className='col-lg-6 col-12'>
                                                <input style={{ border: '2px solid #A0A1A1' }} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} type="password" className="form-control" name='password' id='password' placeholder="" />
                                            </div>
                                        </div>
                                        <button type={formik.values.password ? 'submit' : 'button'} className="btn col-6 col-md-8 ml-2 px-3 mt-1 py-2" style={{ borderRadius: '40px', backgroundColor: '#DFCCF4', border: '2px solid #A0A1A1' }}><h6 style={{ color: '#ABABAB' }}>UPDATE</h6></button>
                                    </form>

                                </div>
                            </div> : null}

                        <div className='' style={{ backgroundColor: '#DEF2A7', height: '50%' }} className="py-5">{manageError ? <h5 className='px-5' >{manageError}</h5> : null}</div>
                    </div>
                    : <div className='text-center mt-5 p-5'>
                        <div className="spinner-border text-primary" role="status">
                            {/* <span className = "sr-only">Loading...</span> */}
                        </div>

                    </div>}
            </div>
            <div className='' style={{ position: 'relative', bottom: '0px', marginTop: '', width: '100%', height: '' }}>
                <div className='d-flex flex-wrap justify-content-center text-center' style={{ color: '#ABABAB', }}>
                    <p className='col-3 col-md-2'>Copyright QikDaw.com 2021</p>
                    <p className='col-3 col-md-2' style={{ cursor: 'pointer' }} onClick={() => history.push('/contact')}>Contact</p>
                    <p className='col-3 col-md-2'>Terms of Use/Service</p>
                    <p className='col-3 col-md-2'>Privacy Policy</p>

                </div>
            </div>

        </div>
    );
};

export default UserProfile;