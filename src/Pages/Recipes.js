import React, { useContext, useEffect, useState } from 'react'
import { Form, useNavigate } from 'react-router-dom'
import ProductsTile from '../Components/ProductsTile'
import { products } from '../Liabilities/Products'

const Recipes = () => {

  const [search,setSearch] = useState("")
  
  const navigate = useNavigate()
  
   const searchRecipe = (e) =>{
   e.preventDefault()
   if(search)
   {
    navigate(`/search/${search}`, {state:search})
    setSearch("")
    console.log(search)
   }
   }
console.log(products)
  return (
    <div className='home-recipe'>
     <section className='home-recipe-barner'>
      <h1>Search For A Recipe</h1>
      <form onSubmit={searchRecipe}>
      <input type="text" value={search} placeholder="Search for a Recipe"
        onChange={(e)=>setSearch(e.target.value)}/>
        <button>Search</button>
      </form>
        <span>{search} Recipes</span>
      </section>
      <section className='new-recipe'>
        <h1>Our Newest Recipes</h1>
        <div className='prd'>
        {products.map((prd)=>(
         <ProductsTile product={prd}/>
        )
        )}
        </div>
       
      </section>
      </div>
  )
}

export default Recipes