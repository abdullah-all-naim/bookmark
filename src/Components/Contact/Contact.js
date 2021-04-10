import React, { useState } from 'react';
import logo from '../../logo.png';
import frame from '../../frame.png';
import Footer from '../Footer/Footer';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Contact = () => {
    document.title = 'QikDaw | Contact'
    const [status, setStatus] = useState(false)
    const history = useHistory()
    return (
        <>
        <div style={{minHeight : '95vh'}}>
            <div className="d-flex flex-wrap justify-content-between">
                <Link to="/home" className='mt-3 px-4 text-center' style={{ height: '100px' }}>
                    <img className='img-responsive' style={{ width: '150px' }} src={logo} alt="" />
                    <h5 style={{ color: '#ABABAB' }}>Quick door to the world</h5>
                </Link>
                <div className='d-none d-sm-flex'>
                    <img className='img-responsive' src={frame} alt="" />
                </div>
            </div>
            {status == false ? <form className='d-flex justify-content-center flex-wrap container'>
                <div className="form-group col-10 col-lg-4 mb-3 mx-5">
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your email" />
                </div>
                <div className="form-group col-12"></div>
                <div className="form-group col-10 col-lg-4 mx-5">
                    <textarea placeholder='Write your message' className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
                <div className="form-group col-12"></div>
                <div className="col-5 text-center mt-3">
                    <button type="button" className="btn col-12 col-md-6 ml-2 px-3 mt-1 py-2" style={{ borderRadius: '40px', backgroundColor: '#DFCCF4', border: '2px solid #A0A1A1' }}><h6 style={{ color: '#ABABAB' }} onClick={() => setStatus(true)}>Send</h6></button>
                </div>
            </form> :
                <div className=''>
                    <h3 className='text-center' style={{ color: '#ABABAB' }}>Thanks for contacting us. </h3 >
                    <h3 className='text-center' style={{ color: '#ABABAB' }}>Customer Service desk will respond back to you shortly </h3>
                    <div className="col-4 text-center mt-3 mx-auto">
                        <button type="button" onClick={() => history.push('/home')} className="btn col-12 col-md-6 ml-2 px-3 mt-1 py-2" style={{ borderRadius: '40px', backgroundColor: '#DFCCF4', border: '2px solid #A0A1A1' }}><h6 style={{ color: '#ABABAB' }}>GOT IT</h6></button>
                    </div>
                </div>}
            {/* </div> */}
            </div>
            <Footer />
        </>
    );
};

export default Contact;