import React, { useEffect, useState } from 'react';
import './BookMarkNow.css'
import { useFormik } from 'formik'
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../Footer/Footer';

const BookMarkNow = ({ email, bookmarkdata }) => {
    const usermail = email
    const [status, setStatus] = useState(false)
    const [categoryValue, setCategoryValue] = useState()
    const [count, setCount] = useState(false)
    const [showCat, setShowCat] = useState(false)
    const [newCat, setNewCat] = useState(false)
    const [showBookdata, setShowBookData] = useState([])
    const history = useHistory()
    useEffect(() => {
        axios.get('http://localhost:5000/bookmarkinfo')
            .then((response) => response.data)
            .then(data => {
                setShowBookData(data)
            })
    }, [])
    let showData = []
    showBookdata.map(x => {
        if (x.email == email) {
            showData.push(x)
        }
    })
    const handleCategory = (val) => {
        console.log(val)
        setCategoryValue(val)
        setCount(true)
        setStatus(true)
        setNewCat(true)
        setShowCat(false)

    }

    const formik = useFormik({
        initialValues: {
            email: usermail,
            category: '',
            sitelink: '',
            sitename: '',

        },
        onSubmit: (values, { resetForm }) => {

            if (categoryValue) {
                values['category'] = categoryValue
            }
            console.log(values)
            const tokenId = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
            // const [loading, setLoading] = useState(false)

            axios.post('http://localhost:5000/bookmark', values)
                .then(response => console.log(response))
            // history.push('/userprofile/home')
        },
        validate: (values) => {
            let errors = {};
            if (!values.category) {
                errors.category = 'Required'
            }
            if (!values.sitelink) {
                errors.sitelink = 'Required'
            }
            if (!values.sitename) {
                errors.sitename = 'Required'
            }

            return errors

        }
    })
    const handleClick = () => {
        setCount(true)
        setStatus(true)
        setNewCat(true)
        setShowCat(false)
    }
    const handleStateChange = () => {
        setStatus(true)
        setShowCat(true)
    }

    console.log(categoryValue)
    return (
        <>
        <form onSubmit={formik.handleSubmit}>
            { newCat == false ? <div className='d-flex justify-content-center my-3 align-items-center'>
                <div className='col-2'>
                    <h5 className='text-muted'>Create New Category</h5>
                </div>
                <div className='col-3'>
                    <input type="text" className="form-control p-2" name='category' id='category' placeholder="Enter Category" value={formik.values.category} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.touched.category && formik.errors.category ? (<div className="text-danger text-left">{formik.errors.category}</div>) : null}
                </div>
                <div className='col-2'>
                    <p className='text-muted text-center'>Example : Social Sites <br /> (Max: 25) </p>
                </div>
            </div> : null}

            { status == false ? 
            <div className='text-center mt-5' style={{ textDecoration: 'underline', cursor: 'pointer', textDecorationColor: '#DFCCF4' }} onClick={() => handleStateChange()}>
                <h4 style={{ color: '#DFCCF4', fontWeight: 'bold' }}>Or Select Exiting Category</h4>
            </div> : null}

            {showCat ? 
            <div className=' mt-5'>
                <div className='text-center'>
                    <h4 className='text-muted'>Or Select Exiting Category</h4>
                </div>
                <div className='d-flex justify-content-center' id='cat'>
                    <ul className='d-flex' style={{ listStyle: 'none' }}>
                        {bookmarkdata.map((y, id) =>
                            <li className='mx-3 px-4 py-2 font-weight-bold' style={{ border: '1px solid lightgrey', borderRadius: '30px', color: '#DFCCF4', cursor: 'pointer', fontWeight: 'bold', fontSize: '20px' }} onClick={() => handleCategory(y.category)}> {y.category} </li>
                        )}
                    </ul>
                </div>
            </div> : null}

            { count == false ?
             <div className='text-center'>
                {formik.values.category == '' ? <button className='btn px-5 py-3 text-muted' style={{ borderRadius: '40px', backgroundColor: '#DFCCF4', fontWeight: 'bold' }} >NEXT</button> : <button className='btn px-5 py-3 text-muted' style={{ borderRadius: '40px', backgroundColor: '#DFCCF4', fontWeight: 'bold' }} onClick={() => handleClick()}>NEXT</button>}
            </div> : 
            <div className=''>
                <h4 className='mt-2 ml-2'>Category <span className='font-weight-bold'>></span> <span className="px-3 mt-3" style={{ borderRadius: '40px', backgroundColor: '#DFCCF4'}}>{categoryValue ? categoryValue : formik.values.category}</span></h4>
                <div className='d-flex justify-content-center my-3 align-items-center'>
                    <div className='col-2'>
                        <h4>Website URL/address</h4>
                    </div>
                    <div className='col-3'>
                        <input type="text" className="form-control p-2" name='sitelink' id='sitelink' placeholder="www.bbc.com" value={formik.values.sitelink} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.touched.sitelink && formik.errors.sitelink ? (<div className="text-danger text-left">{formik.errors.sitelink}</div>) : null}
                    </div>
                    <div className='col-2'>
                        <p className='text-muted text-center' style={{ fontStyle: 'italic' }}>Example : www.webname.com</p>
                    </div>
                </div>
                <div className='d-flex justify-content-center my-3 align-items-center'>
                    <div className='col-2'>
                        <h4>Name</h4>
                    </div>
                    <div className='col-3'>
                        <input type="text" className="form-control p-2" name='sitename' id='sitename' placeholder="BBC" value={formik.values.sitename} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.touched.sitename && formik.errors.sitename ? (<div className="text-danger text-left">{formik.errors.sitename}</div>) : null}
                    </div>
                    <div className='col-2'>
                        <p className='text-muted text-center' style={{ fontStyle: 'italic' }}>Example : FBook</p>
                    </div>
                </div>
                <div className='text-center mt-5'>
                    {formik.values.sitename && formik.values.sitelink ? <button type="submit" className='btn px-5 py-3 text-muted' style={{ borderRadius: '40px', backgroundColor: '#DFCCF4', fontWeight: 'bold' }}>DONE</button> : <button className='btn px-5 py-3 text-muted' style={{ borderRadius: '40px', backgroundColor: '#DFCCF4', fontWeight: 'bold' }}>DONE</button>}
                </div>
            </div>}
        </form>
        <Footer/>
        </>
    );
};

export default BookMarkNow;