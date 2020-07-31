import React from 'react';
import myImage from './me-blackaNwhite.png';
import hacker from './hacker-mind.svg';
import Services from './Services';

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
              I'm 31 years old, happy to be a professional web developer for the
              last 16 of those years and had the chance to work in many
              different projects and environments already.
            </p>

            <p>
              In all those years I learned more than just programming and
              languages. I learned how to grow my career, built great
              development teams and lead people to success.
            </p>

            <p>
              I started teaching programming to kids, teenagers and adults in
              2003 and had the chance to let it become my profession for 1 1/2
              years in 2017. In 2019 I started to work as a developer again, but
              I still love to do workshops and events for the Hacker School .
            </p>

            <p>
              I've already used many different technologies, but building great
              products doesn't rely on choices of the tech stack. I might use{' '}
              Vue.js in one project and React in the next one, as a good
              developer will always be able to learn new tools and choose the
              right ones for different use cases. I use PHP the most, but I've
              also done some Python in the past.
            </p>
          </div>
        </div>
      </section>
      <Services />
    </main>
  );
}
