import React, {useState , useEffect} from 'react';
import "./Nav.css"
function Nav() {
const [show, handleShow] = useState(false);

const transitionNavBar = ()=> { 
    if(window.scrollY > 100){
        handleShow(true);
    }else {
        handleShow(false); 
    }
    };
    useEffect(()=> {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar); 

}, [])



 return <div cl assName = "nav">
    <div className={`nav ${show && 'nav_background'}`}>
            <div className = "nav_Contents"> 

                 <img className="nav__logo" src="https://fontmeme.com/permalink/230905/d1d84bf33267ba511f7753658033b9ed.png" alt="netflix-font" border="0"></img>
        
                <img className = "user_logo" src = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg" alt = "" border = "0"></img>
            
            </div>
    
    </div>

  </div>
  
}

export default Nav