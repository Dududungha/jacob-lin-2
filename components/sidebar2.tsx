'use client'

import Image from 'next/image';
import { useState } from 'react';

import hamburger from '../public/images/hamburger.svg';
import resume from '../public/images/resume.png';

import styles from '../styles/Sidebar2.module.css';

export default function Sidebar2() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div onClick={() => setIsOpen((prev) => !prev)}><Image className={`${styles.sidebarHam} ${isOpen ? styles.sidebarHamOpen : null}`} src={hamburger} alt=""/></div>
            <div className={`${styles.sidebarContainer} ${isOpen ? styles.open : ''}`}>
                <div className={styles.sidebarRoutes}>
                    <p className={styles.sidebarRoute}><a href="/#journey">Journey</a></p>
                    <p className={styles.sidebarRoute}><a href="/#projects">Projects</a></p>
                    <p className={styles.sidebarRoute}><a href="/#connect">Connect</a></p>
                </div>
                <a className={styles.sidebarResume} href="/text/Jacob_Lin_Resume_Web.pdf" download><Image className={styles.sidebarResume} src={resume} alt=''/></a>
            </div>
        </div>
    )
}