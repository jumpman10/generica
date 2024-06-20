// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from './styles/collection.module.css'
import { Link, useParams } from 'react-router-dom';
import { articles } from '../constants';
import CardModels from '../components/CardModels';
import {gauchos, blinblin, animals, mystics } from '../assets'
const Collection = () => {
const idParams = useParams()
const data = articles.filter(item => item.collection === idParams.collection)
  
return (
    <section className={styles.container}>
        <div className={styles.imgContainer}>
          {idParams.collection === 'animals' &&
            <img src={animals} alt='animals' className={styles.collectionImage} />
          }
          {idParams.collection === 'gauchos' &&
            <img src={gauchos} alt='gauchos' className={styles.collectionImage} />
          }
          {idParams.collection === 'mystics' &&
            <img src={mystics} alt='mystics' className={styles.collectionImage} />
          }
          {idParams.collection === 'blinblin' &&
            <img src={blinblin} alt='blinblin' className={styles.collectionImage} />
          }
        </div>
        <div className={styles.cardContainer}>
        { data.map((e)=>
        <Link key={e.id} 
          to={{
            pathname: `/model/${e.id}`}}
            className={styles.cardModels}>
          <CardModels title={e.title} description={e.description} url={e.url3} price={e.price}/>
        </Link>
        )
        }
      </div>
    </section>
  )

}
export default Collection