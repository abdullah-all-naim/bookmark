import React from 'react';
import { useHistory } from 'react-router';
import './Footer.css'

const Footer = () => {
    const history = useHistory()
    return (
            <div className='d-flex flex-wrap justify-content-center' style={{ color: '#ABABAB', }} id='foot'>
                <p className='col- col-lg-2 mx-2 text-center text-decoration-none'>Copyright QikDaw.com 2021</p>
                <p className='col- col-lg-2 mx-2 text-center' style={{ cursor: 'pointer' }} onClick={() => history.push('/contact')}>Contact</p>
                <p className='col- col-lg-2 mx-2 text-center' style={{ cursor: 'pointer' }} onClick={() => history.push('/terms')}>Terms of Use/Service</p>
                <p className='col- col-lg-2 mx-2 text-center' style={{ cursor: 'pointer' }} onClick={() => history.push('/privacy')}>Privacy Policy</p>
            </div>
        
    );
};

export default Footer;