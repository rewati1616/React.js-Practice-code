import React from "react";
import "./Auth.css";

const Signup = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Create Account 🚀</h1>
        <p>Join JobHub and find your dream job</p>

        <form>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />

          <button type="submit">Sign Up</button>
        </form>

        <p className="auth-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;