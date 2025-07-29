import React from "react";

function Task({ task, onDeleteTask }) {
  const { text, category } = task; 

  const handleDeleteClick = () => {
    onDeleteTask(task);
  };

  return (
    <div className="task flex justify-between items-center bg-white p-4 rounded-lg shadow-sm mb-3">
      <div className="flex-grow">
        <div className="label text-xs font-semibold uppercase text-gray-500 mb-1">
          {category}
        </div>
        <div className="text text-gray-800 text-base">
          {text}
        </div>
      </div>
      <button
        className="delete bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold hover:bg-red-600 transition-colors duration-200"
        onClick={handleDeleteClick}
      >
        X
      </button>
    </div>
  );
}

export default Task;
