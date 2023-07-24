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
        <div className={styles.container}>
            <Image src={imageSrc} height={200} width={200} alt=''/>
            <div className={styles.text}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.role}>{role}</p>
                {children}
            </div>
        </div>
    );
}