import React from 'react';
import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";
import firebaseconfig from '../firebaseconfig'
import facebook from '../../../fb.png';
import axios from 'axios';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseconfig);
}



const LoginWithFacebook = () => {
    const facebookLogin = () => {
        const providerFb = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(providerFb).then(function (result) {
            var token = result.credential.accessToken;
            const { displayName, photoURL, emailVerified, b } = result.user;
            const signedInWithFb = { name: displayName, email: emailVerified, photoURL: photoURL, id: b.a }
            axios.post('http://localhost:5000/users', signedInWithFb)
                .then(response => console.log(response))

            localStorage.setItem('loggedIn', b.a)
            // setTimeout(function () { window.location.reload() }, 2000);
            console.log(result.user);
            // history.replace(from)

        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
            var email = error.email;
            var credential = error.credential;
            // ...
        });
    }

    return (
        <div className='d-flex justify-content-center my-3'>
            <button className='d-flex flex-wrap' style={{ border: '2px solid #A0A1A1', width: '350px', height: '50px', borderRadius: '30px', display: 'flex', backgroundColor: 'white' }} onClick={facebookLogin}>
                <div className='col-2'>
                    <img style={{ width: '30px', height: '30px' }} className='mt-2' src={facebook} alt="" />
                </div>
                <p className='pt-2' style={{ color: '#ABABAB' }}>Login with Facebook</p>
            </button>
        </div>
    );
};

export default LoginWithFacebook;