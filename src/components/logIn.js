import React from 'react';
import './Login.css'; // Make sure to style your Login component

function Login() {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </div>
  );
}

export default Login;
