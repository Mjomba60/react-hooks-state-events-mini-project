//import { useState } from "react";
import React from "react";

function CategoryFilter({categories, onCategorySelected}) {

  function handleClick(event){
    event.target.className = "selected"
    onCategorySelected(event.target.name)

  }

  const btns = categories.map((singleCategory, index) => {
    return <button key={index}
            name = {singleCategory}
            onClick = {(event) => handleClick(event)}>{singleCategory}</button>
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {btns}
    </div>
  );
}

export default CategoryFilter;
