import React from 'react';

const Projects = () => {
  return (
    <div id='experience' className='container py-5 py-md-6'>
      <section className='features'>
        <div className='container text-center'>
          <h2 className='text-center head-border-center'>Projects</h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.</p>

          <div className="container-fluid pt-6">
            <div className="card-columns">
              <div className="col-4 offset-7 col-sm-5 offset-sm-6 col-md-10 offset-md-1 pt-md-3 mb-md-4 thumbnail ">
                  <a 
                    href='https://www.google.com'
                    target='_blank'
                    rel='noopener noreferrer'>
                
                  <img src="images/images.png" alt="LearnByEar" className="img-fluid " />
                  </a>
                  <p className="pt-4 ml-4">project one</p>
                </div>
              <div className="col-4 offset-7 col-sm-5 offset-sm-6 col-md-10 offset-md-1 pt-md-3 mb-md-4 thumbnail">
                  <a 
                    href='https://www.google.com'
                    target='_blank'
                    rel='noopener noreferrer'>
                
                  <img src="images/images.png" alt="LearnByEar" className="img-fluid" />
                  </a>
                <p className="pt-4 ml-4">project two</p>
                </div>
              <div className="col-4 offset-7 col-sm-5 offset-sm-6 col-md-10 offset-md-1 pt-md-3 mb-md-4 thumbnail">
                  <a 
                    href='https://www.google.com'
                    target='_blank'
                    rel='noopener noreferrer'>
                  <img src="images/images.png" alt="LearnByEar" className="img-fluid" />
                  </a>
                  <p className="pt-4 ml-4">project three</p>
                </div>
            </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
