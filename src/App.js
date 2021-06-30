import logo from './logo.svg';
import './App.css';
import { Auth } from 'aws-amplify';


function App() {

  async function checkUser() {
    const user = await Auth.currentAuthenticatedUser();
    console.log(user);
  }

  async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
  }
  return (
    <div className="App">
        <button onClick={() => Auth.federatedSignIn({ provider: "Google" })}>Sign In with Google</button>
        <button onClick={() => Auth.federatedSignIn()}>Sign In</button>
        <button onClick={checkUser}>Check User</button>
        <button onClick={signOut}>Logout</button>
    </div>
  );
}

export default App;
