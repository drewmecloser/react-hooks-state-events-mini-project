import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      text: text,
      category: category,
    };
    onTaskFormSubmit(newTask);
    setText("");
    setCategory(categories[0]);
  };

  return (
    <form onSubmit={handleSubmit} className="new-task-form p-6 bg-white rounded-lg shadow-md mb-6">
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Details</span>
        <input
          type="text"
          name="text"
          value={text}
          onChange={handleTextChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </label>
      <label className="block mb-6">
        <span className="text-gray-700 font-medium">Category</span>
        <select
          name="category"
          value={category}
          onChange={handleCategoryChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      <input
        type="submit"
        value="Add task"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer transition-colors duration-200"
      />
    </form>
  );
}

export default NewTaskForm;
