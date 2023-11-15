import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const RecipeItems = ({items,search}) => {
    console.log(items)

  return (
    <div className='items'>
        <img src={items.recipe.image?  items.recipe.image : ""} alt={items.title}/>
        <h1>{items.recipe.label}</h1>
        <button><Link to={`/${items.recipe.label}`}>View Recipe</Link></button>

    </div>
  )
}

export default RecipeItems