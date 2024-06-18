// eslint-disable-next-line no-unused-vars
import React from 'react'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import {logo} from './assets'
import { Home, CreatePost, Model, Models, Collection } from './pages'
import './App.css'
import Collections from './pages/Collections'
const App = () => {
  return (
  <BrowserRouter>
    <header className='header'>
      <div className='header-content-small'>
        <h4 style={{color:'white'}}>Recibimos todas las tarjetas</h4>
      </div>
      <div className='header-login-content'>
        <h4 style={{color:'white'}}>Encontrá, creá, vestí tu estilo</h4>
      </div>
      <div className='header-content-principal'>
        <Link to='/'>
          <img src={logo} alt='logo' className='imgLogo' />
        </Link>
        <div className='buttons-container' >
            <Link to='/models'>
              <button className='buttons'>Modelos</button>
            </Link>
            <Link to='/collections'>
              <button className='buttons'>Colecciones</button>
            </Link>
            <Link to='/create'>
              <button className='buttons'>Crear</button>
            </Link>
        </div>
        <div>
            <Link>
              <button className='login'>Mi compra</button>
            </Link>
        </div>
      </div>
    </header>
    <main className='w-full bg-[white] min-h-[calc(100vh-73px)]'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<CreatePost/>}/>
        <Route path='/models' element={<Models/>}/>
        <Route path='/model/:id' element={<Model/>}/>
        <Route path='/collections' element={<Collections/>}/>
        <Route path='/collections/:collection' element={<Collection/>}/>
      </Routes>
    </main>
    <footer>
      <div className='footer-sections'>
      </div>
      <img src={logo} alt='logo' className='w-28 object-contain' />
      <div className='footer-sections'>
      </div>
    </footer>
  </BrowserRouter>
  )
}

export default App