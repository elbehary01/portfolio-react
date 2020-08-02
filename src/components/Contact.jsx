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

        <div className='row'>
          <div className='col-12 col-md-6'>
            <div className='contact-card'>
              <table className='table contact-details'>
                <tbody>
                  <tr>
                    <td colSpan='2'>
                      <p className='pb-1'>
                        <strong>Get in Touch</strong>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className='icon icon-home' aria-hidden='true'></i>{' '}
                    </td>
                    <td>+49 159 013 071 69 </td>
                  </tr>
                  <tr>
                    <td colSpan='2'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>
                      <i className='icon icon-linkedin' aria-hidden='true'></i>{' '}
                    </td>
                    <td>
                      <a
                        href='https://www.linkedin.com/in/ahmed-elbehary/'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        /in/ahmed-elbehary/{' '}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
