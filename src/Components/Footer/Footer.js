import React from 'react';
import { useHistory } from 'react-router';
import footimg from '../../footpic.png'

const Footer = () => {
    const history = useHistory()
    return (
        <>
            <div className='d-flex justify-content-end' style={{position: 'relative', bottom: '0px'}}> <img src={footimg} alt="" /> </div>
            <div style={{ position: 'relative', bottom: '0px'}}>
                <div className='d-flex justify-content-center mb-3 text-center' style={{ color: '#ABABAB', }}>
                    <p className='col-2'>Copyright QikDaw.com 2021</p>
                    <p className='col-2' style={{ cursor : 'pointer'}}onClick={() => history.push('/contact')}>Contact</p>
                    <p className='col-2'>Terms of Use/Service</p>
                    <p className='col-2'>Privacy Policy</p>

                </div>
            </div>


        </>
    );
};

export default Footer;