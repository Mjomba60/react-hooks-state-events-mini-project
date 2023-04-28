import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTask] = useState([...TASKS])
  function onDelete(taskObj){
    const taskList = tasks.filter(task => task.text !== taskObj.text)
    setTask(taskList)
  }

function onTaskFormSubmit(snTask){
  const updatedTask = [...tasks, snTask]
  setTask(updatedTask)
}

function onCategorySelected(category){
  
  const updatedTask = category !== "All" ? TASKS.filter((task) => task.category === category) : TASKS
  setTask(updatedTask)
}


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories = {CATEGORIES} onCategorySelected = {onCategorySelected}/>
      <NewTaskForm categories = {CATEGORIES} onTaskFormSubmit = {onTaskFormSubmit}/>
      <TaskList tasks = {tasks}
                  onDelete = {onDelete}/>
    </div>
  );
}

export default App;
