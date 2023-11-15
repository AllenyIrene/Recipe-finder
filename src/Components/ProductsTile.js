import React from 'react'
import { Link } from 'react-router-dom'

const ProductsTile = ({product:{name,image}}) => {

  return (
    <div className='productsTile'>
        <img src={image}/>
        <Link to={`/${name}`}>{name}</Link>
 </div>
 )
}

export default ProductsTile