'use client'

import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Intro.module.css';

export default function Intro() {
    const [coverImg, setCoverImg] = useState("/images/cat.jpg");

    return (
        <div className={styles.introContainer}>
            <div className={styles.introRouting}>
                <h3 className={styles.introHi}>Hi I'm</h3>
                <h1 className={styles.introName}>Jacob Lin</h1>
                <h4 className={styles.introRoute}>
                    <a href="#journey" 
                        onMouseOver={() => {setCoverImg("/images/cat2.jpg")}} 
                        onMouseLeave={() => {setCoverImg("/images/cat.jpg")}}
                    >
                        Journey
                    </a>
                </h4>
                <h4 className={styles.introRoute}>
                    <a href="#projects"
                    onMouseOver={() => {setCoverImg("/images/cat3.jpg")}} 
                    onMouseLeave={() => {setCoverImg("/images/cat.jpg")}}
                    >
                        Projects
                    </a>
                </h4>
                <h4 className={styles.introRoute}>
                    <a href="#connect"
                        onMouseOver={() => {setCoverImg("/images/cat4.jpg")}} 
                        onMouseLeave={() => {setCoverImg("/images/cat.jpg")}}
                    >
                        Connect
                    </a>
                </h4>
            </div>
            <Image priority src={coverImg} width={500} height={500} alt=""/>
        </div>
    )
}