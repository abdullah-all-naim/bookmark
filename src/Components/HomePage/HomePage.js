import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Spin, Space } from 'antd';
import Bookmark from '../Bookmark/Bookmark';
import logo from '../../logo.png'
import noimg from '../../noprofile.png'
import Footer from '../Footer/Footer';

const HomePage = () => {
    document.title = 'QikDaw | Home'
    const getUser = localStorage.getItem('loggedIn')
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(false)
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
    let profileImage;
    let userEmail
    let userName
    let photoURL
    user.map(x => {
        profileImage = x.photo
        photoURL = x.photoURL
        userEmail = x.email
        userName = x.name
    })
    return (
        <>
            {loading ?
                <div>
                    <div style={{ minHeight: '80vh' }}>
                        <div className="d-flex flex-wrap justify-content-between">
                            <Link to="/home" className='mt-3 px-4 text-center justify-content-center' style={{ height: '100px' }}>
                                <img className='img-responsive' style={{ width: '150px' }} src={logo} alt="" />
                                <h5 style={{ color: '#ABABAB' }}>Quick door to the world</h5>
                            </Link>
                            <div className='text-center p-3' style={{ cursor: 'pointer' }} onClick={() => history.push('/userprofile')}>
                                {photoURL ?
                                    <div>
                                        <img className='img-fluid' style={{ width: '80px', borderRadius: '50%', height: '80px' }} src={photoURL} alt="" />
                                    </div>
                                    :
                                    <div className=''>

                                        {profileImage ?
                                            <img className='img-' style={{ width: '80px', borderRadius: '50%', height: '80px' }} src={`data:/png;base64,${profileImage.image}`} alt="" /> :
                                            <img className='img-' style={{ width: '80px' }} src={noimg} alt="" />
                                        }
                                    </div>
                                }
                                <h5 style={{ color: '#ABABAB' }}>{userName}</h5>
                            </div>
                        </div>
                        <div className='d-flex flex-wrap justify-content-between' style={{}}>
                            <div className=' col-12'>
                                <Bookmark email={userEmail} />
                            </div>
                        </div>

                    </div>
                    <Footer />
                </div>
                : <div style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}>
                    <Space size="middle">
                        <Spin size="large" />
                    </Space>
                </div>}
        </>
    );
};

export default HomePage;