// const ajaxAdapter = {

var myHeaders = process.env.COOKAPI;
var key = process.env.APIKEY
var myInit = {
  method: 'GET',
  headers: {
    "X-Mashape-Key": myHeaders
  }
}

function CuisineCall(query) {
  let url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?cuisine='+ query
  console.log(myHeaders)
  return fetch(url, myInit).then(res => res.json() )
}



export default CuisineCall;









//   getRecipes(){
//     return fetch('/recipes')
//       .then( r=> r.json() )
//   },

//   addRecipe(newIngredient){
//     return fetch(`/recipes/${recipe.recipe_id}`,{
//       method:'post',
//       headers:{
//         "Content-type": "application/json; charset=UTF-8"

//       },
//       body: JSON.stringify(newRecipe)
//     })
//     .then( r=> r.json() )
//   },

//   deleteRecipe(id){
//     return fetch(`/recipes/${id}`,{
//       method:'DELETE',
//       headers:{
//         "Content-type": "application/json; charset=UTF-8"
//       }
//     }).then( r=> r.json() )
//   },

// }
// export default ajaxAdapter

