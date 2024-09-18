// src/components/RecipeList.jsx
import React from 'react';

window.alert("خوش آمدید...");

const RecipeList = ({ recipes, onSelectRecipe }) => {
  return (
    <div>
      <h2 style={{fontSize: '13px', color: 'rgb(172, 180, 180)'}}>دستور پخت غذا</h2>
      <ul>
        {recipes.map((recipe) => (
          <li
            key={recipe.id}
            onClick={() => onSelectRecipe(recipe)}
            style={{ cursor: 'pointer', padding: '10px', margin: '5px', backgroundColor: '#f4f4f4', borderRadius: '5px' }}
          >
            {recipe.title}
          </li>
        ))}
      </ul>
    </div>
  );
};



export default RecipeList;
