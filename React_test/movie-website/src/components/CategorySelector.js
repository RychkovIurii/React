import React from 'react';

const CategorySelector = ({ categories, onSelectCategory }) => {
  return (
    <div className="category-selector">
      <select onChange={(e) => onSelectCategory(e.target.value)}>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;
