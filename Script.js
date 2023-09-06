const recipes = [
	{
		name: "Spaghetti",
		image: "Spaghetti.jpg",
		description: "A classic Italian dish that is easy to prepare but simply delicious."
	},
	{
		name: "Chicken stew",
		image: "Chicken stew.png",
		description: "Chicken Stew a stew like no other. It is easy, aromatic and flavorful with a thick rich tomato-based sauce.."
	},
	{
		name: "Kenyan Pilau",
		image: "Kenyan-Pilau.jpg",
		description: "Kenyan pilau rice is a simple dish of rice flavoured with meat stock and spices and sometimes cooked with vegetables."
	},
	{
		name: "Creamy Tuscan Chicken",
		image: "creamy-tuscan-chicken-delish.jpg",
		description: "This hearty chicken dish is creamy, rich and full of flavour",
	},
	{
		name: "taylor-kiser",
		image: "taylor-kiser-unsplash.png",
		description: "These taylor-kiser are simple to prepare and bursting with Tex-Mex flavours."
	}
];

const recipe = document.querySelector("#recipe");
const recipeImage = recipe.querySelector("img");
const recipeName = recipe.querySelector("h3");
const recipeDescription = recipe.querySelector("p");

function getRandomRecipe() {
	const randomIndex = Math.floor(Math.random() * recipes.length);
	return recipes[randomIndex];
}

function displayRecipe() {
	const randomRecipe = getRandomRecipe();
	recipeImage.src = randomRecipe.image;
	recipeName.textContent = randomRecipe.name;
	recipeDescription.textContent = randomRecipe.description;
}

displayRecipe();