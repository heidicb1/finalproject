document.addEventListener('DOMContentLoaded', function () {
    // Get the selected recipe from the local storage
    const selectedRecipe = localStorage.getItem('selectedRecipe');
    if (selectedRecipe) {
      const recipe = JSON.parse(selectedRecipe);
      displayRecipeDetails(recipe);
    }
  });
  
  // Function to display the recipe details
  function displayRecipeDetails(recipe) {
    // Access the necessary DOM elements and populate them with the recipe details
    let recipeNameElement = document.getElementById('recipe-name');
    recipeNameElement.textContent = recipe.name;
  
    let imageUrlElement = document.getElementById('recipe-image');
    imageUrlElement.src = recipe.image;
  
    let recipeServings = document.getElementById('recipe-servings');
    recipeServings.textContent = `Servings: ${recipe.servings}`;
  
    let recipeIngredients = document.getElementById('recipe-ingredients');
  
    // Clear previous ingredients
    recipeIngredients.innerHTML = '';
  
    // Loop through the ingredients array and log each ingredient
    // Used Stackflow help to get this list to work and tried out the for each loop
    recipe.ingredients.forEach(function (ingredient) {
      console.log(ingredient);
      let ingredientElement = document.createElement('li');
      ingredientElement.textContent = `${ingredient.servingSize.desc} ${ingredient.name}`;
      recipeIngredients.appendChild(ingredientElement);
    });
  
    let recipeSteps = document.getElementById('recipe-steps');
    recipeSteps.textContent = recipe.steps;
  }