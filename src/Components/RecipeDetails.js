import React, { useContext } from 'react'
import RecipeItems from './RecipeItems'

function RecipeDetails({recipes:{recipe:{ingredientLines,ingredients,label,image}}}) {
 
const {cart,setCart} = useContext(RecipeItems)



  return (
    <div className='recipe-tile'>
  
      <h2>{label}</h2>
      <img src={image}/>
      <ul> ingredients: 
      {ingredientLines.map((index,ingr)=>{
       return <li key={index}>{ingr}</li>
      })}
      </ul>
      {image}
      <button onClick={()=>AddToCart(image)}>Save Recipe</button>
    </div>
  )
}

export default RecipeDetails