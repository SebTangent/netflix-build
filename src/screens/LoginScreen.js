import React, { useState } from 'react';
import './LoginScreen.css';
import SignupScreen from "./SignupScreen.js"

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="login_nav__logo"
          src="https://fontmeme.com/permalink/230905/d1d84bf33267ba511f7753658033b9ed.png"
          alt="Netflix logo"
          border="0"
        />
        <button onClick={() => setSignIn(true)} className="login_sign_in">
          Sign In
        </button>
        <div className="loginScreenGradient" />
        <div className="loginScreen-Body">
          {signIn ? (
            <SignupScreen />
          ) : (
            <>
              <h1>Unlimited movies, TV shows, and more</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
              <div className="login-Input">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button
                    onClick={() => setSignIn(true)}
                    className="login_getStarted"
                  >
                    Get Started &gt;
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
