import React from 'react'
import styles from './formfield.module.css'
const FormField = ({ labelName, type, name, placeholder, value, 
  handleChange, isSurpriseMe, handleSurpriseMe }) => {
  return (
    <div>
      <div>
        <label htmlFor={name} className='block text-sm font-medium text-gray-900'>
          {labelName}
        </label>
        {isSurpriseMe && (
            <button
            type="button"
            onClick={handleSurpriseMe}
            style={{
              backgroundColor:'gray', 
              marginLeft:10, 
              fontSize:'small',
              marginBottom:10,
              paddingInline:5,
              borderRadius:4,
              color:'white'}}
            >
              Surprise me
            </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className={styles.input}
      />
    </div>
  )
}

export default FormField