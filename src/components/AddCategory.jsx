import { useState } from 'react'
import lightning from '../assets/lightning.png'

export const AddCategory = ({ onInputChange }) => {
  const [inputValue, setInputValue] = useState('')

  const handleOnChange = ({ target }) => {
    setInputValue(target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim().length <= 1) return
    onInputChange(inputValue)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex-row">
        <img src={lightning} alt="Ray Icon" className="logo" />
        <input
          type="text"
          placeholder="Add category"
          value={inputValue}
          onChange={handleOnChange}
        />
      </div>
    </form>
  )
}
