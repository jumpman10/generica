// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import styles from './styles/pay.module.css'
import { AppContext } from '../context/AppProvider';
const Pay = () => {
    
const { cart, setCart } = useContext(AppContext);
const deleteArticle = (id) =>{
    const data = cart.filter(item => item.id != id)
    setCart(data)
}
const prices = cart.map(e =>  parseInt(e.price.slice(1)))
const priceTotal = prices.reduce(
  (a, cV) => a + cV, 0 ,
);
  return (
    <div className={styles.container}>
        <div className={styles.section}>
          { cart.map((e,i) =>
            <div key={i} className={styles.items}>
              <div className={styles.articleImg}>
                <img src={e.url} alt={e.title}/>
              </div>
              <div className={styles.articleText}>
                <h2>{e.title}</h2>
                <h3>{e.description}</h3>
                <h2>{e.collection}</h2>
                <h2>talle - {e.size}</h2>
              </div>
              <div className={styles.articlePrice}>
                <h1>{e.price}</h1>
              </div>
              <div className={styles.buttonContainer}>
                <button className={styles.deleteBtn} onClick={()=>deleteArticle(e.id)}>X</button>
              </div>
            </div>
          )}
          <div className={styles.total}>
            <h1>Total</h1>
            <h1>${priceTotal}</h1>
          </div>
          <button className={styles.pay}>Pagar</button>
        </div>
    </div>

  )
}

export default Pay