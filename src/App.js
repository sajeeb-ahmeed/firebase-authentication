
import './App.css';
import app from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { useState } from 'react';

const auth = getAuth(app);



function App() {

  const [userInfo, setUserInfo] = useState({});
  console.log(userInfo);
  const { displayName, photoURL } = userInfo
  const provider = new GoogleAuthProvider()

  const handdleGoogleSingIn = () => {
    signInWithPopup(auth, provider)
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

  return (
    <div className="App">
      {
        displayName ?
          <button onClick={handdleGoogleSingOut}>Google sign Out</button>
          :
          <button onClick={handdleGoogleSingIn}>Google sign in</button>
      }

      <div>
        <img src={photoURL} alt="" />
        <h2> {displayName}</h2>
      </div>
    </div>
  );
}

export default App;
