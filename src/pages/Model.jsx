// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { articles } from '../constants';
import styles from './styles/model.module.css'
const Model = () => {
const idParams = useParams()
const data = articles.find(item => item.id === idParams.id)
const [size, setSize] = useState('')
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img src={data.url3} alt={data.title}/>
          <img src={data.url2} alt={data.title}/>
          <img src={data.url4} alt={data.title}/>
          <img src={data.url5} alt={data.title}/>
        </div>
        <div className={styles.text}>
          <h1 className={styles.title}>GENERICA {data.title}</h1>
          <h2 className={styles.description}>{data.description}</h2>
          <h1 className={styles.price}>{data.price}</h1>
          <a href='#' className={styles.promo}>Conocé las promociones</a>
          <h2 style={{marginTop:20}}>Seleccionar talle</h2>
          <div className={styles.sizes}>
            <button className={styles.button} onClick={()=> setSize('small')}>S</button>
            <button className={styles.button} onClick={()=> setSize('medium')}>M</button>
            <button className={styles.button} onClick={()=> setSize('large')}>L</button>
            <button className={styles.button} onClick={()=> setSize('extralarge')}>XL</button>
          </div>
          <button className={styles.add}>Agregar al carrito</button>
        </div>
      </div>
    </section>
  )
}

export default Model