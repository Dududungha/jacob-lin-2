import Image from 'next/image';
import { PropsWithChildren } from 'react';
import styles from '../styles/Experience.module.css';

interface experienceInfo {
    title: string;
    role: string;
    imageSrc: string;
}

export default function Experience({title, role, imageSrc, children}:PropsWithChildren<experienceInfo>) {
    return (
        <div className={styles.experienceContainer}>
            <Image className={styles.experienceImage} src={imageSrc} height={200} width={200} alt=''/>
            <div className={styles.experienceText}>
                <h2 className={styles.experienceTitle}>{title}</h2>
                <p className={styles.experienceRole}>{role}</p>
                {children}
            </div>
        </div>
    );
}