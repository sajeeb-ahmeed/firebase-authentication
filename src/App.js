
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import EmailPassAuth from './components/email_pass_auth/EmailPassAuth';
import GoogleGithubAuth from './components/firebase_google_github_auth/GoogleGithubAuth';
import Home from './components/Home/Home';





function App() {





  return (
    <div className="App">
      {/* <GoogleGithubAuth></GoogleGithubAuth> */}
      {/* <EmailPassAuth></EmailPassAuth> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}> Home</Route>
          <Route path='/home' element={<Home></Home>}> Home</Route>
          <Route path='/login' element={<EmailPassAuth></EmailPassAuth>}></Route>
          <Route path='/signin' element={<EmailPassAuth></EmailPassAuth>}></Route>
        </Routes>
      </BrowserRouter>




    </div>
  );
}

export default App;
