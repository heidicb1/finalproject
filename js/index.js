
// Function to handle form submission
function searchRecipes(event) {
  event.preventDefault(); // Prevent page reload

  let searchQuery = document.getElementById('search-input').value;
  const url = `https://low-carb-recipes.p.rapidapi.com/search?name=${searchQuery}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key':
        '93c650552fmsh5813ff2505d4e5cp1c9528jsn98565acb8719',
      'X-RapidAPI-Host': 'low-carb-recipes.p.rapidapi.com',
    },
  };
  // Make an API request
  fetch(url, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      displayResults(data);
    })
    .catch(function (error) {
      console.log('Error:', error);
    });
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

    let imageUrl = document.createElement('img');
    imageUrl.src = recipe.image;

    // Loop through each recipe and create a ingredient card
    
    let description = document.createElement('p');
    
    description.textContent = recipe.description;

    card.appendChild(recipeName);
    card.appendChild(imageUrl);
    card.appendChild(description);

    recipeCards.appendChild(card);
  }

  // Append the recipeCards to the results container
  resultsContainer.appendChild(recipeCards);
}

// Attach event listener to the form

document.getElementById('search-form')
  document.addEventListener('submit', searchRecipes);
