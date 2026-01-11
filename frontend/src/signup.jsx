import { useState } from "react";
import { Link } from "react-router-dom"
import axios from 'axios'

function SignUp() {
  const [name, setName] = useState ("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('',name, email,password)
    .then(result=>console.log(result))
    .catch(err=>console.log(err))
  };

  return (
    <div className="container">
      <h2>SignUp</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

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

        <button type="submit">SignUp</button>
        <p className="switch">
        Already have an account? <Link to="/login">Login</Link>
      </p>
      </form>
    </div>
  );
}

export default SignUp;
