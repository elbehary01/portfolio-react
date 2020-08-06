import React from 'react';

const Projects = () => {
  return (
    <div id='experience' className='container py-5 py-md-6'>
      <section className='features'>
        <div className='container text-center'>
          <h2 className='text-center head-border-center'>Projects</h2>
          <div className='row'>
            <div className='col marg'>
              <div className='hover09'>
                <div className='card-deck'>
                  <div className='card hvr-grow-shadow'>
                    <a
                      href='http://dnb.tmy.io/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <figure>
                        <img
                          className='card-img-top myimg'
                          src='/images/DNB-1.png'
                          alt='Card cap'
                        />
                      </figure>
                      <div className='card-body'>
                        <h5 className='card-title'>digital-notice-board</h5>
                      </div>
                    </a>
                  </div>
                  <div className='card hvr-grow-shadow'>
                    <a
                      href='https://superblog-qncumnlzkb.now.sh/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <figure>
                        <img
                          className='card-img-top myimg'
                          src='/images/super-blog.png'
                          alt='Card cap'
                        />
                      </figure>
                      <div className='card-body'>
                        <h5 className='card-title'>superblog</h5>
                      </div>
                    </a>
                  </div>
                  <div className='card hvr-grow-shadow'>
                    <a
                      href='#https://elbehary.com'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <figure>
                        <img
                          className='card-img-top myimg'
                          src='/images/mot.jpg'
                          alt='Card cap'
                        />
                      </figure>
                      <div className='card-body'>
                        <h5 className='card-title'>discotify</h5>
                      </div>
                      <div id='service'></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
