import React, { useState } from 'react';
import logo from '../../logo.png';
import frame from '../../frame.png';
import Footer from '../Footer/Footer';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import back from '../../back.png'
const Privacy = () => {
    document.title = 'QikDaw | Privacy Polices'
    const [status, setStatus] = useState(false)
    const history = useHistory()
    return (
        <>
            <div className="d-flex flex-wrap justify-content-between" >
                <Link to="/home" className='mt-3 px-4 text-center' style={{ height: '100px' }}>
                    <img className='img-responsive' style={{ width: '150px' }} src={logo} alt="" />
                    <h5 style={{ color: '#ABABAB' }}>Quick door to the world</h5>
                </Link>
                <div className='d-none d-sm-flex'>
                    <img className='img-responsive' src={frame} alt="" />
                </div>
            </div>
            <div className='d-flex'>
                <div className='col-3' style={{ cursor: 'pointer' }} onClick={() => {
                                        history.push('/home')
                                        

                                    }}>
                                        <img style={{ width: '80px' }} src={back} alt="" />
                </div>

            </div>
            <div className='container' style={{ color:'grey'}}>
                <h4 style={{ color: '#ABABAB' }}>QIKDAW PRIVACY POLICY AGREEMENT</h4>
                <div>
                    <p>
                        QikDaw is committed to keeping any and all personal information collected of those individuals that visit our website and make use of our on-line facilities and services accurate, confidential, secure and private. Our privacy policy has been designed and created to ensure those affiliated with QikDaw of our commitment and realization of our obligation not only to meet but to exceed most existing privacy standards.
                    </p>

                    <span className='font-weight-bold'>THEREFORE,</span> this Privacy Policy Agreement shall apply to and thus it shall govern any and all data collection and usage thereof. Through the use of  and you are herein consenting to the following data procedures expressed within this agreement.
                <h6 style={{fontWeight: 'bold', textDecoration: 'underline'}}>Collection of Information</h6>
                This website collects various types of information, such as:
                <ul>
                        <li>Voluntarily provided information which may include your name and email address - which may be used when you create account to use the services provided by QikDaw.</li>
                        <li>Information automatically collected when visiting our website, which may include cookies and server logs.</li>
                    </ul>

                    <p>
                        Please rest assured that this site shall only collect personal information that you knowingly and willingly provide by way of surveys, completed membership forms, and emails. It is the intent of this site to use personal information only for the purpose for which it was requested and any additional uses specifically provided on this site.

                        QikDaw may also have the occasion to collect anonymous demographic information that may not be unique to you and may even gather additional or other personal and/or non-personal information, such as age, gender and email address at a later time.

                        It is highly recommended and suggested that you review the privacy policies and statements of any website you choose to use or frequent as a means to better understand the way in which other websites garner, make use of and share information collected.
                    </p>

                    <h6 className='font-weight-bold text-decoration-underline' style={{fontWeight: 'bold'}}>Use of Information Collected</h6>
                    <p>QikDaw may collect and may make use of personal information to assist in the operation of our website and to ensure delivery of the services you need and request. At times, we may find it necessary to use personally identifiable information meant to inform you of other possible products and/or services that may be available to you from QikDaw and its subsidiaries. QikDaw may also be in contact with you with regards to completing surveys and/or research questionnaires related to your opinion of current or possible new services that are offered or may be offered.</p>

                    <p>  QikDaw does not now, nor will it in the future, sell, rent or lease any of its customer lists and/or names to any third parties.</p>

                    <p>QikDaw from time to time, may feel it necessary to make contact with you on behalf of other external business partners with regards to a specific offer which may be of interest to you. If you consent or show interest in presented offers, then, at that time, specific identifiable information, such as name, email address and/or telephone number, may be shared with the third party.</p>

                    <p>
                        QikDaw may find it beneficial to share specific data with their trusted partners in an effort to conduct statistical analysis, provide you with email and/or postal mail, deliver support and/or arrange for deliveries to be made. Those third parties shall be strictly prohibited from making use of your personal information, other than to deliver those services which you requested, and as such they are thus required in accordance with this agreement to maintain the confidentiality of all your information.
                    </p>

                    <p>
                        QikDaw may deem it necessary to follow websites and/or pages that their users may frequent in an effort to gleam what types of services and/or products may be the most popular to customers or the general public.
                    </p>

                    <p>
                        QikDaw may disclose your personal information, without prior notice to you, only if required to do so pursuant to applicable laws and/or in a good faith belief that such action is deemed necessary or required to:
                    </p>

                    <p>
                        a)	Conform to decrees, laws and/or statutes or in an effort to comply with any process which may be served upon QikDaw  and/or its website;
                    </p>

                    <p>
                        b)	Safeguard and/or preserve all the rights and/or property of QikDaw; and
                    </p>

                    <p>
                        c)	Perform under demanding conditions in an effort to safeguard the personal safety of users of QikDaw and/or the general public.
                    </p>

                    <h6 style={{fontWeight: 'bold', textDecoration: 'underline'}}>Children Under Age of 13</h6>
                    <p>
                        QikDaw does not knowingly collect personal identifiable information from children under the age of thirteen (13) without verifiable parental consent. If it is determined that such information has been inadvertently collected on anyone under the age of thirteen (13), we shall immediately take the necessary steps to ensure that such information is deleted from our system’s database. Anyone under the age of thirteen (13) must seek and obtain parent or guardian permission to use this website.
                    </p>

                    <h6 style={{fontWeight: 'bold', textDecoration: 'underline'}}>Unsubscribe or Opt-Out</h6>
                    <p>All users and/or visitors to our website have the option to discontinue receiving communication from us and/or reserve the right to discontinue receiving communications by way of email or newsletters. To discontinue or unsubscribe to our website please send an email that you wish to unsubscribe to service@qikdaw.com. If you wish to unsubscribe or opt-out from any third-party websites, you must go to that specific website to unsubscribe and/or opt-out.</p>

                    <h6 style={{fontWeight: 'bold', textDecoration: 'underline'}}>Links to Other Web Sites</h6>
                    <p>
                        Our website does contain links to affiliate and other websites. QikDaw does not claim nor accept responsibility for any privacy policies, practices and/or procedures of other such websites. Therefore, we encourage all users and visitors to be aware when they leave our website and to read the privacy statements of each and every website that collects personally identifiable information. The aforementioned Privacy Policy Agreement applies only and solely to the information collected by our website.
                    </p>

                    <h6 style={{fontWeight: 'bold', textDecoration: 'underline'}}>
                        Security
                    </h6>
                    <p>
                        QikDaw shall endeavor and shall take every precaution to maintain adequate physical, procedural and technical security with respect to its offices and information storage facilities so as to prevent any loss, misuse, unauthorized access, disclosure or modification of the user’s personal information under our control.
                    </p>


                    <h6 style={{fontWeight: 'bold', textDecoration: 'underline'}}>
                        Changes to Privacy Policy Agreement
                    </h6>
                    <p>
                        QikDaw reserves the right to update and/or change the terms of our privacy policy, and as such we will post those change to our website homepage at QikDaw, so that our users and/or visitors are always aware of the type of information we collect, how it will be used, and under what circumstances, if any, we may disclose such information. If at any point in time QikDaw decides to make use of any personally identifiable information on file, in a manner vastly different from that which was stated when this information was initially collected, the user or users shall be promptly notified by email. Users at that time shall have the option as to whether or not to permit the use of their information in this separate manner.
                    </p>

                    <h6 style={{fontWeight: 'bold', textDecoration: 'underline'}}>Acceptance of Terms</h6>
                    <p>
                        Through the use of this website, you are hereby accepting the terms and conditions stipulated within the aforementioned Privacy Policy Agreement. If you are not in agreement with our terms and conditions, then you should refrain from further use of our sites. In addition, your continued use of our website following the posting of any updates or changes to our terms and conditions shall mean that you are in agreement and acceptance of such changes.
                    </p>

                    <h6 style={{fontWeight: 'bold', textDecoration: 'underline'}}>How to Contact Us</h6>
                    <p>
                        If you have any questions or concerns regarding the Privacy Policy Agreement related to our website, please feel free to contact us at the following email, telephone number or mailing address.
                        
                    </p>
                    <p>Email: Service@qikdaw.com</p>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default Privacy;