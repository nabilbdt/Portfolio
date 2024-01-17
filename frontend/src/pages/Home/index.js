import React from 'react'
import Header from '../../components/header';
import Intro from './intro';
import About from './About';
import Experiences from './Experiences';
import Projects from './Projects';
import Courses from './Courses';
import Contact from './contact';
import Footer from './Footer';
import LeftSider from './LeftSider';
import Loader from '../../components/Loader';

function Home() {
  return (
    <div >
      <Header />
      <div className='bg-primary px-40 sm:px-5'>
      <Intro />
      <About />
      <Experiences />
      <Projects />
      <Courses />
      <Contact />
      <Footer />
      <LeftSider />
      </div>
    </div>
  )
}

export default Home;