import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../../firebase.init';




const auth = getAuth(app);



// public function 
const GoogleGithubAuth = () => {



    const [userInfo, setUserInfo] = useState({});
    console.log(userInfo);
    const { displayName, photoURL } = userInfo
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

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

    // handle Facebook Provider
    const handleFacebookProvider = () => {
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                const getFbUser = result.user;
                setUserInfo(getFbUser)
                console.log(getFbUser);

            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className='my-5 text-center'>
            {
                displayName ?
                    <button className='btn btn-outline-info mb-3' onClick={handdleGoogleSingOut}> Sign Out</button>
                    :
                    <>
                        <button className='btn btn-outline-info ' onClick={handdleGoogleSingIn}>Google sign in</button>
                        <button className='btn btn-outline-info m-4' onClick={handleFacebookProvider}> Facebook sign in</button>
                        <button className='btn btn-outline-info ' onClick={handleGithubProvider}> Github sign in</button>
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