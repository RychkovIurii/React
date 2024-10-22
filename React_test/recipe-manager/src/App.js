import './App.css';
import React, { useState, useEffect } from 'react';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import RecipeDetails from './components/RecipeDetails';

function App() {

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState('');
	const [sort, setSort] = useState('');
	const [filterTag, setFilterTag] = useState('');
	const [filterMealType, setFilterMealType] = useState('');
	const [selectedRecipe, setSelectedRecipe] = useState(null);

	useEffect(() => {
		const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
		setRecipes(storedRecipes);
	}, []);
	
	useEffect(() => {
		localStorage.setItem('recipes', JSON.stringify(recipes));
	}, [recipes]);

	const addRecipe = (recipe) => {
		recipe.id = Date.now();
		recipe.favorite = false;
		setRecipes([...recipes, recipe]);
	};

	const toggleFavorite = (id) => {
		setRecipes(
		recipes.map((recipe) =>
			recipe.id === id ? { ...recipe, favorite: !recipe.favorite } : recipe
		)
		);
	};

	const removeRecipe = (id) => {
		if (window.confirm('Are you sure you want to delete this recipe?')) {
			setRecipes(recipes.filter((recipe) => recipe.id !== id));
		}
	};

	const filteredRecipes = recipes.filter((recipe) =>
		recipe.title.toLowerCase().includes(search.toLowerCase()) ||
		recipe.ingredients.toLowerCase().includes(search.toLowerCase())
		)
		.filter((recipe) => (filterTag ? recipe.tags.includes(filterTag) : true))
		.filter((recipe) => (filterMealType ? recipe.mealType === filterMealType : true))
		.sort((a, b) => {
		if (sort === 'title') {
			return a.title.localeCompare(b.title);
		} else if (sort === 'date') {
			return b.id - a.id;
		}
		return 0;
	});

	return (
		<div className="App">
	<header>
		<h1>Recipe Manager</h1>
	</header>
	<main className="container">
		<div className="left-pane">
			<section id="recipe-form">
				<h2>Add a New Recipe</h2>
				<RecipeForm addRecipe={addRecipe} />
			</section>
		</div>
		<div className="right-pane">
			<section id="recipe-list">
				<h2>Recipe List</h2>
				<input
				type="text"
				placeholder="Search recipes..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				id="search"
				/>
				<select onChange={(e) => setSort(e.target.value)} value={sort}>
				<option value="">Sort by</option>
				<option value="title">Title</option>
				<option value="date">Date Added</option>
				</select>
				<input
				type="text"
				placeholder="Filter by tag..."
				value={filterTag}
				onChange={(e) => setFilterTag(e.target.value)}
				/>
				<select onChange={(e) => setFilterMealType(e.target.value)} value={filterMealType}>
				<option value="">Filter by Meal Type</option>
				<option value="Breakfast">Breakfast</option>
				<option value="Lunch">Lunch</option>
				<option value="Dinner">Dinner</option>
				</select>
				<RecipeList
				recipes={filteredRecipes}
				toggleFavorite={toggleFavorite}
				removeRecipe={removeRecipe}
				selectRecipe={setSelectedRecipe}
				/>
			</section>
			<section id="recipe-details">
				<h2>Recipe Details</h2>
				{selectedRecipe && <RecipeDetails recipe={selectedRecipe} />}
			</section>
		</div>
	</main>
	</div>
	);
}

export default App;
