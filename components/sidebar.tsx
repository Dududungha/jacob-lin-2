import Image from 'next/image';
import arrow from '../public/images/arrow.svg';
import styles from '../styles/Sidebar.module.css';

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarRoutes}>
                <p className={styles.sidebarRoute}><a href="/#journey">Journey</a></p>
                <p className={styles.sidebarRoute}><a href="/#projects">Projects</a></p>
                <p className={styles.sidebarRoute}><a href="/#connect">Connect</a></p>
            </div>
            <Image className={styles.sidebarArrow} src={arrow} alt=''/>
        </div>
    )
}