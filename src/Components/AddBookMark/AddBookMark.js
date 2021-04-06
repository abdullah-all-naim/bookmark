import React, { useState } from 'react';
// import './BookMarkNow.css'
import { useFormik } from 'formik'
import { Link, useHistory } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Checkbox } from 'antd';
import Footer from '../Footer/Footer';
import back from '../../back.png'
import plus from '../../plus.png'

const AddBookMark = ({ email, category }) => {
    const usermail = email
    const [status, setStatus] = useState(false)
    const [categoryValue, setCategoryValue] = useState([])
    const [count, setCount] = useState(false)
    const [showCat, setShowCat] = useState(true)
    const [newCat, setNewCat] = useState(false)
    const [existingCat, setExistingCat] = useState('')
    const history = useHistory()
    const [loading, setLoading] = useState(true)
    const formik = useFormik({
        initialValues: {
            email: usermail,
            category: '',
            sitelink: '',
            sitename: '',
            checkbox: [],
        },
        onSubmit: (values) => {
            setLoading(false)
            const newCategory = new FormData()
            newCategory.append('category', category)
            console.log(categoryValue)
            newCategory.append('email', usermail)
            newCategory.append('sitename', values.sitename)
            newCategory.append('sitelink', values.sitelink)
            fetch('https://intense-mesa-02860.herokuapp.com/bookmark', {
                method: 'POST',
                // headers: {
                //     'Content-Type': 'application/json'
                // },
                // body: JSON.stringify(newCategory)
                body: newCategory
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    if (data) {

                        console.log('true')
                        window.location.reload(true);
                        // window.location.reload(true);
                    }
                })
                .catch(error => {
                    console.error(error)
                })
            // setTimeout(() => {
            //     window.location.reload()
            // }, 3000)
        },
        validate: (values) => {
            let errors = {};
            // if (!values.sitelink) {
            //     errors.sitelink = 'Required'
            // }
            // if (!values.sitename) {
            //     errors.sitename = 'Required'
            // }

            return errors

        }
    })


    // const handleClicked = () => {
    //     setNewCat(true)
    //     setCount(true)
    // }
    // const CatArr = []
    // let key = 0
    // bookmarkdata.map((x, id) => {
    //     CatArr.push(x.category)
    //     key = id
    // })
    // const catArr = []
    // function onChange(checkedValues) {
    //     setCategoryValue(checkedValues)
    // }

    return (
        <div style={{ minHeight: '75vh' }}>
            { loading ?
                <div >
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
                            <div className=''>
                                <div className='d-flex flex-wrap'>
                                    <div className='col-12 col-lg-1 mb-5' style={{ cursor: 'pointer' }} onClick={() => {
                                        window.location.reload()

                                    }}>
                                        <img style={{ width: '80px' }} src={back} alt="" />
                                    </div>
                                    <h4 className=' mt-2 ml-2'>Category <span className='font-weight-bold'> :
                                    </span>
                                        <span className='mt-4'><span className="px-3 mt-3" style={{ borderRadius: '40px', color: '#DFCCF4', border: '1px solid #DFCCF4', fontWeight: 'bold' }} id='cate'>{category}</span>
                                        </span></h4>

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
                                        <h4 className=''>Name</h4>
                                    </div>
                                    <div className='col-10 col-md-6 col-lg-3'>
                                        <input type="text" className="form-control p-2" name='sitename' id='sitename' placeholder="" value={formik.values.sitename} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        {formik.touched.sitename && formik.errors.sitename ? (<div className="text-danger text-left">{formik.errors.sitename}</div>) : null}
                                    </div>
                                    <div className='col-12 col-lg-2 text-center'>
                                        <p className='text-muted text-center' style={{ fontStyle: 'italic' }}>Example : FBook</p>
                                    </div>
                                </div>
                                <div className='text-center mt-5'>
                                    {formik.touched.sitelink && formik.touched.sitename ? <button type="submit" className='btn px-5 py-3 text-muted' style={{ borderRadius: '40px', backgroundColor: '#DFCCF4', fontWeight: 'bold', border: '1px solid #7A7A7A' }}>DONE</button> : <button type='button' className='btn px-5 py-3 text-muted' style={{ borderRadius: '40px', backgroundColor: '#DFCCF4', fontWeight: 'bold', border: '1px solid #7A7A7A' }}>DONE</button>}
                                </div>

                            </div>
                            
                    </form>
                </div>
                :
                <div className='text-center p-5'>
                    <div className="spinner-border text-primary" role="status">
                        {/* <span className = "sr-only">Loading...</span> */}
                    </div>
                </div>}
        </div>
    );
};

export default AddBookMark;