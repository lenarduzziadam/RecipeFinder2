document.getElementById('recipeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const ingredients = document.getElementById('ingredientInput').value;
    console.log('Ingredients:', ingredients);
    // TODO: Send ingredients to backend and get recipes
});
