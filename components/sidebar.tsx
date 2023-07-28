import Image from 'next/image';
import arrow from '../public/images/arrow.svg';
import styles from '../styles/Sidebar.module.css';

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarRoutes}>
                <h2 className={styles.sidebarRoute}><a href="/#journey">Journey</a></h2>
                <h2 className={styles.sidebarRoute}><a href="/#projects">Projects</a></h2>
                <h2 className={styles.sidebarRoute}><a href="/#connect">Connect</a></h2>
            </div>
            <Image className={styles.sidebarArrow} src={arrow} alt=''/>
        </div>
    )
}