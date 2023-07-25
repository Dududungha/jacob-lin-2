import Image from 'next/image';
import Experience from '../components/experience';
import Project from '../components/project';
import styles from '../styles/Home.module.css';

const routeList = ['Journey', 'Projects', 'Contact'];

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.introContainer}>
        <div className={styles.introRouting}>
          <h3 className={styles.introHi}>Hi I'm</h3>
          <h1 className={styles.introName}>Jacob Lin</h1>
          {routeList.map((route) => {
            return (
              <h4 className={styles.introRoute}>{route}</h4>
            )
          })}
        </div>
        <Image priority src="/images/cat.jpg" width={500} height={500} alt=""/>
      </div>
      <div className={styles.experiencesContainer}>
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
      <div className={styles.projectsContainer}>
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
      </div>
      <div className={styles.connectContainer}>
        <Image src="/images/cat.jpg" height={200} width={200} alt="Gmail"/>
        <Image src="/images/cat.jpg" height={200} width={200} alt="LinkedIn"/>
        <Image src="/images/cat.jpg" height={200} width={200} alt="GitHub"/>
      </div>
    </main>
  )
}
