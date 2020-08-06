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
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis.
              vel
            </p>
            <p>
              aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            </p>
            <p>
              imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
              ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus,
              tellus eget condimentum rhoncus, sem quam semper libero, sit amet
              adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel,
              luctus.
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
