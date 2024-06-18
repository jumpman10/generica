// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from './styles/collections.module.css'
import { Link } from 'react-router-dom';
import { collection } from '../constants';
import {gauchos, blinblin, animals, mystics } from '../assets'
const Collections = () => {
    const gauchosImgs = collection.filter(item => item.title === 'gauchos')
    const blinblinImgs = collection.filter(item => item.title === 'blinblin')
    const animalsImgs = collection.filter(item => item.title === 'animals')
    const mysticsImgs = collection.filter(item => item.title === 'mystics')
return (
    <section className={styles.container}>
       <div className={styles.line}>
        <Link to={{pathname:'/collections/gauchos'}} className={styles.containerBlack}>
                <div className={styles.items}>
                    <img src={gauchos} alt='gauchos' className={styles.imgsLogos} />
                </div>
                <div className={styles.text}>
                    <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non 
                    libero et velit placerat suscipit fringilla quis purus. 
                    Ut porttitor convallis velit et consectetur. Mauris quis metus dui.
                     Proin aliquam blandit finibus. Duis mauris justo, pulvinar ac nibh sit amet, tempus lobortis sem. 
                    Praesent ac pharetra nunc. Cras cursus porta risus eget lobortis.</div>
                </div>
                <div className={styles.imgsContainer}>
                <button style={{color:'white'}}>Ver</button>
                </div>
        </Link>
        <div className={styles.containerGray}>
            {
                gauchosImgs.map((e,i)=>
                <>
                  <div key={i} className={styles.items}>
                      <img
                        className={styles.imgs}
                        src={e.url}
                        alt={e.title}
                      />
                  </div>
                  <div key={i} className={styles.items}>
                      <img
                        className={styles.imgs}
                        src={e.url3}
                        alt={e.title}
                      />
                  </div>
                  <div key={i} className={styles.items}>
                      <img
                        className={styles.imgs}
                        src={e.url4}
                        alt={e.title}
                      />
                  </div>
                </>
                )
              }
        </div>
       </div>
       <div className={styles.line}>
        <div className={styles.containerGray}>
        {
                blinblinImgs.map((e,i)=>
                <>
                  <div key={i} className={styles.items}>
                      <img
                        className={styles.imgs}
                        src={e.url}
                        alt={e.title}
                      />
                  </div>
                  <div key={i} className={styles.items}>
                      <img
                        className={styles.imgs}
                        src={e.url3}
                        alt={e.title}
                      />
                  </div>
                  <div key={i} className={styles.items}>
                      <img
                        className={styles.imgs}
                        src={e.url4}
                        alt={e.title}
                      />
                  </div>
                </>
                )
              }
        </div>
        <Link to={{pathname:`/collections/blinblin`}} className={styles.containerBlack2}>
                <div className={styles.imgsContainer}>
                    <button style={{color:'white'}}>Ver</button>
                </div>
                <div className={styles.text}>
                    <div>Aenean ultrices tellus quis venenatis iaculis. Phasellus ultrices,
                       neque at finibus sollicitudin, nulla turpis semper urna, non convallis
                        eros elit eget arcu. Vivamus pretium congue nunc id eleifend. Vestibulum
                         hendrerit nisl vitae enim ultricies, 
                      mollis efficitur diam auctor. Morbi tincidunt lacinia varius.</div>
                </div>
                <div className={styles.items}>
                    <img src={blinblin} alt='blinblin' className={styles.imgsLogos} />
                </div>
        </Link>
       </div>
       <div className={styles.line}>
        <Link to={{pathname:`/collections/animals`}} className={styles.containerBlack}>
                <div className={styles.items}>
                    <img src={animals} alt='animals' className={styles.imgsLogos} />
                </div>
                <div className={styles.text}>
                    <div>Ut vel dolor urna. Cras non magna viverra, fermentum risus in, 
                      ultricies lectus. Vestibulum vel arcu viverra, dignissim massa in,
                       lacinia tellus. Duis posuere convallis dui, non egestas nulla laoreet
                        vel. Morbi sapien diam, blandit in sodales id, facilisis id libero. 
                        Nullam ullamcorper arcu massa, ut tincidunt orci facilisis tristique. 
                      Cras pharetra velit vel felis ultrices volutpat dictum ac nulla.</div>
                </div>
                <div className={styles.imgsContainer}>
                    <button style={{color:'white'}}>Ver</button>
                </div>
        </Link>
        <div className={styles.containerGray}>
        {
                animalsImgs.map((e,i)=>
                <>
                  <div key={i} className={styles.items}>
                      <img
                        className={styles.imgs}
                        src={e.url}
                        alt={e.title}
                      />
                  </div>
                  <div key={i} className={styles.items}>
                      <img
                        className={styles.imgs}
                        src={e.url3}
                        alt={e.title}
                      />
                  </div>
                  <div key={i} className={styles.items}>
                      <img
                        className={styles.imgs}
                        src={e.url4}
                        alt={e.title}
                      />
                  </div>
                </>
                )
              }
        </div> 
       </div>      
       <div className={styles.line}>
        <div className={styles.containerGray}>
        {
                mysticsImgs.map((e,i)=>
                <>
                  <div key={i} className={styles.items}>
                      <img
                        className={styles.imgs}
                        src={e.url}
                        alt={e.title}
                      />
                  </div>
                  <div key={i} className={styles.items}>
                      <img
                        className={styles.imgs}
                        src={e.url3}
                        alt={e.title}
                      />
                  </div>
                  <div key={i} className={styles.items}>
                      <img
                        className={styles.imgs}
                        src={e.url4}
                        alt={e.title}
                      />
                  </div>
                </>
                )
              }
        </div>
        <Link to={{pathname:`/collections/mystics`}} className={styles.containerBlack2}>
                <div className={styles.imgsContainer}>
                    <button style={{color:'white'}}>Ver</button>
                </div>
                <div className={styles.text}>
                    <div>Mauris facilisis condimentum lorem ac sodales. Nam consequat viverra dictum. 
                      Maecenas tristique massa est, non porta mauris interdum vitae. 
                      Integer elementum dui eget dignissim eleifend. Mauris quis enim 
                      non urna dapibus accumsan ut ac lectus. Nam eu tortor porttitor,
                       rhoncus augue eu, luctus tortor. Proin fringilla pulvinar dolor at
                        fermentum. Nunc ut pellentesque ligula.</div>
                </div>
                <div className={styles.items}>
                    <img src={mystics} alt='mystics' className={styles.imgsLogos} />
                </div>
        </Link>
       </div>
    </section>
  )

}
export default Collections