import React from "react";
import { useState } from "react";
import SignUp from './signup';
import './index.css'
import { Link } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setMessage("You are logged in");
    };
  
    return (
      <div className="container">
        <h2>SignUp</h2>
  
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
  
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
  
          <button type="submit">Login</button>
          <p className="switch">
          Haven't Logged in? <Link to="/signUp">SignUp</Link>
        </p>
        </form>
  
        {message && <p className="message">{message}</p>}
      </div>
    );
}
