import axios from "axios"

const URL = `https://api.edamam.com`

const API_KEY = "bab13aa6616f2c3d1ec600014288e597"
const API_ID = "bc2026d8"

/*https://api.edamam.com/search?q=chicken&*/

export const fetchData = async(name) =>{
  const {data:{hits}} = await axios.get(`${URL}/${name}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`)
  return hits
}

const URL2 = `https://edamam-food-and-grocery-database.p.rapidapi.com`
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '98a5eef2c0msh04492bc062a0150p17c137jsn433ffb830787',
    'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
  }
};

export const fetchRecipe = async(url) =>{
  const {data} = await axios.get(`${URL2}/${url}`, options)
  return data
}
