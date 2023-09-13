import React, {useRef} from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase1";
import "./SignupScreen.css";


function SignupScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
    };

    const signIn = (e) => {
        e.preventDefault();
        // signIn logic here
    };

  return (
    <div className="SignupScreen">
      <form>
         <h1 className = "SignIn_Header">Sign in </h1>
        <input  ref = {emailRef} placeholder="Email" type="email"/>
        <input  ref = {passwordRef} placeholder="Password" type="password"/>
        <button className= "SignIn" buttontype ="submit" onClick = {signIn}>Sign In</button>
        <h4> <span className ="signupScreen__gray"> New to Netflix? </span> 
        <span className = "singnupScreen__link" onClick={register}>Sign Up now.</span></h4>
        
      </form>
    </div>
  );
}

export default SignupScreen;
