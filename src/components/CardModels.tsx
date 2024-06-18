import React from 'react'
import styles from './card.module.css'
const CardModels = ({title,description,price,url}) => {
  return (
    <div className={styles.container}> 
      <img
        className={styles.imgContainer}
        src={url}
        alt={title}
      />
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{title}</h2>
        <h2 className={styles.description}>{description}</h2>
        <h2 className={styles.title}>{price}</h2>
      </div>
    </div>
  )
}

export default CardModels