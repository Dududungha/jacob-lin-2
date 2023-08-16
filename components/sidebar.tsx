import Image from 'next/image';

import arrow from '../public/images/arrow.svg';
import resume from '../public/images/resume.png';

import styles from '../styles/Sidebar.module.css';

export default function Sidebar() {
    return (
        <div className={styles.sidebarContainer}>
            <div className={styles.sidebarRoutes}>
                <p className={styles.sidebarRoute}><a href="/#journey">Journey</a></p>
                <p className={styles.sidebarRoute}><a href="/#projects">Projects</a></p>
                <p className={styles.sidebarRoute}><a href="/#connect">Connect</a></p>
            </div>
            <Image className={styles.sidebarArrow} src={arrow} alt=''/>
            <a className={styles.sidebarResume} href="/text/Jacob_Lin_Resume_Web.pdf" download><Image className={styles.sidebarResume} src={resume} alt=''/></a>
        </div>
    )
}