import React from 'react';

const Services = () => {
  return (
    <div id='services' className='bg-light pt-5 pb-4 py-md-6'>
      <section className='container'>
        <div className='about-back'>
          <h2 className='text-center'>My Service</h2>
          <div className='row my-5 mb-md-6'>
            <div className='col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center'>
              aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum
            </div>
          </div>
          <div className='services row'>
            <div className='col-12 col-md-6 col-lg-3'>
              <div className='service'>
                <i
                  className='icon icon-browser-layout service-icon'
                  aria-hidden='true'
                ></i>
                <div className='service-name'>Responsive</div>
                <div className='service-description'>
                  <p> My layouts will work on any device, big and small.</p>
                  <p>HTML, CSS, SASS</p>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-3'>
              <div className='service'>
                <i className='icon icon-browser-layout service-icon'></i>
                <div className='service-name'>Fast</div>
                <div className='service-description'>
                  <p>
                    Fast load times and lag free interaction, my highest
                    priority.
                  </p>
                  <p>JavaScript, React</p>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-3'>
              <div className='service'>
                <i
                  className='icon icon-browser-layout service-icon'
                  aria-hidden='true'
                ></i>
                <div className='service-name'>Dynamic</div>
                <div className='service-description'>
                  <p>Websites don't have to be static, I love making pages.</p>
                  <p>Components Base</p>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-3'>
              <div className='service'>
                <i className='icon icon-browser-layout service-icon'></i>
                <div className='service-name'>Social</div>
                <div className='service-description'>
                  <p>I am an active guy and I like to work together</p>
                  <p>Communication Skills</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
