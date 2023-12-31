'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/sidebar';
import Sidebar2 from '../components/sidebar2';
import Intro from '../components/intro';
import Experience from '../components/experience';
import Project from '../components/project';

import gmail from '../public/images/gmail.jpg';
import github from '../public/images/github.jpg';
import linkedin from '../public/images/linkedin.jpg';
import mangroves from '../public/images/mangroves.jpg';
import uwu from '../public/images/uwu.png';
import ignis from '../public/images/ignis.jpg';
import maxentric from '../public/images/maxentric.png';
import ucsdcse from '../public/images/ucsdcse.jpg';

import styles from '../styles/Home.module.css';

export default function Home() {
  // const handleScroll = () => {
  //   const position = window.scrollY / (document.body.offsetHeight - window.innerHeight);
  //   console.log(position)
  //   document.body.style.setProperty('--scroll', `${position}`);
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [])

  return (
    <main className={styles.container}>
      <Sidebar2 />
      <Intro />
      <div id="journey" className={styles.experiencesContainer}>
        <Experience title="MaXentric Technologies" role="Software Engineer Intern" imageSrc={maxentric}>
          <p>MaXentric was my first step into software engineering.</p>
          <p>It was exciting. I had to learn new technologies, networking and embedded devices, and I had absolutely no idea about them! I honestly amazed myself with how I was able to pick it up and even apply it to build a simulator to test link layer networking protocols for the new 5G millimeter wave technology. I was proud to have landed this internship and to have contributed and made an impact.</p>
          <p>However, I couldn&apos;t see myself continuing to work with networks and embedded devices, and here I am!</p>
        </Experience>
        <Experience title="UCSD CSE Department" role="CSE Instructional Assistant" imageSrc={ucsdcse}>
          <p>My very first job.</p>
          <p>I got paid a whopping $20.23/hr! I could not stop bragging to my friends about that. However I soon found that the fulfillment from helping and teaching my peers was worth much more than the pay. Seeing their eyes light up with understanding through the result of my help is a priceless feeling. Though it wasn&apos;t grand in scale, I felt that I was making an impact, a visible one, and I latched onto that desire.</p>
          <p>From this, I knew that I had the capacity to help even more people, and looked for opportunities to make a greater impact.</p>
        </Experience>
      </div>
      <div id="projects" className={styles.projectsContainer}>
          <Project name='Mangrove Monitoring' imageSrc={mangroves} link='https://github.com/UCSD-E4E/MMICT-frontend'/>
          <Project name='uwu-wegistew' imageSrc={uwu} link='https://uwu-wegistew.netlify.app/'/>
          <Project name='ignis' imageSrc={ignis} link='https://devpost.com/software/ignis-1kn83b'/>
      </div>
      <div id="connect" className={styles.connectContainer}>
        <a href="mailto:jacobchengdilin@gmail.com"><Image className={styles.connectImg} src={gmail} alt="Gmail"/></a>
        <a href="https://www.linkedin.com/in/jacobcdlin" target="_blank"><Image className={styles.connectImg} src={linkedin} alt="LinkedIn"/></a>
        <a href="https://www.github.com/Dududungha" target="_blank"><Image className={styles.connectImg} src={github} alt="GitHub" /></a>
      </div>
    </main>
  )
}
