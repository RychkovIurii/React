import React, { useState } from 'react';

const RecipeForm = ({ addRecipe }) => {
	const [title, setTitle] = useState('');
	const [ingredients, setIngredients] = useState('');
	const [steps, setSteps] = useState('');
	const [tags, setTags] = useState('');
	const [mealType, setMealType] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (title && ingredients && steps && tags && mealType) {
			addRecipe({ title, ingredients, steps, tags, mealType });
			setTitle('');
			setIngredients('');
			setSteps('');
			setTags('');
			setMealType('');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
			Title:
			<input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
			</label>
			<label>
			Ingredients:
			<textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
			</label>
			<label>
			Steps:
			<textarea value={steps} onChange={(e) => setSteps(e.target.value)} required />
			</label>
			<label>
			Tags:
			<input type="text" value={tags} onChange={(e) => setTags(e.target.value)} required />
			</label>
			<label>
			Meal Type:
			<select value={mealType} onChange={(e) => setMealType(e.target.value)} required>
				<option value="">Select Meal Type</option>
				<option value="Breakfast">Breakfast</option>
				<option value="Lunch">Lunch</option>
				<option value="Dinner">Dinner</option>
			</select>
			</label>
			<button type="submit">Add Recipe</button>
		</form>
	)
}

export default RecipeForm