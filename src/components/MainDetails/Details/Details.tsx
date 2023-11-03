import React from 'react'
import styles from './Details.module.css'

interface DetailsProps {
    title: string;
    year: string;
    duration: string;
    genre: string;
    description: string;
  }

const Details: React.FC<DetailsProps> = ({ title, year, duration, genre, description }) => {
    return (
        <div className={styles.details}>
            <h1 className={styles.title}>{title}</h1>
            <p>{year} • {duration}</p>
            <p>{genre}</p>
            <p className={styles.description}>
                {description}
            </p>
        </div>
    )
}

export default Details