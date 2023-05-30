
// Function to handle form submission
function searchRecipes(event) {
  event.preventDefault(); // Prevent page reload

  let searchQuery = document.getElementById('search-input').value;
  const url = `https://low-carb-recipes.p.rapidapi.com/search?name=${searchQuery}`;
  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': 'f3267ea9c0msh63eb12800d328a2p142f6cjsn76ad279862f7',
          'X-RapidAPI-Host': 'low-carb-recipes.p.rapidapi.com'
      }
  };
  
  // Make an API request
  fetch(url, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      storeRecipes(data); // Store recipes in local storage
      console.log('Stored recipes:', data); // Log the stored recipes
      displayResults(data);
    })
    .catch(function (error) {
      console.log('Error:', error);
    });
}

// Function to store recipes in local storage
function storeRecipes(recipes) {
  localStorage.setItem('recipes', JSON.stringify(recipes));
}

// Function to display search results
function displayResults(results) {
  console.log(results);
  let resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = ''; // Clear previous results

  // Create a document to hold the result cards
  let recipeCards = document.createDocumentFragment();
  // Loop through each recipe and create a result card
  for (let i = 0; i < results.length; i++) {
    let recipe = results[i];

    let card = document.createElement('div');
    card.classList.add('recipe-card');

    let recipeName = document.createElement('h2');
    recipeName.textContent = recipe.name;
    recipeName.id = 'recipeName'; // Add HTML id to the recipeName element

    // Add a click event listener to the recipe name
    recipeName.addEventListener('click', function () {
      redirectToRecipePage(recipe); // Redirect to the recipe page
    });

    let imageUrl = document.createElement('img');
    imageUrl.src = recipe.image;

    // Loop through each recipe and create a ingredient card
    
    let recipeUrl = document.createElement('p');
    
    recipeUrl.textContent = recipe.url;

    card.appendChild(recipeName);
    card.appendChild(imageUrl);
    card.appendChild(recipeUrl);

    recipeCards.appendChild(card);
  }

  // Append the recipeCards to the results container
  resultsContainer.appendChild(recipeCards);
  let customizationBtn = document.getElementById('customize-btn')
  customizationBtn.disabled = false
}

// Function to redirect to the recipe page
function redirectToRecipePage(recipe) {
  // Save the recipe information in the local storage before redirecting
  localStorage.setItem('selectedRecipe', JSON.stringify(recipe));

  // Redirect to the recipe details page
  window.location.href = 'recipe.html';
}

// Attach event listener to the form

document.getElementById('search-form')
  document.addEventListener('submit', searchRecipes);

  // Get all the result buttons
const resultButtons = document.querySelectorAll('.result-button');

// Attach click event listener to each button
resultButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    // Get the ID of the clicked item
    const itemId = event.target.getAttribute('data-id');
    
    // Redirect to the page with serving size, ingredients, and instructions using the item ID
    window.location.href = `recipe.html?id=${itemId}`;
  });
});


