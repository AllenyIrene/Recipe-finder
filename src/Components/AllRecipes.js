import React, { useContext, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { RecipeContext } from '../Liabilities/Context'
import { fetchData } from '../Liabilities/GetAPI'
import AllRecipeCard from './AllRecipeCard'
import RecipeItems from './RecipeItems'

function AllRecipes(props) {
    const {recipe,setRecipe} = useContext(RecipeContext)
  
   const location = useLocation()
   const search = location.state
   
    useEffect(()=>{
        fetchData(`search?q=${search}`)
        .then((data)=>{
         setRecipe(data)
         console.log(data)
        })
    },[search])
 
 

    
  return (
    <div>
      <h1>Search Results for :{search}</h1>
      <section className="home-rec">
      {recipe.map((recipe)=>(
        <RecipeItems items={recipe}/>
      ))}
      </section>
     
    </div>
  )
}

export default AllRecipes