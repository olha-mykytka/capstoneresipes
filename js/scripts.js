import {recipes} from "../data/recipes.js"

const myNav = document.querySelector('nav')
const myViewer = document.querySelector('#viewer')
recipes.forEach(recipe => {
    console.log(recipe)
    const myButton = document.createElement('button')
    myButton.textContent = recipe.name
    myButton.addEventListener('click', () => showRecipe(recipe))
    myNav.appendChild(myButton)
})
function showRecipe(recipe) {

    let recipeSection = document.createElement("section")
    let recipeName = document.createElement("h2")
    let recipePhoto = document.createElement("img")
    let recipeDescription = document.createElement("p")
    let recipeIngredients = document.createElement('ul')
    let recipeSteps = document.createElement('ol')

recipeName.textContent = recipe.name 
recipePhoto.src = `images/${recipe.photo}`
recipePhoto.alt = recipe.name
recipeDescription.textContent = recipe.about
recipe.ingredients.forEach(ingredient => {
    let theIngredient = document.createElement('li')
    theIngredient.textContent = ingredient
    recipeIngredients.appendChild(theIngredient)

})
recipe.steps.forEach(step => {
    let theStep = document.createElement('li')
    theStep.textContent = step
    recipeSteps.appendChild(theStep)

})



recipeSection.appendChild(recipeName)
recipeSection.appendChild(recipePhoto)
recipeSection.appendChild(recipeDescription)
recipeSection.appendChild(recipeIngredients)
recipeSection.appendChild(recipeSteps)

myViewer.textContent = ""

myViewer.appendChild(recipeSection)
}