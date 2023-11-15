import React, {createContext,useState } from 'react'

export const RecipeContext = createContext()
const Context = ({children}) =>{

const[recipe,setRecipe] = useState([])
const[cart,setCart] = useState([])

 const providerValues = {recipe,setRecipe,cart,setCart}
  return (
    <RecipeContext.Provider value={providerValues}>
        {children}
    </RecipeContext.Provider>
  )
}

export default Context