import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";
import firebaseconfig from '../firebaseconfig'
import google from '../../../Google.png'
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useHistory, useLocation } from 'react-router';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseconfig);
}

const LoginWIthGoogle = () => {
    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: `/home` } };
    const [user, setUser] = useState([])
    useEffect(() => {

        fetch('https://intense-mesa-02860.herokuapp.com/data')
            .then(res => res.json())
            .then(data => {
                setUser(data)
            })
    }, [])
    const googleLogin = () => {
        console.log('hello')

        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            let randomToken;
            randomToken = uuidv4()
            var token = result.credential.accessToken;
            const { displayName, photoURL, email, emailVerified, b } = result.user;
            const signedInUser = { name: displayName, email: email, photoURL: photoURL, id: randomToken, type: 'gf' }

            user.map(x => {
                if (x.email == signedInUser.email) {
                    history.replace(from)
                    localStorage.setItem('loggedIn', x.id)
                } else {
                    axios.post('https://intense-mesa-02860.herokuapp.com/users', signedInUser)
                        .then(response => {
                            if (response) {
                                history.replace(from)
                                localStorage.setItem('loggedIn', signedInUser.id)
                            }
                        })
                    

                }
            })


        }).catch(function (error) {
            console.log(error)
        });
    }

    return (
        <div className='col-12 col-sm-8 col-lg-8 mx-auto' >
            <button className='d-flex flex-wrap col-12' onClick={googleLogin} style={{ border: '2px solid #A0A1A1', borderRadius: '30px', backgroundColor: 'white' }} >
                <div className='col-2'>
                    <img style={{ width: '30px', height: '30px', color: 'lightgrey' }} className='mt-2' src={google} alt="" />
                </div>
                <p className='pt-2' style={{ color: '#ABABAB' }}>Login with Google</p>
            </button>
        </div>
    );
};

export default LoginWIthGoogle;