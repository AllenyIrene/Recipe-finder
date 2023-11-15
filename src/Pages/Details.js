import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RecipeDetails from '../Components/RecipeDetails'
import { fetchData, fetchIngridients, fetchRecipe } from '../Liabilities/GetAPI'

const Details = () => {
    const [recipes, setRecipes] = useState([])
    
    const {id} = useParams()

    useEffect(()=>{
  fetchData(`search?q=${id}`)
.then((data)=>{
    console.log(data)
    setRecipes(data)

})
 },[])
  return (
    <div >
     <h1>Different ways of Cooking {id.slice(0,50)} </h1>
        <section className='recipe-details-details'>
        {recipes.map((recipe)=>(
        <RecipeDetails recipes={recipe}/>
      ))}
        </section>
    </div>
  )
}

export default Details