
import './App.css';
import EmailPassAuth from './components/email_pass_auth/EmailPassAuth';
import GoogleGithubAuth from './components/firebase_google_github_auth/GoogleGithubAuth';





function App() {





  return (
    <div className="App">
      <GoogleGithubAuth></GoogleGithubAuth>
      <EmailPassAuth></EmailPassAuth>


    </div>
  );
}

export default App;
