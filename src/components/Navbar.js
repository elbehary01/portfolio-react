import React, { useState, useEffect } from 'react';


const Navigation = () => {
  const [scrolling, setScrolling] = useState("");
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg fixed-top navbar-light bg-light ${
          scrollTop ? 'bg-scrolled' : scrolling
        }`}
        bg='light'
        variant='light'
      >
        <div className='container'>
          <a id='header-signature' href='https://elbehary.com'>
            A.E.
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#main-navigation'
            aria-controls='main-navigation'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='main-navigation'>
            <ul className='navbar-nav nav ml-auto'>
              <li className='nav-item'>
                <a href='#home' className='nav-link active'>
                  Home
                </a>
              </li>
              <li className='nav-item'>            
                  <a href='#about' className='nav-link'>
                    About me
                  </a>
                
              </li>
              <li className='nav-item'>
                <a href='#services' className='nav-link'>
                  Services
                </a>
              </li>
              <li className='nav-item'>
                <a href='#experience' className='nav-link'>
                  Experience
                </a>
              </li>
              <li className='nav-item'>
                <a href='#contact' className='nav-link'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
