import React from 'react'
import styles from './card.module.css'
const Card = ({title,description,price,url,url2}) => {
  return (
    <div className={styles.container}>
      <div className={styles.slider}>
            <img
                className={styles.imgContainer}
                src={url}
                alt={title}
              />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{title}</h2>
        <h2 className={styles.description}>{description}</h2>
        <h2 className={styles.title}>{price}</h2>
      </div>
    </div>
  )
}

export default Card