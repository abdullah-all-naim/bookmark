import React from 'react';
import { useHistory } from 'react-router';
import footimg from '../../footpic.png'

const Footer = () => {
    const history = useHistory()
    return (
        <>
            <div className='d-lg-flex justify-content-end d-none' style={{position: 'relative', bottom: '0px',height: ''}}> <img className='img-responsive' src={footimg} alt="" /> </div>
            <div className='mx-auto text-center' style={{ position: 'relative', bottom: '0px'}}>
                <div className='d-flex flex-wrap justify-content-center' style={{ color: '#ABABAB', }}>
                    <p className='col- col-lg-2 mx-2 text-center'>Copyright QikDaw.com 2021</p>
                    <p className='col- col-lg-2 mx-2 text-center' style={{ cursor : 'pointer'}}onClick={() => history.push('/contact')}>Contact</p>
                    <p className='col- col-lg-2 mx-2 text-center'>Terms of Use/Service</p>
                    <p className='col- col-lg-2 mx-2 text-center'>Privacy Policy</p>

                </div>
            </div>


        </>
    );
};

export default Footer;