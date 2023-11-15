import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const NewRecipes = () => {
 const {type} = useParams()
  const location = useLocation()
  const stateParamv = location.state.stateParam

  console.log(type, stateParamv)
  return (
    <div>newRecipes</div>
  )
}

export default NewRecipes