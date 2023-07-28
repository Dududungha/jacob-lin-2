import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/sidebar';
import Intro from '../components/intro';
import Experience from '../components/experience';
import Project from '../components/project';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <Sidebar />
      <Intro />
      <div id="journey" className={styles.experiencesContainer}>
        <Experience title="MaXentric Technologies" role="Software Engineer Intern" imageSrc="/images/cat.jpg">
          <p>MaXentric was my first step into software engineering.</p>
          <p>It was exciting. I had to learn new technologies, networking and embedded devices, and I had absolutely no idea about them! I honestly amazed myself with how I was able to pick it up and even apply it to build a simulator to test link layer networking protocols for the new 5G millimeter wave technology. I was proud to have landed this internship and to have contributed and made an impact.</p>
          <p>However, I couldn't see myself continuing to work with networks and embedded devices, and went looking for other opportunities.</p>
        </Experience>
        <Experience title="UCSD CSE Department" role="CSE Instructional Assistant" imageSrc="/images/cat.jpg">
          <p>My very first job.</p>
          <p>I got paid a whopping $20.23/hr! I could not stop bragging to my friends about that.But, what was more important to me than the pay was the fulfillment from helping and teaching my peers.Seeing their eyes light up with understanding through the result of my help is a priceless feeling. Though it wasn't grand in scale, I felt that I was making an impact, a visible one, and I latched onto that desire.</p>
          <p>From this, I knew that I had the capacity to help even more people, and looked for more opportunities.</p>
        </Experience>
      </div>
      <div id="projects" className={styles.projectsContainer}>
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
      </div>
      <div id="connect" className={styles.connectContainer}>
        <a href="mailto:jacobchengdilin@gmail.com"><Image src="/images/gmail.jpg" height={200} width={200} alt="Gmail"/></a>
        <a href="https://www.linkedin.com/in/jacobcdlin" target="_blank"><Image src="/images/linkedin.jpg" height={200} width={200} alt="LinkedIn"/></a>
        <a href="https://www.github.com/Dududungha" target="_blank"><Image src="/images/github.jpg" height={200} width={200} alt="GitHub" /></a>
      </div>
    </main>
  )
}
