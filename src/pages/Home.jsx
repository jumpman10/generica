// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Card} from '../components'
import styles from './styles/home.module.css'
import { articles, collection } from '../constants'
import {Link} from 'react-router-dom'
import { genericaWhite, gauchos, blinblin, animals, mystics } from '../assets'
const Home = () => {
  return (
    <section className={styles.section}>
        {/* <div className={styles.container}>
            <h1 className={styles.title}>Modelos</h1>
        </div> */}
        <div className={styles.cardContainer}>
            { articles.slice(0,6).map((e)=>
                <Link key={e.id} 
                to={{
                  pathname: `/model/${e.id}`,
                  state: { cardData: { title: e.title, description: e.description, url: e.url, url2: e.url2, price: e.price } }
                }}
                className={styles.links}>
                  <Card title={e.title} description={e.collection} url={e.url3} url2={e.url2} price={e.price}/>
                </Link>
                )
            }
        </div>
        <div className={styles.container}>
          <Link to={{pathname:'/models'}}>
            <h1 className={styles.goToModels}>Mira todos los modelos disponibles -&gt; </h1>
          </Link>
        </div>
        <div className={styles.collectionContainer}>
            <div className={styles.titleContainer}>
              <div className={styles.title}>
                <h1 className={styles.titleText}>Colecciones</h1>
              </div>
              <div className={styles.divisorContainer}>
                <div className={styles.divisor}/>
                <div className={styles.divisor}/>
                <div className={styles.divisor}/>
                <div className={styles.divisor}/>
                <div className={styles.divisor}/>
              </div>
              <div className={styles.collectionImageContainer}>
                <div className={styles.divition2}>
                <img src={gauchos} alt='gauchos' className={styles.logoCollection} />
                <img src={animals} alt='animals' className={styles.logoCollection} />
                </div>
                <div className={styles.divition1}>
                <img src={genericaWhite} alt='genericaWhite' className={styles.logoCollection} />
                </div>
                <div className={styles.divition2}>
                <img src={mystics} alt='mystics' className={styles.logoCollection} />
                <img src={blinblin} alt='blinblin' className={styles.logoCollection} />
                </div>
              </div>
            </div>
            <div className={styles.collection}>
              {
                collection.map((e)=>
                <Link key={e.id} 
                to={{pathname:`/collections/${e.title}`}}>
                  <div className={styles.cardCollection}>
                      <img
                        className={styles.imgContainer}
                        src={e.url}
                        alt={e.title}
                      />
                    <img src={e.url2} alt={e.title} className={styles.collectionNames} />
                  </div>
                </Link>
                )
              }
            </div>
        </div>
        <div className={styles.create}>
            <h1 className={styles.createTitle}>Crea tu propio diseño</h1>
            <div className={styles.steps}>
              <div>
                <h1>1</h1>
                <h1>Selecciona una prenda</h1>
              </div>
              <div>
                <h1>2</h1>
                <h1>Genera una imagen con la ia</h1>
              </div>
              <div>
                <h1>3</h1>
                <h1>Diseña</h1>
              </div>
            </div>
            <div style={{marginTop: 60}}>
              <Link to='/create-post' className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md'>
                Crear
              </Link>
            </div>
        </div>
    </section>
  )
}

export default Home