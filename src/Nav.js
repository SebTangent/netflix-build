import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  

return <div className = "nav">
    <div className={`nav ${show && 'nav_background'}`}>
            <div className = "nav_Contents"> 

                 <img className="nav__logo" src="https://fontmeme.com/permalink/230905/d1d84bf33267ba511f7753658033b9ed.png" alt="netflix-font" border="0"></img>
                 <div className="nav__links">
                    <a href="#">Home</a>
                    <a href="#">TV Shows</a>
                    <a href="#">Movies</a>
                    <a href="#">New & Popular</a>
                    <a href="#">My List</a>
                    <a href="#">Browse by Languages</a>
                  
                </div>
        
                <div className="dropdown-menu">Discover</div>
                <div className = "dropdown-content">
                    <a href="#">Home</a>
                    <a href="#">TV Shows</a>
                    <a href="#">Movies</a>
                    <a href="#">New & Popular</a>
                    <a href="#">My List</a>
                    <a href="#">Browse by Languages</a>
                </div>


                <div className="nav__right">
                    <div className="nav__search">
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </div>

                <div className = "nav__Kids">
                    <h2>Kids</h2>
                </div>

                <div className="nav__notification">
                    <i class="fa fa-bell-o" aria-hidden="true"></i>
                </div>

                <div className="nav__avatar">
                   <img
                    className="user_logo"
                    src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg"
                    alt=""
                    border="0"

                    ></img>
                </div>
            </div>
        </div>
    </div>
  </div>
  
}

export default Nav