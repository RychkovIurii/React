import React from 'react'

const RecipeList = ({ recipes, toggleFavorite, removeRecipe, selectRecipe }) => {
	return (
		<div>
			{recipes.map((recipe) => (
			<div key={recipe.id} className="recipe" onClick={() => selectRecipe(recipe)}>
				<h3>{recipe.title}</h3>
				<button onClick={(e) => { e.stopPropagation(); toggleFavorite(recipe.id); }}>
				{recipe.favorite ? 'Unfavorite' : 'Favorite'}
				</button>
				<button onClick={(e) => { e.stopPropagation(); removeRecipe(recipe.id); }}>Remove</button>
			</div>
			))}
		</div>
	);
};

export default RecipeList