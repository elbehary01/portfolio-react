import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="bg-light pt-4 pb-6 py-md-6">
      <section className="container">
        <h2 className="text-center">Contact Me</h2>

        <div className="row my-4">
          <div className="col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
            <p className="pt-0">Feel Free to Contact Me Anytime</p>
            <p>
              <a href="mailto:ahmedelbehary0@gmail.com?subject=Contact%20Form">
                ahmedelbehary0@gmail.com{' '}
              </a>
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div className="col-md-4 col">
            <img
              className="float-right card-logo"
              src="/images/A.E..png"
              alt=""
            />
            <div className="contact-card card">
              <h4>Get in Touch</h4>
              <div className="max-w-md mx-auto"></div>
              <div className="col-12 p-1 ml-2">
                <div className="">
                  <i className="icon icon-linkedin" aria-hidden="true"></i>
                  <a
                    href="https://www.linkedin.com/in/ahmed-elbehary/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    /ahmed-elbehary/{' '}
                  </a>
                </div>

                <div>
                  <i className="icon icon-xing" aria-hidden="true"></i>
                  <a
                    href="https://www.xing.com/profile/Ahmed_Elbehary/cv"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    /ahmed-elbehary/{' '}
                  </a>
                </div>

                <div>
                  <i className="icon icon-phone" aria-hidden="true"></i>
                  <a
                    className="telephone"
                    href="https://www.linkedin.com/in/ahmed-elbehary/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +49 159 013 071 69
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
          <div className="flex">
            <h1 className="font-bold uppercase text-5xl">
              Or send me a direct message
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email*"
            />
          </div>
          <div className="my-4">
            <textarea
              placeholder="Message*"
              className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div className="my-2 w-1/2 lg:w-1/4">
            <button
              className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
