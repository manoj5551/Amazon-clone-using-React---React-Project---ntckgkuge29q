import React from 'react'
import "./css/signin.css"
function Signin() {
  return (
    <div className="login">

      <div className="login__container">
        <h1>Sign-in</h1>

        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"       
          />

          <h5>Password</h5>
          <input
            type="password"       
          />

          <button
            type="submit"
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON-CLONE Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button  className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Signin
