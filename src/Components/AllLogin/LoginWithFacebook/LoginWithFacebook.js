import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";
import firebaseconfig from '../firebaseconfig'
import facebook from '../../../fb.png';
import axios from 'axios';
import { useHistory, useLocation } from 'react-router';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseconfig);
}

const LoginWithFacebook = () => {
    const location = useLocation()
    const history = useHistory()
    const { from } = location.state || { from: { pathname: `/home` } };
    const [user, setUser] = useState([])
    useEffect(() => {

        fetch('https://intense-mesa-02860.herokuapp.com/data')
            .then(res => res.json())
            .then(data => {
                setUser(data)
            })
    }, [])
    const facebookLogin = () => {

        const providerFb = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(providerFb).then(function (result) {

            let randomToken;
            randomToken = uuidv4()
            var token = result.credential.accessToken;
            const { displayName, photoURL, email, b } = result.user;
            const signedInWithFb = { name: displayName, email: email, photoURL: photoURL, id: randomToken, type: 'gf' }
            user.map(x => {
            if (x.email == signedInWithFb.email || x.name == signedInWithFb.name) {
                history.replace(from)
                localStorage.setItem('loggedIn', x.id)
            } else {
                axios.post('https://intense-mesa-02860.herokuapp.com/users', signedInWithFb)
                    .then(response => {
                        if (response) {
                            history.replace(from)
                            localStorage.setItem('loggedIn', signedInWithFb.id)
                        }
                    })
            }
        })

        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
    }

    return (
        <div className='my-3 col-12 col-sm-8 col-lg-8 mx-auto'>
            <button className='d-flex flex-wrap col-12' style={{ border: '2px solid #A0A1A1', borderRadius: '30px', backgroundColor: 'white' }} onClick={facebookLogin}>
                <div className='col-2'>
                    <img style={{ width: '30px', height: '30px' }} className='mt-2' src={facebook} alt="" />
                </div>
                <p className='pt-2' style={{ color: '#ABABAB' }}>Login with Facebook</p>
            </button>
        </div>
    );
};

export default LoginWithFacebook;