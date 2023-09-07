import React from 'react'
import "./LoginScreen.css"

function LoginScreen() {
  return (

    < div className ="loginScreen">
    <div  className = "loginScreen__background">
        <img className="login_nav__logo" src="https://fontmeme.com/permalink/230905/d1d84bf33267ba511f7753658033b9ed.png" alt="netflix-font" border="0"></img>
        <button className = "login_sign_in">Sign In
        </button>

        <div className="loginScreenGradient"/>

            <div className = "loginScreen-Body">
                
                <h1>Unlimited movies, TV shows, and more </h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                <div className="login-Input">
                <form>
                    <input type="email" placeholder="Email Address" />
                    <button className="login_getStarted">Get Started</button>
                </form>
                </div>
             </div>

    </div>

    </div>
 


  )
}

export default LoginScreen