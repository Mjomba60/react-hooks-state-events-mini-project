import React from "react";

function Task({text, category, onDelete}) {
  const task = {text: text, category: category}

  function handleClick(){
    
    onDelete(task)
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete"
          onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;
