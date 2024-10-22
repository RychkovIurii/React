import React, { useState } from 'react';

const MealDBSearch = () => {
	const [mealName, setMealName] = useState('');
	const [mealData, setMealData] = useState(null);
	const [error, setError] = useState(null);

	const fetchRecipeDetails = async (title) => {
		try {
		const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${title}`);
		const data = await response.json();
		if (data.meals) {
			setMealData(data.meals[0]);
			setError(null);
		} else {
			setMealData(null);
			setError('Recipe not found in TheMealDB');
		}
		} catch (error) {
		setMealData(null);
		setError('Error fetching data');
		}
	};

	const handleSearch = async () => {
		await fetchRecipeDetails(mealName);
	};

	return (
		<div id="mealdb-search-section">
		<h2>Search in TheMealDB</h2>
		<input
			type="text"
			placeholder="Search meal..."
			value={mealName}
			onChange={(e) => setMealName(e.target.value)}
			id="mealdb-search"
		/>
		<button onClick={handleSearch} id="mealdb-search-button">Search</button>
		<div id="mealdb-result">
			{mealData && (
			<div>
				<h3>{mealData.strMeal}</h3>
				<p><strong>Category:</strong> {mealData.strCategory}</p>
				<p><strong>Area:</strong> {mealData.strArea}</p>
				<img src={mealData.strMealThumb} alt={mealData.strMeal} style={{ maxWidth: '140px', height: 'auto' }} />
				<p><strong>Instructions:</strong> {mealData.strInstructions}</p>
			</div>
			)}
			{error && <p>{error}</p>}
		</div>
		</div>
	);
};

export default MealDBSearch;
