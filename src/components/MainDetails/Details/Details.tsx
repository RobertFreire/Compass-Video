import React from 'react'
import styles from './Details.module.css'



const Details = ({title, year, duration, genre, description}: { title?: string, year?: string , duration?: string , genre?: string , description?: string }) => {
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