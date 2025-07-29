import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleDeleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskToDelete.id);
    setTasks(updatedTasks);
  };

  const handleAddTask = (newTask) => {
    const taskWithId = { ...newTask, id: tasks.length + 1 };
    setTasks([...tasks, taskWithId]);
  };

  const tasksToDisplay = tasks.filter((task) => {
    if (selectedCategory === "All") {
      return true;
    }
    return task.category === selectedCategory;
  });

  return (
    <div className="App p-4 sm:p-6 md:p-8 lg:p-10 bg-gray-100 min-h-screen font-sans">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">My Tasks</h2>

      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <NewTaskForm
        categories={CATEGORIES.filter((category) => category !== "All")}
        onTaskFormSubmit={handleAddTask}
      />

      <TaskList
        tasks={tasksToDisplay}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
