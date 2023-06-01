// Allow user to customize style
// Function to toggle the style customization interface
function toggleCustomization() {
    const customizeContainer = document.getElementById('customize-container');
    customizeContainer.classList.add('show');
  }
  
  // Function to apply the custom styles based on user input
  function applyCustomStyles() {
    const textColor = document.getElementById('color-input').value;
    const backgroundColor = document.getElementById('background-input').value;
    const fontSize = document.getElementById('font-size-input').value;
    console.log(textColor)
    console.log(backgroundColor)
    console.log(fontSize)
  
    // Apply the custom styles to specific elements

   
    const recipeName = document.getElementsByClassName('recipe-card');
    for (let i = 0; i < recipeName.length; i++) {
      recipeName[i].style.color = textColor;
    }
    console.log(textColor)
    const resultsContainer = document.getElementById('results');
    resultsContainer.style.backgroundColor = backgroundColor;
  
    const recipeCards = document.getElementsByClassName('recipe-card');
    for (let i = 0; i < recipeCards.length; i++) {
      recipeCards[i].style.fontSize = `${fontSize}px`;
    }
  }
  
  // Attach event listener to the toggle button
  document.getElementById('customize-btn').addEventListener('click', function(){
    toggleCustomization()
  });
  
  
  // Attach event listener to the apply button
  document.getElementById('apply-btn').addEventListener('click', applyCustomStyles);