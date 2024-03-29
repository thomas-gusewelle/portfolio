import Head from "next/head";
import Link from "next/link";
import Navbar from "./components/navbar";
import AnimatedDiv from "./components/animated_div";
import { useState, useEffect } from "react";

import { motion, useAnimation } from "framer-motion";

import { FiChevronRight, FiMail } from "react-icons/fi";
import { FaExternalLinkAlt, FaUsersSlash } from "react-icons/fa";
import { FaGithub, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import TechnologiesSlider from "./components/technologies";

export default function Home() {
  const iconSize = 25;
  //hero section animation staes

  //form states
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [message, setMessage] = useState(null);
  const [isEmailError, setIsEmailError] = useState({
    error: false,
    message: "",
  });
  const [isNameError, setIsNameError] = useState({ error: false, message: "" });
  const [isMessageError, setIsMessageError] = useState({
    error: false,
    message: "",
  });

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "applications/json",
      },
      body: JSON.stringify({ name, email, message }),
    });
  };

  return (
    <div>
      <Head>
        <title>Thomas Gusewelle</title>
        <meta
          name='description'
          content="Thomas Gusewelle's Developer Portfolio"
        />
        <meta name='viewport' content='width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='nav-wrapper'>
        <Navbar />

        <div className='hero relative'>
          <div className='z-10'>
            <div className='hero-min-height container'>
              <div className='z-10'>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 1 } }}>
                  <h2 className='hero-introduction'>Hi, my name is</h2>

                  <h1 className='name-header'>Thomas Gusewelle</h1>

                  <p className='w-prose'>
                    I&apos;m a developer focusing on creating beautiful and
                    engaging experiences on the web and mobile.
                  </p>

                  <button className='contact-btn'>
                    <a id='hero-contact-btn' href='#contact-section'>
                      Contact Me
                    </a>
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
          <svg
            className='svg1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1440 320'>
            <path
              fill='currentColor'
              d='M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'></path>
          </svg>
          <svg
            className='svg2'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1440 320'>
            <path
              fill='currentColor'
              d='M0,192L48,208C96,224,192,256,288,256C384,256,480,224,576,224C672,224,768,256,864,266.7C960,277,1056,267,1152,229.3C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'></path>
          </svg>
        </div>

        <div className='section accent-bg' id={"about-section"}>
          <AnimatedDiv classname='container'>
            <h3 className='section-header'>About Me</h3>
            <div className='text-img'>
              <div>
                <p>
                  Hi! I&apos;m Thomas and I have a passion for creating
                  beautiful web and mobile experiences that engage users in
                  intuative ways. My passion for technology started when I was a
                  kid and would take apart old computers with a crazy idea to
                  turn them into a robot (if only it was that easy) and grew
                  into programming and tinkering with different linux operating
                  systems.
                </p>

                <br />

                <p>
                  From there my life took a different path, earning a Bachelors
                  and Masters Degree in Music Performance from Louisiana State
                  University(LSU) and the University of North Texas(UNT). While
                  in school at UNT I started my current job as Director of Media
                  where my passion for technology was reivigorated leading me to
                  study software developent at the masters level while also
                  seeking a career as a Front-End/Fullstack Developer.
                </p>

                {/* <div className="tech-container">
                <h3 className="section-subheader">
                  Technologies I've Recently Used
                </h3>
                <div className="tech-grid-2">
                  <div className="tech-item">
                    <FiChevronRight className="tech-icon" />
                    <p>Javascript</p>
                  </div>
                  <div className="tech-item">
                    <FiChevronRight className="tech-icon" />
                    <p>NextJS</p>
                  </div>
                  <div className="tech-item">
                    <FiChevronRight className="tech-icon" />
                    <p>React</p>
                  </div>
                  <div className="tech-item">
                    <FiChevronRight className="tech-icon" />
                    <p>Flutter</p>
                  </div>
                  <div className="tech-item">
                    <FiChevronRight className="tech-icon" />
                    <p>Framer Motion</p>
                  </div>
                  <div className="tech-item">
                    <FiChevronRight className="tech-icon" />
                    <p>Webflow</p>
                  </div>
                </div>
              </div> */}
              </div>
              <div className='profile-img-container'>
                <img src='/images/profile.jpeg' className='profile-img'></img>
              </div>
            </div>
          </AnimatedDiv>
        </div>

        <TechnologiesSlider />

        <div className='section' id='project-section'>
          <div className='container'>
            <AnimatedDiv>
              <h3 className='section-header'>Projects</h3>
            </AnimatedDiv>
            <div className='project-grid'>
              <AnimatedDiv classname={"project-container"}>
                <div className='project-card card-right'>
                  <p className='highlight'>Featured Project</p>
                  <Link href='https://www.eventlite.org'>
                    <h3 className='project-title cursor-pointer'>
                      EventLite.org
                    </h3>
                  </Link>
                  <p className=''>
                    EventLite is an web app for scheduling and managing
                    volunteers. EventLite is a full-stack app built on the T3
                    Stack (NextJS, Tailwind CSS, Prisma, and TRPC). EventLite
                    also utilizes Supabase for authentication and a Postgres
                    instance, Sendgrid for emails, and Framer Motion for
                    animations.
                  </p>
                  <div className='tech-container'>
                    <p className='highlight mb-1'>Technologies Used</p>
                    <div className='tech-grid-2'>
                      <div className='tech-item'>
                        <FiChevronRight className='tech-icon' />
                        <p>NextJS</p>
                      </div>
                      <div className='tech-item'>
                        <FiChevronRight className='tech-icon' />
                        <p>Prisma</p>
                      </div>
                      <div className='tech-item'>
                        <FiChevronRight className='tech-icon' />
                        <p>TRPC</p>
                      </div>
                      <div className='tech-item'>
                        <FiChevronRight className='tech-icon' />
                        <p>Tailwind CSS</p>
                      </div>
                      <div className='tech-item'>
                        <FiChevronRight className='tech-icon' />
                        <p>Sendgrid</p>
                      </div>
                      <div className='tech-item'>
                        <FiChevronRight className='tech-icon' />
                        <p>Supabase</p>
                      </div>
                      <div className='tech-item'>
                        <FiChevronRight className='tech-icon' />
                        <p>Mailing.run</p>
                      </div>
                      <div className='tech-item'>
                        <FiChevronRight className='tech-icon' />
                        <p>Vercel</p>
                      </div>
                      <div className='tech-item'>
                        <FiChevronRight className='tech-icon' />
                        <p>Framer</p>
                      </div>
                    </div>
                  </div>
                  <div className='icons-container'>
                    <Link
                      href={
                        "https://github.com/thomas-gusewelle/eventlite.org"
                      }>
                      <FaGithub size={iconSize} className='icon' />
                    </Link>
                    <Link href={"https://eventlite.org"}>
                      <FaExternalLinkAlt size={iconSize} className='icon' />
                    </Link>
                  </div>
                </div>
              </AnimatedDiv>

              <AnimatedDiv classname={"project-container"}>
                <div className='project-card card-right'>
                  <p className='highlight'>Featured Project</p>

                  <Link href='https://www.lossize.com'>
                    <h3 className='project-title cursor-pointer'>
                      Lossize.com
                    </h3>
                  </Link>
                  <p className=''>
                    A web app designed to allow people to simply and easily
                    track their weight loss journey. Set goals, input your
                    weight, and have it graphed out for you to track your daily
                    progress.
                  </p>
                  <div className='tech-container'>
                    <p className='highlight mb-1'>Technologies Used</p>
                    <div className='tech-grid-2'>
                      <div className='tech-item'>
                        <FiChevronRight className='tech-icon' />
                        <p>NextJS</p>
                      </div>
                      <div className='tech-item'>
                        <FiChevronRight className='tech-icon' />
                        <p>TailwindCSS</p>
                      </div>
                      <div className='tech-item'>
                        <FiChevronRight className='tech-icon' />
                        <p>Supabase</p>
                      </div>
                      <div className='tech-item'>
                        <FiChevronRight className='tech-icon' />
                        <p>Vercel</p>
                      </div>
                      <div className='tech-item'>
                        <FiChevronRight className='tech-icon' />
                        <p>Framer</p>
                      </div>
                      <div className='tech-item'>
                        <FiChevronRight className='tech-icon' />
                        <p>Material UI</p>
                      </div>
                    </div>
                  </div>
                  <div className='icons-container'>
                    <Link
                      href={
                        "https://github.com/thomas-gusewelle/wieght-tracking"
                      }>
                      <FaGithub size={iconSize} className='icon' />
                    </Link>
                    <Link href={"https://www.lossize.com"}>
                      <FaExternalLinkAlt size={iconSize} className='icon' />
                    </Link>
                  </div>
                </div>
              </AnimatedDiv>

              <AnimatedDiv classname={"project-container"}>
                <div className='project-card card-left'>
                  <p className='highlight'>Featured Project</p>
                  <Link href='https://www.gkwmedia.com/themelios'>
                    <h3 className='project-title cursor-pointer'>
                      Themelios Mobile App
                    </h3>
                  </Link>
                  <p className=''>
                    A platform built for churchs to leverage modern, responsive
                    web design while also hvaing all of their web data sync with
                    a custom mobile app. App features include: adding events to
                    device calendar, in-app emailing, and a complete bible
                    reader.
                  </p>
                  <div className='tech-container'>
                    <p className='highlight mb-1'>Technologies Used</p>
                    <div className='tech-grid-2'>
                      <div className='tech-item'>
                        <FiChevronRight className='tech-icon' />
                        <p>Flutter</p>
                      </div>
                      <div className='tech-item'>
                        <FiChevronRight className='tech-icon' />
                        <p>Webflow</p>
                      </div>
                      <div className='tech-item'>
                        <FiChevronRight className='tech-icon' />
                        <p>APIs</p>
                      </div>
                      <div className='tech-item'>
                        <FiChevronRight className='tech-icon' />
                        <p>Jetboost</p>
                      </div>
                      <div className='tech-item'>
                        <FiChevronRight className='tech-icon' />
                        <p>Riverpod</p>
                      </div>
                    </div>
                  </div>
                  <div className='icons-container'>
                    <Link
                      href={
                        "https://github.com/thomas-gusewelle/ThemeliosDemoApp"
                      }>
                      <FaGithub size={iconSize} className='icon' />
                    </Link>
                    <Link href={"https://www.gkwmedia.com/themelios"}>
                      <FaExternalLinkAlt size={iconSize} className='icon' />
                    </Link>
                  </div>
                </div>
              </AnimatedDiv>
            </div>
          </div>
        </div>

        <div className={"section"} id={"contact-section"}>
          <AnimatedDiv classname='container' id={"contact-container"}>
            <h3 className='section-header' id='contact-header'>
              Contact Me
            </h3>

            <form className='contact-form' onSubmit={handleSubmitForm}>
              <div className='contact-group' id='name-group'>
                <label htmlFor='name' className='form-label'>
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  onChange={(e) => setName(e.target.value)}></input>
              </div>
              <div className='contact-group' id='email-group'>
                <label htmlFor='Email' className='form-label'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  onChange={(e) => setEmail(e.target.value)}></input>
              </div>
              <div className='contact-group' id='message-group'>
                <label className='form-label'>Message</label>
                <textarea
                  name='paragraph'
                  id='paragraph'
                  rows='7'
                  onChange={(e) => setMessage(e.target.value)}></textarea>
              </div>
              <button className='contact-btn' type='submit'>
                Submit
              </button>
            </form>
          </AnimatedDiv>
        </div>

        <footer>
          <div className='footer-container'>
            <div className='footer-icons'>
              <a href='https://www.github.com/gkwmedia'>
                <FaGithub size={iconSize} />
              </a>
              <a href='https://www.linkedin.com/in/thomasgusewelle/'>
                <FaLinkedin size={iconSize} />
              </a>
              <a href='https://twitter.com/TGusewelle'>
                <FaTwitter size={iconSize} />
              </a>
              <a href='mailto:thomasgusewelle21@gmail.com'>
                <FiMail size={iconSize} />
              </a>
            </div>
            <p>Thomas Gusewelle &copy; 2022</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
