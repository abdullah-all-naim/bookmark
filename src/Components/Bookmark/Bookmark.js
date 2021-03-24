import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BookMarkNow from '../BookMarkNow/BookMarkNow';
import './Bookmark.css';
const Bookmark = ({ email }) => {
    // const getUser = localStorage.getItem('loggedIn')
    const usermail = email
    console.log(usermail)
    const [isBookMarkOpen, setIsBookMarkOpen] = useState(false)
    const [bookdata, setBookData] = useState([])
    const [showBookdata, setShowBookData] = useState([])
    const handleClick = (e) => {
        if (isBookMarkOpen == false) {
            setIsBookMarkOpen(true)
            document.getElementById('add').style.border = '3px solid #C64CE9'
            document.getElementById('add').style.borderRadius = '30px'
            document.getElementById('add').style.padding = '0 8px'
            document.getElementById('add').style.marginBottom = '10px'
            document.getElementById('add').style.width = '200px'
            document.getElementById('add').style.height = '60px'
        }
        if (isBookMarkOpen == true) {
            setIsBookMarkOpen(false)
        }

        // document.getElementById('add').style.borderBotto = '260px'
    }
    useEffect(() => {
        axios.get('http://localhost:5000/bookmarkinfo')
            .then((response) => response.data)
            .then(data => {

                setBookData(data)
            })
    }, [])
    let showData = []
    bookdata.map(x => {
        // console.log(x)
        if (x.email == email) {
            showData.push(x)
        }
    })
    // console.log(showData)
    let seen = {};
    showData = showData.filter(function (entry) {
        let previous;

        // Have we seen this label before?
        if (seen.hasOwnProperty(entry.category)) {
            // Yes, grab it and add this data to it
            previous = seen[entry.category];
            // console.log(previous)
            previous.sitelink.push(entry.sitelink);
            previous.sitename.push(entry.sitename);

            console.log(previous)
            // Don't keep this entry, we've merged it into the previous one
            return false;
        }

        // entry.data probably isn't an array; make it one for consistency
        if (!Array.isArray(entry.sitelink)) {
            entry.sitelink = [entry.sitelink];

        }
        if (!Array.isArray(entry.sitename)) {
            // if(entry.sitename.indexOf(entry.sitename) == -1) {
            entry.sitename = [entry.sitename];
            // }


        }


        // Remember that we've seen it
        seen[entry.category] = entry;
        // console.log(previous)

        // Keep this one, we'll merge any others that match into it
        return true;
    });
    // console.log(showData)

    showData.map(y => {
        if (y.category == 'Study') {
            console.log(y.sitelink)
        }

    })

    var myArray = [
        {productId: 116605, productserialno: "324234"},
        {productId: 106290, productserialno: "12121"},
        {productId: 106290, productserialno: "12121"},
        {productId: 106293, productserialno: "4324343"}
    ];
    
    var grouped = showData.reduce(function (obj, product) {
        obj[product.category] = obj[product.category] || [];
        obj[product.category].push(product.sitename);
        obj[product.category].push(product.sitelink);
        return obj;
    }, {});
    
    var groups = Object.keys(grouped).map(function (key) {
        return {product: key, productserialno: grouped[key]};
    })
    console.log(groups);
    return (
        <div>
            <div className='d-flex flex-wrap align-items-center' style={{ cursor: 'pointer', width : '200px' }} onClick={(e) => handleClick()} id='add'>
                <h5 className='text-muted text-center'>BOOKMARK</h5>
                <h1 className='ml-3 pb-2 px-3 text-center'>+</h1>
            </div>
            <div style={{ borderBottom: '3px solid lightgrey' }}>
            </div>
            { isBookMarkOpen == false ? 
            <div className='d-flex flex-wrap' >
                {/* <div className="pb-3" style={{ borderRight: '1px solid lightgrey', backgroundColor: '#F8EDF7' }}> */}
                {/* <div className="col-1" style={{ backgroundColor: '#F8EDF7', height : '100%' }}> */}
                    <div className="nav flex-column nav-pills me-3 mr-3 px-4 col-1" id="v-pills-tab" role="tablist" aria-orientation="vertical" style={{ textAlign: 'center', minHeight : '70vh',backgroundColor: '#F8EDF7', float: 'left'}}>
                        <button className="nav-link active text-center" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true" style={{ fontWeight: "bold", color: "grey" }}>All</button>
                        {showData.map(x => <button className="nav-link" id={"v-pills-" + x.category + "-tab"} data-bs-toggle="pill" data-bs-target={"#v-pills-" + x.category} type="button" role="tab" aria-controls={"v-pills-" + x.category} aria-selected="false" style={{ fontWeight: "bold", color: "grey" }}>{x.category}</button>)}
                    </div>
                {/* </div> */}
                {/* </div> */}
                {/* <div className='col-10'> */}
                    <div className="tab-content text-center col-10" id="v-pills-tabContent">

                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                            <h5 className='text-center py-2 text-muted'>All</h5>

                            {showData.map(x =>
                                <div className='d-flex flex-wrap justify-content-start'>
                                    {x.sitename.map((y, id) =>
                                        <div className='mx-3 px-3 py-2 text-muted mb-2 col-1' style={{ border: '2px solid #CACACC', borderRadius: '30px', backgroundColor: '#ECEEEE' }}> <a style={{ textDecoration: 'none', color: '#B6B9B9' }} target='_blank' href={"https://" + x.sitelink[id]} >{y}</a> </div>

                                    )}
                                </div>)}
                        </div>
                        {showData.map(x => <div className="tab-pane fade" id={"v-pills-" + x.category} role="tabpanel" aria-labelledby={"v-pills-" + x.category + "-tab"}>
                            <h5 className='text-center py-2 text-muted'>{x.category}</h5>
                            <ul className='d-flex' style={{ listStyle: 'none' }}>
                                {x.sitename.map((y, id) =>
                                    <li className='mx-3 px-3 py-2 text-muted' style={{ border: '2px solid #CACACC', borderRadius: '30px', backgroundColor: '#ECEEEE' }}> <a style={{ textDecoration: 'none', color: '#B6B9B9' }} target='_blank' href={"https://" + x.sitelink[id]} >{y}</a> </li>

                                )}
                            </ul> </div>)}
                    </div>
                {/* </div> */}
            </div> : <BookMarkNow email={email} bookmarkdata={showData} />}

        </div>
    );
};

export default Bookmark;