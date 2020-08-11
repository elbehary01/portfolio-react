import React from 'react';

const Projects = () => {
  return (
    <div id='experience' className='container py-5 py-md-6'>
      <section className='features'>
        
        <div className='container text-center'>
          <h2 className='text-center head-border-center mb-4 pb-4'>Projects</h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.</p>
        
        </div>

          <div className="container-fluid pt-5 mt-5">
            <div className="row justify-content-around">
              <div className="thumbnail col-12 col-sm-5 col-md-2 mb-5">
                  <a 
                    href='https://www.google.com'
                    target='_blank'
                    rel='noopener noreferrer'>
                
                  <img src="images/images.png" alt="Projects" className="img-fluid" />
                  </a>
                  <p className="text-center pt-3">project one</p>
                </div>
              <div className="thumbnail col-12 col-sm-5 col-md-2 mb-5">
                  <a 
                    href='https://www.google.com'
                    target='_blank'
                    rel='noopener noreferrer'>
                
                  <img src="images/images.png" alt="Projects" className="img-fluid" />
                  </a>
                <p className="text-center pt-3">project two</p>
                </div>
              <div className="thumbnail col-12 col-sm-5 col-md-2 mb-5">
                  <a 
                    href='https://www.google.com'
                    target='_blank'
                    rel='noopener noreferrer'>
                  <img src="images/images.png" alt="Projects" className="img-fluid" />
                  </a>
                <p className="text-center pt-3">project three</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
