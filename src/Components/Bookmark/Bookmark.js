import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BookMarkNow from '../BookMarkNow/BookMarkNow';
import AddBookMark from '../AddBookMark/AddBookMark';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
import './Bookmark.css';
import plus from '../../plus.png';
import lplus from '../../lplus.png';
import edit from '../../edit.png';
import del from '../../delete.png';
import EditCategory from '../EditCategory/EditCategory';
const Bookmark = ({ email }) => {
    const usermail = email
    const [isBookMarkOpen, setIsBookMarkOpen] = useState(false)
    const [bookdata, setBookData] = useState([])
    const [siteId, setSiteId] = useState(0)
    const [addCat, setAddCat] = useState('')
    let [showBookData, setShowBookData] = useState([])
    const [showOptions, setShowOptions] = useState(null)
    const [loading, setLoading] = useState(true)
    const [editCat, setEditCat] = useState(true)
    const [sendData, setSendData] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = (e) => {
        if (isBookMarkOpen == false) {
            setIsBookMarkOpen(true)
        }
        if (isBookMarkOpen == true) {
            setIsBookMarkOpen(false)
        }
    }
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };


    console.log(addCat)
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    useEffect(() => {
        axios.get('https://intense-mesa-02860.herokuapp.com/bookmarkinfo')
            .then((response) => response.data)
            .then(data => {
                if (data) {
                    setIsOpen(true)
                    setShowBookData(data)
                }

            })
    }, [])
    let showData = []
    showBookData.map(x => {
        if (x.email == email) {
            showData.push(x)
        }
    })
    console.log(showData)
    const filteredArr = showData.reduce((acc, current) => {
        const x = acc.find(item => item.category === current.category);
        console.log(x)
        if (!x) {
            const newCurr = {
                category: current.category,
                sitename: [current.sitename],
                sitelink: [current.sitelink],
            }
            console.log(acc)
            return acc.concat([newCurr]);
        } else {
            const currData = x.sitename.filter(d => d === current.sitename);
            const slink = x.sitelink.filter(d => d === current.sitelink);
            console.log(currData)
            console.log(slink)
            if (!currData.length && !slink.length) {
                const newData = x.sitename.push(current.sitename);
                const newLink = x.sitelink.push(current.sitelink);
                const newCurr = {
                    category: current.category,
                    sitename: newData,
                    sitelink: newLink
                }
                return acc;
            } else {
                return acc;
            }

        }
    }, []);
    let site = []
    let link = []
    let allSiteName = []
    let allSiteLink = []
   filteredArr.map(x => {
        for (var i = 0; i < x.sitename.length; i++) {
            if (x.sitename[i] !== undefined && x.sitename[i] != "" && site.indexOf(x.sitename[i]) == -1) {

                site.push(x.sitename[i]);
            }
        }
        for (var i = 0; i < x.sitelink.length; i++) {
            if (x.sitelink[i] !== undefined && x.sitelink[i] != "" && link.indexOf(x.sitelink[i] === -1)) {
                link.push(x.sitelink[i]);
            }
        }

        for (var i = 0; i < x.sitename.length; i++) {
            if (x.sitename[i] !== undefined && x.sitename[i] != "") {

                allSiteName.push(x.sitename[i]);
            }
        }
        for (var i = 0; i < x.sitelink.length; i++) {
            if (x.sitelink[i] !== undefined && x.sitelink[i] != "" ) {
                allSiteLink.push(x.sitelink[i]);
            }
        }
        const arry = x.sitename.filter(y => y)
        console.log(arry)
    })
    const handleCategory = (e, id, cat) => {
        setBookData(id)
        setSiteId(cat)
        showModal()
    }

    const handleOk = (e) => {
        setLoading(false)
        fetch(`https://intense-mesa-02860.herokuapp.com/deletebookmark?email=${email}&&category=${siteId.category}&&sitename=${bookdata}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (!data) {
                    window.location.reload(true);
                } else {
                    window.location.reload(false);
                    setLoading(false)
                }

            })
        setTimeout(function () {
            window.location.reload()
        }, 3000);


    };
    const handleEdit = (e, y, x, id) => {
        setEditCat(false)
        setSendData({ category: x.category, sitename: x.sitename.filter(str => /\S/.test(str))[id], sitelink: x.sitelink.filter(str => /\S/.test(str))[id] })
    }
    filteredArr.reverse()
    return (
        <div>
            {loading ?
                <div>

                    {addCat == '' ? <div>
                        {editCat ? <div>
                            {isBookMarkOpen == false ?
                                <div>
                                    {isOpen ?
                                        <div>
                                            <div className='d-flex flex-wrap justify-content-between align-items-center px-2 mb-3' style={{ cursor: 'pointer', width: '200px' }} onClick={(e) => handleClick()} id='add'>
                                                <h5 className='text-muted text-center' style={{ color: 'grey', fontWeight: 'bold' }}>BOOKMARK</h5>
                                                <div>
                                                    <img style={{ width: '50px' }} src={plus} alt="" />
                                                </div>
                                            </div>
                                            <div style={{ borderBottom: '3px solid lightgrey' }}>
                                            </div>
                                            <div className='d-flex flex-wrap justify-content-center justify-content-sm-start' >
                                                <div className='col-12 col-sm-3 col-md-2 col-lg-2' >
                                                    <div className="nav flex-column nav-pills me-3 pl-0 ml-0" id="v-pills-tab" role="tablist" aria-orientation="vertical" style={{ textAlign: 'center', minHeight: '70vh', minWidth: '100%', backgroundColor: '#F8EDF7', }}>
                                                        <button className="nav-link active text-center mx-auto" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true" style={{ fontWeight: "bold", color: "grey" }}>All</button>
                                                         {filteredArr.map((x, id) =>
                                                            <button key={id} className="nav-link text-center mx-auto" id={"v-pills-" + x.category.split(' ').join('_') + "-tab"} data-bs-toggle="pill" data-bs-target={"#v-pills-" + x.category.split(' ').join('_')} type="button" role="tab" aria-controls={"v-pills-" + x.category.split(' ').join('_')} aria-selected="false" style={{ fontWeight: "bold", color: "grey" }}>{x.category}</button>)}
                                                    </div>
                                                </div>
                                                <div className="tab-content text-center col-md-9 col-6" id="v-pills-tabContent">

                                                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" style={{ minHeight: '70vh', minWidth: '100%' }}>

                                                        <h5 className='text-center py-2 text-muted'>All</h5>
                                                        <div className='d-flex flex-wrap justify-content-md-start justify-content-center'>
                                                            {site.map((y, id) =>
                                                                 <a className='mx-3 px-3 py-2 text-muted mb-2 ' style={{ textDecoration: 'none', color: '#B6B9B9', border: '2px solid #CACACC', borderRadius: '30px', backgroundColor: '#ECEEEE'  }} target='_blank' href={"https://" + link[id]} >{y}</a> 

                                                            )}
                                                        </div>
                                                    </div>
                                                    {filteredArr.map((x, id) =>
                                                        <div key={id} className="tab-pane fade" id={"v-pills-" + x.category.split(' ').join('_')} role="tabpanel" aria-labelledby={"v-pills-" + x.category.split(' ').join('_') + "-tab"} style={{ minHeight: '70vh', minWidth: '100%' }}>
                                                            <div className='d-flex flex-wrap justify-content-center mx-auto'>

                                                                <div className=' col-6'>
                                                                    <h5 className='py-2 ml-auto' style={{ color: '#D98DEE', textAlign: 'end' }}>{x.category}</h5>
                                                                </div>
                                                                <div className='col-6'>
                                                                    <div style={{ textAlign: 'end' }} onClick={() => {
                                                                        setAddCat(x.category)
                                                                        setIsBookMarkOpen(true)
                                                                    }}>
                                                                        <img src={lplus} alt="" style={{ cursor: 'pointer' }} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='d-flex flex-wrap justify-content-md-start justify-content-center' style={{ listStyle: 'none', padding: '0' }}>
                                                                {x.sitename.filter(str => /\S/.test(str)).map((y, id) =>
                                                                    <div key={id} className='pl-0' onMouseEnter={() => setShowOptions(id)} onMouseLeave={() => setShowOptions(null)} >
                                                                        {showOptions == id &&
                                                                            <div className='d-flex justify-content-center'>
                                                                                <div style={{ cursor: 'pointer' }} onClick={(e) => handleEdit(e, y, x, id)}>
                                                                                    <img style={{ width: '30px' }} src={edit} alt="" />
                                                                                </div>
                                                                                <div style={{ cursor: 'pointer' }} onClick={(e) => handleCategory(e, y, x)}> <img style={{ width: '30px' }} src={del} alt="" />

                                                                                </div>
                                                                            </div>}
                                                                        <div style={{ margin: '0 auto', textAlign: 'center' }}>
                                                                            <Modal
                                                                                visible={isModalVisible}
                                                                                onOk={handleOk}
                                                                                onCancel={handleCancel}
                                                                                footer={[
                                                                                    <Button className='text-center' key="back" type="ok" onClick={handleOk}>
                                                                                        Yep
                                                                                </Button>,
                                                                                    <Button className='text-center' key="one" type="notok" onClick={handleCancel}>
                                                                                        Nah
                                                                                </Button>,
                                                                                ]}>
                                                                                <h5 style={{ color: '#ABABAB', textAlign: 'center' }} >Delete '{bookdata}' bookmark?</h5>
                                                                            </Modal>
                                                                        </div>
                                                                        <li className='mx-3 px-3 py-2 text-muted mb-2' style={{ border: '2px solid #CACACC', borderRadius: '30px', backgroundColor: '#ECEEEE' }}> <a style={{ textDecoration: 'none', color: '#B6B9B9' }} target='_blank' href={"https://" + x.sitelink.filter(str => /\S/.test(str))[id]} >{y}</a> </li>
                                                                    </div>

                                                                )}
                                                            </div>
                                                        </div>
                                                        )}

                                                </div>
                                            </div>
                                        </div>
                                        : <div className='text-center p-5'>
                                            <div className="spinner-border text-primary" role="status">
                                                {/* <span className = "sr-only">Loading...</span> */}
                                            </div>
                                        </div>}
                                </div>

                                : <BookMarkNow email={email} bookmarkdata={filteredArr} category={addCat} />}
                        </div> : <EditCategory email={email} data={sendData} />
                        }
                    </div > : <AddBookMark email={email} category={addCat} />}

                </div >
                :
                <div className='text-center p-5'>
                    <div className="spinner-border text-primary" role="status">
                        {/* <span className = "sr-only">Loading...</span> */}
                    </div>
                </div>
            }
        </div >
    );
};

export default Bookmark;