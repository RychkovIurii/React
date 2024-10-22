import React, { useState, useEffect } from 'react';

const RecipeDetails = ({ recipe }) => {

	const [mealData, setMealData] = useState(null);

	useEffect(() => {
		const fetchMealData = async () => {
		const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe.title}`);
		const data = await response.json();
		if (data.meals) {
			setMealData(data.meals[0]);
		}
		};

		fetchMealData();
	}, [recipe.title]);

	return (
		<div id="details">
			<h3>{recipe.title}</h3>
			<p>{recipe.ingredients}</p>
			<p>{recipe.steps}</p>
			<p>Tags: {recipe.tags}</p>
			<p>Meal Type: {recipe.mealType}</p>
			{mealData && (
				<>
				<h4>Additional Information from TheMealDB:</h4>
				<p>{mealData.strInstructions}</p>
				<img src={mealData.strMealThumb} alt={mealData.strMeal} />
				</>
			)}
		</div>
	);
};

export default RecipeDetails;