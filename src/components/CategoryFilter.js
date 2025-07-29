import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="categories flex flex-wrap justify-center gap-2 mb-6 p-4 bg-white rounded-lg shadow-md">
      <h5 className="w-full text-center text-lg font-semibold text-gray-700 mb-3">Category filters</h5>
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ease-in-out
            ${
              category === selectedCategory
                ? "bg-blue-600 text-white shadow-lg selected"
                : "bg-gray-200 text-gray-700 hover:bg-blue-100 hover:text-blue-700"
            }`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
