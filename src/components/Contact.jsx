import React from 'react';

const Contact = () => {
  return (
    <div id='contact' className='bg-light pt-4 pb-6 py-md-6'>
      <section className='container'>
        <h2 className='text-center'>Contact Me</h2>

        <div className='row my-4'>
          <div className='col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center'>
            <p className='pt-0'>
              If you've got any questions or you want to book me as a
              freelancer, shoot me an email. I'm also available for social
              engagement.
            </p>
            <p>
              <a href='mailto:ahmedelbehary0@gmail.com?subject=Contact%20Form'>
                ahmedelbehary0@gmail.com{' '}
              </a>
            </p>
          </div>
        </div>

        <div className='d-flex justify-content-center'>
          <div className='col-12 col-md-8'>
            <div className='contact-card'>
              <div className='row justify-content'>
                <div className='row col-12'>
                  <strong>Get in Touch</strong>
                  <i className='icon icon-home' aria-hidden='true'></i>{' '}
                  <a
                    href='https://www.linkedin.com/in/ahmed-elbehary/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='icon icon-linkedin' aria-hidden='true'></i>{' '}
                    /in/ahmed-elbehary/{' '}
                  </a>
                  <p>+49 159 013 071 69</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
