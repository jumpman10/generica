// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from 'react'
// import { getRandomPrompt } from '../utils'
import { FormField } from '../components'
import styles from './styles/createPost.module.css'
import { createImage} from '../assets'
import { mockPrev } from '../assets'
const CreatePost = () => {
  const [form, setForm] = useState({
    name:'',
    prompt:'',
    photo: '',
  })
  const [imgActive, setImgActive] = useState(false)
  // const [generatingImg, setGeneratingImg] = useState(false)
  // const [selectionTshirt, setSelectionTshirt] = useState('left')
  // const generateImage = async() =>{
  //   if (form.prompt) {
  //     try {
  //       setGeneratingImg(true)
  //       const response = await fetch('http://localhost:8080/api/v1/dalle', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           prompt: form.prompt,
  //         }),
  //       })

  //       const data = await response.json()
  //       setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` })
  //     } catch (err) {
  //       alert(err)
  //     } finally {
  //       setGeneratingImg(false)
  //     }
  //   } else {
  //     alert('Please provide proper prompt')
  //   }
  // }
  // const handleSubmit = () =>{
    
  // }
  const handleChange = (e) =>{
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  // const handleSurpriseMe = () =>{
  //   const randomPrompt = getRandomPrompt(form.prompt)
  //   setForm({ ...form, prompt: randomPrompt })
  // }
  const [sizeImg, setSizeImg] = useState(100);
  const [position, setPosition] = useState({ x:(219-sizeImg)/2, y:(229-sizeImg)/2 });
  const [dragging, setDragging] = useState(false);
  const [rel, setRel] = useState({ x: 0, y: 0 });
  const handleMouseDown = (e) => {
    if (e.button !== 0) return; // Solo aceptar el botón izquierdo del ratón
    const pos = { x: e.pageX - position.x, y: e.pageY - position.y };
    setDragging(true);
    setRel(pos);
    e.stopPropagation();
    e.preventDefault();
  };

  const handleMouseUp = (e) => {
    setDragging(false);
    e.stopPropagation();
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    const newPos = { x: e.pageX - rel.x, y: e.pageY - rel.y };
    setPosition(newPos);
    e.stopPropagation();
    e.preventDefault();
  };
  return (
    <section style={{
      display:'flex', 
      flexDirection:'column', 
      justifyContent:'center', 
      alignItems:'center',
      width:'100%'}}
      >
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Crea tu diseño</h1>
      </div>
      <div className={styles.formContainer}>
        <div className={styles.form}>
          <div className={styles.inputsContainer}>
            <FormField
              labelName="Your name"
              type="text"
              name ="name"
              placeholder="Your name"
              value={"Nombre"}
              handleChange={handleChange}
            />
            <FormField
              labelName="Prompt"
              type="text"
              name ="prompt"
              placeholder="an oil painting by Matisse of a humanoid robot playing chess"
              value={"an oil painting by Matisse of a humanoid robot playing chess"}
            />
              {imgActive && (
                <img
                src={createImage}
                alt={'an oil painting by Matisse of a humanoid robot playing chess'}
                style={{width:200,height:200}}
                />
              )}
          </div>
          {!imgActive &&
            <button
              onClick={()=>(setImgActive(true))}
              className='font-inter font-medium bg-[#6469ff] mt-10 text-white px-4 py-2 rounded-md'
            >
              Generar
            </button>
          }
        { imgActive &&
        <div className={styles.manageImg}>
          <div className={styles.options2}>
            <h1 className={styles.title}>Tamaño</h1>
            <div className={styles.positions}>
              <button className={styles.btn} onClick={()=>(setSizeImg(sizeImg+50))}>+</button>
              <button className={styles.btn} onClick={()=>(setSizeImg(sizeImg-50))}>-</button>
            </div>
          </div>
          <div className={styles.options}>
          <img
          src={mockPrev}
          className={styles.mockPrev}/>
            <div className={styles.draggableContainer} onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}>
              <img
                src={createImage}
                alt="Draggable"
                className={styles.draggable}
                onMouseDown={handleMouseDown}
                style={{ left: `${position.x}px`, top: `${position.y}px`,width:sizeImg, height:sizeImg}}
              />
            </div>
          </div>
          <div className={styles.options3}>
            <h1 className={styles.title}>Posición</h1>
            <div className={styles.positions}>
              <button className={styles.btn} onClick={()=>(setPosition({x:position.x-3, y:position.y-3}))}>&#8662;</button>
              <button className={styles.btn} onClick={()=>(setPosition({x:position.x, y:position.y-3}))}>&#8657;</button>
              <button className={styles.btn} onClick={()=>(setPosition({x:position.x+3, y:position.y-3}))}>&#8663;</button>
            </div>
            <div className={styles.positions}>
              <button className={styles.btn} onClick={()=>(setPosition({x:position.x-3, y:position.y}))}>&#8656;</button>
              <button className={styles.btn} onClick={()=>(setPosition({x:position.x+3, y:position.y}))}>&#8658;</button>
            </div>
            <div className={styles.positions}>
              <button className={styles.btn} onClick={()=>(setPosition({x:position.x-3, y:position.y+3}))}>&#8665;</button>
              <button className={styles.btn} onClick={()=>(setPosition({x:position.x, y:position.y+3}))}>&#8659;</button>
              <button className={styles.btn} onClick={()=>(setPosition({x:position.x+3, y:position.y+3}))}>&#8664;</button>
            </div>
            <div className={styles.positions2}>
              <button className={styles.btn} onClick={()=>(setPosition({x:0, y:0}))}>Izq-Top</button>
              <button className={styles.btn} onClick={()=>(setPosition({x:(219-sizeImg)/2, y:0}))}>Top</button>
              <button className={styles.btn} onClick={()=>(setPosition({x:(219-sizeImg), y:0}))}>Der-Top</button>
              <button className={styles.btn} onClick={()=>(setPosition({x:(219-sizeImg)/2, y:(229-sizeImg)/2}))}>Centro</button>
            </div>
            <div className={styles.positions2}>
              <button className={styles.btn} onClick={()=>(setPosition({x:0, y:(229-sizeImg)}))}>Izq-Abajo</button>
              <button className={styles.btn} onClick={()=>(setPosition({x:(219-sizeImg)/2, y:(229-sizeImg)}))}>Abajo</button>
              <button className={styles.btn} onClick={()=>(setPosition({x:(219-sizeImg), y:(229-sizeImg)}))}>Der-Abajo</button>
            </div>
          </div>
        </div>
        }
        </div>
      </div>
    </section>
  )
}

export default CreatePost