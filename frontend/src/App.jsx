import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import axios from 'axios'
import './App.css'

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const URL = 'http://127.0.0.1:8080/';

  useEffect(() => {
    axios
      .get(URL)
      .then(() => {console.log('Connected!')})
      .catch(error => console.log(error));
  }, []);

  if (!isLoggedIn){
    return(
      <>
        <button>Register</button>
        <button>Log-In</button>
      </>
    );
  }

  return(
    <>
    </>
  );
}

export default App
