import React from 'react';

const Projects = () => {
  return (
    <div id="experience" className="container py-5 py-md-6">
      <section className="features">
        <div className="container text-center">
          <h2 className="text-center head-border-center mb-4 pb-4">Projects</h2>
          <p>Some projects that I I worked on and wanted to share with you</p>
        </div>

        <div className="container-fluid pt-5 mt-5">
          <div className="row justify-content-around">
            <div className="thumbnail col-sm-5 col-md-3 mb-5">
              <a href="" target="_blank" rel="noopener noreferrer">
                <img src="" alt="Projects" className="img-fluid" />
              </a>
              <p className="text-center mt-5">Tanda Market Place</p>
            </div>

            <div className="thumbnail col-sm-5 col-md-3 mb-5">
              <a href="" target="_blank" rel="noopener noreferrer">
                <img src="" alt="Projects" className="img-fluid" />
              </a>
              <p className="text-center mt-5">Cimax App</p>
            </div>

            <div className="thumbnail col-sm-5 col-md-3 mb-5">
              <a href="" target="_blank" rel="noopener noreferrer">
                <img src="" alt="Projects" className="img-fluid" />
              </a>
              <p className="text-center mt-5">Live Chat App</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
