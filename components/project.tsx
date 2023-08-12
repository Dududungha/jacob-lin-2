import Image, { StaticImageData } from 'next/image';
import styles from '../styles/Project.module.css';

interface projectInfo {
    name: string;
    imageSrc: StaticImageData;
    link?: string;
}

export default function Project({name, imageSrc, link}:projectInfo) {
    return (
        <div className={styles.projectContainer}>
            <h3 className={styles.projectTitle}>{name}</h3>
            <a href={link} target='_blank'><Image className={styles.projectImage} src={imageSrc} alt=''/></a>
        </div>
    )
}