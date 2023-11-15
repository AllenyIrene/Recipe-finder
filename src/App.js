import React from 'react';
import './index.css';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Recipes from './Pages/Recipes';
import SavedRecipes from './Pages/SavedRecipes';
import RecipeDetails from './Components/RecipeDetails';
import Context from './Liabilities/Context';
import Details from './Pages/Details';
import AllRecipes from './Components/AllRecipes';
import NewRecipes from './Components/NewRecipe';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Context>
    <Routes>
       <Route path="/" element={<Layout/>}>
        <Route index element={<Recipes/>}/>
        <Route path='/Recipes' element={<Home/>}/>
        <Route path='/SavedRecipe' element={<SavedRecipes/>}/>
        <Route  path=":id" element={<Details/>}/>
        <Route path="/search/:pathname" element={<AllRecipes/>}/>
        <Route path="new/:id" element={<NewRecipes/>}/>
       </Route>
      </Routes>
    </Context>
    </BrowserRouter>
    </div>
  );
}

export default App;
