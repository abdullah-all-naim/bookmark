import React, { useState } from 'react';
import { useFormik } from 'formik'
import { Link, useHistory } from 'react-router-dom';
import Footer from '../Footer/Footer';
import back from '../../back.png'
import plus from '../../plus.png'

const EditCategory = ({ email, data }) => {
    const usermail = email
    console.log(data)
    const getUser = localStorage.getItem('loggedIn')
    const [categoryValue, setCategoryValue] = useState('')
    const [count, setCount] = useState(false)
    const [newCat, setNewCat] = useState(false)
    const history = useHistory()
    const [loading, setLoading] = useState(true)
    const formik = useFormik({
        initialValues: {
            email: usermail,
            category: data.category,
            sitelink: data.sitelink,
            sitename: data.sitename
        },
        onSubmit: (values) => {
            setLoading(false)
            const newCategory = {
                oldcat: data.category,
                oldname: data.sitename,
                oldlink: data.sitelink,
                newcategory: values.category,
                sitename: values.sitename,
                sitelink: values.sitelink,
                email: email
            }
            fetch(`https://intense-mesa-02860.herokuapp.com/editcategory`, {
                method: 'PUT',
                body: JSON.stringify(newCategory),
                headers: {
                    'Content-Type': 'application/json'
                },

            }).then(response => response.json())
                .then(data => {
                    console.log(data)
                    if (data) {
                        window.location.reload(true);
                    } 

                })
            setTimeout(function () {
                // setLoading(true)
                window.location.reload()
            }, 3000);
        },
        validate: (values) => {
            let errors = {};
            // if (!data.category) {
                if (values.category == '') {
                    errors.category = 'Required'
                }
            // }

            return errors

        }
    })
    console.log(formik.values.category)
    return (
        <div style={{ minHeight: '75vh' }}>
            { loading ?
                <div style={{marginBottom : '140px'}}>
                    <div className='px-5'>
                        <div className='d-flex flex-wrap justify-content-between align-items-center mb-3 text-center px-3 py-2' style={{ cursor: 'pointer', width: '200px', border: '3px solid #C64CE9', borderRadius: '30px' }} >
                            <h5 className='text-muted text-center'>BOOKMARK</h5>
                            <div>
                                <img style={{ width: '40px' }} src={plus} alt="" />
                            </div>
                        </div>
                        <div style={{ borderBottom: '3px solid lightgrey' }}>
                        </div>
                    </div>
                    <form onSubmit={formik.handleSubmit} >
                        {newCat == false ?
                            <div>
                                <div className='d-flex flex-wrap justify-content-center mt-4'>
                                    <div className='col-12 col-lg-1 mb-5' style={{ cursor: 'pointer' }} onClick={() => {
                                        window.location.reload()

                                    }}>
                                        <img style={{ width: '80px' }} src={back} alt="" />
                                    </div>
                                    <div className='col-12 col-lg-2 text-center'>
                                        <h5 className='text-muted'>Update Category</h5>
                                    </div>
                                    <div className='col-10 col-lg-3'>
                                        <input type="text" className="form-control p-2" name='category' id='category' placeholder="Enter Category" value={formik.values.category} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        {formik.values.category == '' ? (<div className="text-danger text-left">Required</div>) : null}
                                    </div>
                                    <div className='col-lg-2 col-10'>
                                        <p className='text-muted text-center'>Example : Social Sites <br /> (Max: 25) </p>
                                    </div>
                                </div>
                                <div className='text-center mt-2'>
                                    {formik.values.category != ''  ? <button type="button" className='btn px-5 py-3 text-muted' style={{ borderRadius: '40px', backgroundColor: '#DFCCF4', fontWeight: 'bold', border: '1px solid #7A7A7A' }} onClick={() => {
                                        setNewCat(true)
                                        setCount(true)
                                    }} >NEXT</button> : <button type='button' className='btn px-5 py-3 text-muted' style={{ borderRadius: '40px', backgroundColor: '#DFCCF4', fontWeight: 'bold', border: '1px solid #7A7A7A' }}>NEXT</button>}
                                </div>
                            </div>
                            : null}
                        {count ?
                            <div className=''>
                                <div className='d-flex'>
                                    <div onClick={() => {
                                        setCount(false)
                                        setNewCat(false)
                                    }}>
                                        <img style={{ width: '80px' }} src={back} alt="" />
                                    </div>
                                    <h4 className=' mt-2 ml-2'>Category <span className='font-weight-bold'> : </span> <span className="px-3 mt-3" style={{ borderRadius: '40px', color: '#DFCCF4', border: '1px solid #DFCCF4', fontWeight: 'bold' }} id='cate'>{categoryValue ? categoryValue : formik.values.category}</span></h4>
                                </div>

                                <div className='d-flex flex-wrap justify-content-center my-3 align-items-center'>
                                    <div className='col-12 col-lg-2 text-center'>
                                        <h4>Website URL/address</h4>
                                    </div>
                                    <div className='col-10 col-md-6 col-lg-3'>
                                        <input type="text" className="form-control p-2" name='sitelink' id='sitelink' placeholder="" value={formik.values.sitelink} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        {formik.touched.sitelink && formik.errors.sitelink ? (<div className="text-danger text-left">{formik.errors.sitelink}</div>) : null}
                                    </div>
                                    <div className='col-12 col-lg-2 text-center'>
                                        <p className='text-muted text-center' style={{ fontStyle: 'italic' }}>Example : www.webname.com</p>
                                    </div>
                                </div>
                                <div className='d-flex flex-wrap justify-content-center my-3 align-items-center'>
                                    <div className='col-12 col-lg-2 text-center'>
                                        <h4>Name</h4>
                                    </div>
                                    <div className='col-10 col-md-6 col-lg-3'>
                                        <input type="text" className="form-control p-2" name='sitename' id='sitename' placeholder="" value={formik.values.sitename} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        
                                    </div>
                                    <div className='col-12 col-lg-2 text-center'>
                                        <p className='text-muted text-center' style={{ fontStyle: 'italic' }}>Example : FBook</p>
                                    </div>
                                </div>
                                <div className='text-center mt-5'>
                                    <button type="submit" className='btn px-5 py-3 text-muted' style={{ borderRadius: '40px', backgroundColor: '#DFCCF4', fontWeight: 'bold', border: '1px solid #7A7A7A' }}>DONE</button>
                                </div>
                            </div>
                            : null}
                    </form>
                    {/* <Footer /> */}
                </div> :
                <div className='text-center p-5'>
                    <div className = "spinner-border text-primary" role="status">
                        {/* <span className = "sr-only">Loading...</span> */}
                    </div>
                </div>}
        </div>
    );
};

export default EditCategory;