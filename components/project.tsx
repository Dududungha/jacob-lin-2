import Image from 'next/image';
import styles from '../styles/Project.module.css';

interface projectInfo {
    imageSrc: string;
    link?: string;
}

export default function Project({imageSrc, link}:projectInfo) {
    return (
        <div className={styles.projectContainer}>
            <a href={link} target='_blank'><Image src={imageSrc} fill={true} alt=''/></a>
        </div>
    )
}