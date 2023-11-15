import React, { useContext, useEffect, useState } from 'react'
import RecipeItems from '../Components/RecipeItems'
import { RecipeContext } from '../Liabilities/Context'
import { fetchData } from '../Liabilities/GetAPI.js'


const Home = () => {
const {recipe,setRecipe} = useContext(RecipeContext)
const [name, setName] = useState("")
const [search, setSearch] = useState("")
const [dish,setDish] = useState("")


 const SearchRecipe = (e) =>{
  e.preventDefault()
  fetchData(`search?q=${search}`)
  .then((data)=>{
   setRecipe(data)
   console.log(data)
  })
   setSearch("")
 }

 useEffect(()=>{
  fetchData(`search?q=${search}&mealType=${name}`)
  .then((data)=>{
   setRecipe(data)
   console.log(data)
  })
  },[name])
  
  useEffect(()=>{
    fetchData(`search?q=${search}&dishType=${dish}`)
    .then((data)=>{
     setRecipe(data)
     console.log(data)
    })
    },[dish])
    
 
  return (
    <div className='home'>
      <section className='meals'>
        <label>Meal-Types
        <select value={name} onChange={(e)=>setName(e.target.value)}>
          <option value="breakfast">BreakFast</option>
          <option value="lunch">Lunch</option>
          <option value="Diner">Dinner</option>
          <option value="Snack">Snack</option>
          <option value="TeaTime">Tea-Time</option>
        </select>
        </label>
      </section>
      <section className='meals'>
        <label>Dish
        <select value={dish} onChange={(e)=>setDish(e.target.value)}>
          <option value="alcohol-cocktail">Alcohol-cocktail</option>
          <option value="biscuits">Biscuits</option>
          <option value="bread">Bread</option>
          <option value="Drinks">Drinks</option>
          <option value="dessert">Dessert</option>
          <option value="salad">Salad</option>
          <option value="soup">Soup</option>
          <option value="pancake">Pancake</option>
        </select>
        </label>
      </section>
      <section className='diate-list'>
        <h1>QUICK & EASY RECIPES</h1>
        <form onSubmit={SearchRecipe}>
        <input value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <button>search</button>
        </form>
        <span>Results For : {name?name:dish} {search?search:""}  Recipes</span>
      </section>
    <section className='home-rec'>
      {recipe.map((items)=>(
      <RecipeItems items={items} search={search}/>
    ))}
      </section>
    </div>
  )
}

export default Home