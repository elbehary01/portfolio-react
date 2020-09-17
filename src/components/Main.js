import React from 'react';
import myImage from './me-blackaNwhite.png';
import hacker from './hacker-mind.svg';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';


export default function Main() {
  return (
    <main id='main'>
      <section id='first-view' className='bg-light'>
        <div className='container h-100'>
          <div className='row h-100'>
            <div className='col-12 d-md-flex flex-column justify-content-center'>
              <div id='first-view-title'>
                <div id='first-view-this-is'>Hi this is</div>
                <div id='first-view-name'>Ahmed El-behary</div>
                <div id='first-view-passion'>Web Developer</div>
              </div>
            </div>

            <div id='first-view-picture'>
              <picture>
                {/* <source
                  srcSet='images/me-blackaNwhite.png'
                  media='(min-width: 1200px)'
                />
                <source
                  srcSet='/public/images/me-blackaNwhite.png'
                  media='(min-width: 992px)'
                />
                <source
                  srcSet='/public/images/me-blackaNwhite.png'
                  media='(min-width: 768px)'
                />
                <source
                  srcSet='/public/images/me-blackaNwhite.png'
                  media='(min-width: 1px)'
                /> */}
                <img
                  src={myImage}
                  className='img-fluid'
                  alt=''
                  width='529'
                  height='493'
                  loading='lazy'
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
      <section id='about' className='container py-4 py-md-6'>
        <div className='row'>
          <div className='col-12 col-md-4 col-lg-5 d-none d-lg-block'>
            <img
              src={hacker}
              alt=''
              className='img-fluid'
              loading='lazy'
              width='445'
              height='360'
            />
          </div>
          <div className='col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-1'>
            <h2>About me</h2>

            <p>
              I'm 32 years old from Egypt and I am living in Berlin since 2014. I am 31
              years old. Out of interest I started learning programming by
              myself. I liked it very much,
            </p>
            <p>
              so I decided to join a one year intensive course to learn from
              good teachers and in a more structured way. Besides that, learning
              in a team, sharing ideas and having fun is a big plus for me.
            </p>
          </div>
        </div>
      </section>
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}
