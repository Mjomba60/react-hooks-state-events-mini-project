import React from "react";
import Task from "./Task";

function TaskList({tasks , onDelete}) {

  const singleTask = tasks.map((task, index) => {
    return <Task key = {index}
                category = {task.category}
                text = {task.text}
                onDelete = {onDelete} />
  })
  return (
    <div className="tasks">
      {singleTask}
    </div>
  );
}

export default TaskList;
