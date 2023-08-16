'use client'

import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Intro.module.css';
import main from '../public/images/main.jpg';
import journey from '../public/images/journey.jpg';
import projects from '../public/images/projects.jpg';
import connect from '../public/images/connect.jpg';

export default function Intro() {
    const [coverImg, setCoverImg] = useState(main);

    return (
        <div className={styles.introContainer}>
            <div className={styles.introRouting}>
                <h3 className={styles.introHi}>Hi I'm</h3>
                <h1 className={styles.introName}>Jacob Lin</h1>
                <h4 className={styles.introRoute}>
                    <a href="#journey" 
                        onMouseOver={() => {setCoverImg(journey)}} 
                        onMouseLeave={() => {setCoverImg(main)}}
                    >
                        Journey
                    </a>
                </h4>
                <h4 className={styles.introRoute}>
                    <a href="#projects"
                    onMouseOver={() => {setCoverImg(projects)}} 
                    onMouseLeave={() => {setCoverImg(main)}}
                    >
                        Projects
                    </a>
                </h4>
                <h4 className={styles.introRoute}>
                    <a href="#connect"
                        onMouseOver={() => {setCoverImg(connect)}}
                        onMouseLeave={() => {setCoverImg(main)}}
                    >
                        Connect
                    </a>
                </h4>
            </div>
            <Image priority className={styles.introImg} src={coverImg} alt=""/>
        </div>
    )
}