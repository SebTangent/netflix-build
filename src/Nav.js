import React, { useState, useEffect } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  const [show, handleShow] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    window.addEventListener('resize', handleResize);
    handleResize(); // Check the initial screen width
    return () => {
      window.removeEventListener('scroll', transitionNavBar);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav_background'}`}>
      <div className="nav_Contents">
        <img
          className="nav__logo"
          src="https://fontmeme.com/permalink/230905/d1d84bf33267ba511f7753658033b9ed.png"
          alt="netflix-font"
          border="0"
        />
        {isSmallScreen ? (
          // Display the "Discover" dropdown on smaller screens
          <div className="dropdown-menu">Discover</div>
        ) : (
          // Display the regular nav links on larger screens
          <div className="nav__links">
            <Link to = "/" >Home</Link>
            <Link to="/TVShows">TV Shows</Link>
            <Link to = "/Movies">Movies</Link>
            <Link to = "/New&Popular">New & Popular</Link>
            <a href="#">My List</a>
            <a href="#">Browse by Languages</a>
          </div>
        )}

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
  );
}

export default Nav;
