import { useState } from 'react'
import { AddCategory, GifGrid } from '../components'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch'])

  function onAddCategory(category) {
    console.log(category)
    if (!categories.includes(category))
      setCategories((categories) => [category, ...categories])
  }
  return (
    <>
      <div className="body-container">
        <div className="flex-row">
          <h2>GifExpertApp</h2>
        </div>
        <AddCategory onInputChange={onAddCategory} />
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </div>
    </>
  )
}
