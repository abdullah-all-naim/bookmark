import React, { useState } from 'react';
import logo from '../../logo.png';
import frame from '../../frame.png';
import Footer from '../Footer/Footer';

const Contact = () => {
    const [status, setStatus] = useState(false)
    return (
        <>
            <div className="d-flex flex-wrap justify-content-between">
                <div className=''>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <img src={frame} alt="" />
                </div>

            </div>
            {/* <div className='d-flex justify-content-center flex-wrap'> */}
            {status == false ? <form className='d-flex justify-content-center flex-wrap container'>
                <div class="form-group col-4 mb-3 mx-5">
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your email" />
                </div>
                <div class="form-group col-12"></div>
                <div class="form-group col-4 mx-5">
                    <textarea placeholder='Write your message' class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
                <div class="form-group col-12"></div>
                <div className="col-5 text-center mt-3">
                    <button type="button" className="btn col-md-6 ml-2 px-3 mt-1 py-2" style={{ borderRadius: '40px', backgroundColor: '#DFCCF4', border: '2px solid #A0A1A1' }}><h6 style={{ color: '#ABABAB' }} onClick={() => setStatus(true)}>Send</h6></button>
                </div>
            </form> :
                <div className=''>
                    <h3 className='text-center' style={{ color: '#ABABAB' }}>Thanks for contacting us. </h3 > 
                    <h3 className='text-center' style={{ color: '#ABABAB' }}>Customer Service desk will respond back to you shortly </h3>
                    <div className="col-4 text-center mt-3 mx-auto">
                        <button type="submit" className="btn col-md-6 ml-2 px-3 mt-1 py-2" style={{ borderRadius: '40px', backgroundColor: '#DFCCF4', border: '2px solid #A0A1A1' }}><h6 style={{ color: '#ABABAB' }}>GOT IT</h6></button>
                    </div>
                </div>}
            {/* </div> */}
            <Footer />
        </>
    );
};

export default Contact;