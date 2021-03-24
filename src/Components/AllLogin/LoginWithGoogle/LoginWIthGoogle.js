import React from 'react';
import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";
import firebaseconfig from '../firebaseconfig'
import google from '../../../Google.png'
import axios from 'axios';
import { useHistory } from 'react-router';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseconfig);
}

const LoginWIthGoogle = () => {
    const history = useHistory()
    const googleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            var token = result.credential.accessToken;
            const { displayName, photoURL, email, emailVerified, b } = result.user;
            console.log(result.user)
            const signedInUser = { name: displayName, email: email, photoURL: photoURL, id: b.a }
            
            axios.post('http://localhost:5000/users', signedInUser)
                .then(response => console.log(response))
history.push('/home')
            localStorage.setItem('loggedIn', b.a)
            // setTimeout(function () { window.location.reload() }, 2000);

        }).catch(function (error) {
            console.log(error)
        });
    }
    return (
        <div className='d-flex justify-content-center my-3'>
            <button className='d-flex flex-wrap' style={{ border:'2px solid #A0A1A1', width: '350px', height: '50px', borderRadius: '30px', display: 'flex', backgroundColor: 'white' }} onClick={googleLogin}>
                <div className= 'col-2'>
                    <img style={{ width: '30px', height: '30px' }} className='mt-2' src={google} alt="" />
                </div>
                <p className='pt-2' style={{color: '#ABABAB'}}>Login with Google</p>
            </button>
        </div>
    );
};

export default LoginWIthGoogle;