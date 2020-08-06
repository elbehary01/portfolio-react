import React from 'react';

const Navigation = () => {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg fixed-top navbar-light bg-light`}
        bg='light'
        variant='light'
      >
        <div className='container'>
          <a id='header-signature' href='https://elbehary.com/#home'>
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