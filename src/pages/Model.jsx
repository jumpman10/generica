// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { articles } from '../constants';
import styles from './styles/model.module.css'
import { AppContext } from '../context/AppProvider';
const Model = () => {
const idParams = useParams()
const data = articles.find(item => item.id === idParams.id)
const { cart, setCart } = useContext(AppContext);
const [size, setSize] = useState('');
const [added, setAdded] = useState(false);
const goToCart = () =>{
  data.inCart = true
  setCart([...cart, data])
  setAdded(true)
}
const addSize = (e) =>{
  setSize(e)
  data.size = e
}

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
            <button className={styles.button} onClick={()=> addSize('S')} 
              style={{
              backgroundColor: size==='S' ? 'black' : 'white', 
              color: size==='S' ? 'white' : 'black' }}>S</button>
            <button className={styles.button} onClick={()=> addSize('M')}
              style={{
                backgroundColor: size==='M' ? 'black' : 'white', 
                color: size==='M' ? 'white' : 'black' }}>M</button>
            <button className={styles.button} onClick={()=> addSize('L')}
              style={{
                backgroundColor: size==='L' ? 'black' : 'white', 
                color: size==='L' ? 'white' : 'black' }}>L</button>
            <button className={styles.button} onClick={()=> addSize('XL')}
              style={{
                backgroundColor: size==='XL' ? 'black' : 'white', 
                color: size==='XL' ? 'white' : 'black' }}>XL</button>
          </div>
          <button className={styles.add} onClick={!added && size !== '' ? goToCart : null}
              style={{backgroundColor: !added ? 'black' : 'grey'}}>Agregar al carrito</button>
        </div>
      </div>
    </section>
  )
}

export default Model