import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../../firebase.init';




const auth = getAuth(app);


const GoogleGithubAuth = () => {
    const [userInfo, setUserInfo] = useState({});
    console.log(userInfo);
    const { displayName, photoURL } = userInfo
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // google provider 
    const handdleGoogleSingIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUserInfo(user)
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handdleGoogleSingOut = () => {
        signOut(auth)
            .then(() => {
                setUserInfo({})
            })
            .catch(error => {
                console.log(error);
            })
    }

    // github provider 

    const handleGithubProvider = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const gitUser = result.user;
                setUserInfo(gitUser);
                console.log(gitUser);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='my-4 text-center'>
            {
                displayName ?
                    <button className='btn btn-outline-info' onClick={handdleGoogleSingOut}> Sign Out</button>
                    :
                    <>
                        <button className='btn btn-outline-info me-3' onClick={handdleGoogleSingIn}>Google sign in</button>
                        <button className='btn btn-outline-info' onClick={handleGithubProvider}> Github login</button>
                    </>
            }

            <div>
                <img src={photoURL} alt="" />
                <h2> {displayName}</h2>
            </div>
        </div>
    );
};

export default GoogleGithubAuth;