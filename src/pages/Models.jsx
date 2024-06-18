// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import styles from './styles/models.module.css'
import { articles } from '../constants'
import { Link } from 'react-router-dom'
import CardModels from '../components/CardModels'
const Models = () => {
    const [collection, setCollection] = useState(false)
    const [data, setData] = useState(articles)
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6
    const totalPages = Math.ceil(data.length / pageSize);
  
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
  
    const currentArticles = data.slice(startIndex, endIndex);
  
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
    };

    const handleCollectionChange = (collection) =>{
      if(collection===''){
        setData(articles)
      }else{
      const array = articles.filter((e)=>e.collection === collection)
      setData(array)
      }
    }
  return (
    <section className={styles.container}>
      <div className={styles.modelsContainer}>
        <div className={styles.filters}>
            <button className={styles.btn} onClick={()=>handleCollectionChange('')}><h2>Todos</h2></button>
            <div>
            <button className={styles.btn} onClick={()=>setCollection(!collection)}>
                <h2>Colecciones</h2>{collection ?<h2>&#160;-</h2>: <h2>&#160;+</h2>}
            </button>
            { collection && (
            <>
              <button className={styles.btn} onClick={()=>handleCollectionChange('gauchos')}><h3>Gauchos</h3></button>
              <button className={styles.btn} onClick={()=>handleCollectionChange('animals')}><h3>Animals</h3></button>
              <button className={styles.btn} onClick={()=>handleCollectionChange('mystics')}><h3>Mystics</h3></button>
            </>  
            )
            }
            </div>
            
        </div>
        <div className={styles.modelsDiv}>
          <div className={styles.models}>
            {currentArticles.map((e) => (
              <Link
                key={e.id}
                to={{ pathname: `/model/${e.id}` }}
                className={styles.model}
              >
                <CardModels title={e.title} description={e.description} url={e.url3} price={e.price} />
              </Link>
            ))}
          </div>
          <div className={styles.pagination}>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={currentPage === index + 1 ? styles.activePage : styles.noActivePage}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Models