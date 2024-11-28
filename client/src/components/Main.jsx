import React, { useState } from 'react';
import { assets } from '../assets/assets';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';

export default function Main() {
  const [birthDate, setBirthDate] = useState('1988-11-13');

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }
    return age;
  };

  return (
    <main id="main">
      <section id="first-view" className="bg-light">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-12 d-md-flex flex-column justify-content-center">
              <div id="first-view-title">
                <div id="first-view-this-is">Hi here is</div>
                <div id="first-view-name">Ahmed Elbehary</div>
                <div id="first-view-passion">Web Developer</div>
              </div>
            </div>

            <div id="first-view-picture">
              <picture>
                <img
                  src={assets.meBlackAndWhite}
                  className="img-fluid"
                  alt=""
                  width="529"
                  height="493"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="container py-4 py-md-6">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-5 d-none d-lg-block">
            <img
              src={assets.hackerMind}
              alt=""
              className="img-fluid"
              loading="lazy"
              width="445"
              height="360"
            />
          </div>
          <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-1">
            <h2>About me</h2>

            <p>
              I'm {calculateAge(birthDate)} years old and have been living in
              Berlin since 2016. Initially, I began exploring programming
              independently out of curiosity. I quickly discovered a strong
              passion for it, which led me to enroll in a one-year intensive
              training program to deepen my knowledge in a structured and guided
              manner. During this time, I gained valuable skills while
              collaborating with peers and sharing ideas, which further
              reinforced my commitment to the field. Following the program, I
              transitioned into a professional role as an IT developer, where I
              could apply and expand my expertise in real-world projects.
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
