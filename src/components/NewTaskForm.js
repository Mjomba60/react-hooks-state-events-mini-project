import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [taskObj, setTaskObj] = useState({details : "", category : ""})
  

  const myCategories = categories.filter((category) => category !== "All")
  const displayOptions = myCategories.map((singlecategory) => {
    return <option key={singlecategory}>{singlecategory}</option>
  })

  function handleChange(event){
    const  value = event.target.value
    const key = event.target.name
    setTaskObj({...taskObj, [key]:value})

  }

  function handleSubmit(event){
    event.preventDefault()
    onTaskFormSubmit(taskObj)
  }

  return (
    <form className="new-task-form"
          onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text"
                onChange={handleChange} />
      </label>
      <label>
        Category
        <select name="category"
              onChange={handleChange}>
          {displayOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
