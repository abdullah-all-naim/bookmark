import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Bookmark from '../Bookmark/Bookmark';
import logo from '../../logo.png'

const HomePage = () => {
    const getUser = localStorage.getItem('loggedIn')
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        axios.get('http://localhost:5000/userinfo?id=' + getUser)
            .then((response) => response.data)
            .then(data => {
                if (data) {
                    setUser(data)
                    setLoading(true)
                }

            })
    }, [])
    let email
    { user.map(x => email = x.email) }
    return (
        <>
            {loading ?
                <div>
                    <div className="d-flex flex-wrap justify-content-between">
                        <div className=''>
                             <img src={logo} alt="" />
                        </div>
                        <div className='text-center'>
                            <div>
                                <img style={{ width: '70px', borderRadius: '50px' }} src={user.map(x => x.photoURL || `data:/png;base64,${x.photoURL}`)} alt="" />
                            </div>
                            <p>{user.map(x => x.name || x.fname + ' ' + x.lname)}</p>
                        </div>
                    </div>
                    <div className='d-flex flex-wrap justify-content-between mt-3' style={{}}>
                        <div className='mt-5 col-12'>
                            <Bookmark email={email} />
                        </div>
                    </div>
                </div>
                : <div className='text-center mt-5 p-5'>
                    <div class="spinner-border text-dark" role="status">
                        {/* <span class="sr-only">Loading...</span> */}
                    </div>
                </div>}
        </>
    );
};

export default HomePage;