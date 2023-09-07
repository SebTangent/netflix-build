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

  useEffect(() => {
    // Function to toggle the dropdown menu
    function toggleDropdown() {
      const dropdownContent = document.querySelector('.dropdown-content');
      dropdownContent.classList.toggle('show-dropdown');
    }

    // Add an event listener for the dropdown button
    const dropdownButton = document.querySelector('.dropdown-button');
    if (dropdownButton) {
      dropdownButton.addEventListener('click', toggleDropdown);
    }

    // Add a media query to check window width
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    function handleMediaQueryChange(e) {
      if (e.matches) {
        // Display the dropdown button and hide the nav links
        if (dropdownButton) {
          dropdownButton.style.display = 'block';
        }
        const navLinks = document.querySelector('.nav__links');
        if (navLinks) {
          navLinks.style.display = 'none';
        }
      } else {
        // Display the nav links and hide the dropdown button
        const navLinks = document.querySelector('.nav__links');
        if (navLinks) {
          navLinks.style.display = 'flex';
        }
        if (dropdownButton) {
          dropdownButton.style.display = 'none';
        }
      }
    }

    // Initial check of the media query on page load
    handleMediaQueryChange(mediaQuery);

    // Listen for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);
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