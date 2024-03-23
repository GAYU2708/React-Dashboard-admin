
import React, { useState } from 'react';
import './login.css';


export default function Login({onLogin}) {


  const [username,setUserName]= useState('');
  const [password,setPassword] = useState('');

  const handleSubmit =(e) => {
    e.preventDefault();
    onLogin({username,password});
  }

  return (<>
    <div className="login-container">
      
  <h1>RHYTHM ADMIN PAGE</h1>
      <form className="login-form" onSubmit={handleSubmit}> 
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input type="password" 
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
    </>
  );
}
