import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineShoppingCart} from "react-icons/ai"
import logo from "../Assets/logo1.jpeg"

const Header = () => {
  return (
    <div className='header'>
        <img src={logo} />
        <section className='nav'>
        <button><Link to="/">Home</Link></button>
        <button><Link to="/Recipes">Recipes</Link></button>
        </section>
        <section className='save-icon'>
        <Link to="/SavedRecipe"><AiOutlineShoppingCart size="2rem"/>Saved</Link>
        </section>

       
       
    </div>
  )
}

export default Header


