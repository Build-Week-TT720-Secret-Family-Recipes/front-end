import React from 'react';

function RecipeList(props) {
    return (
<div className="ui center aligned segment" style={{backgroundColor: "#a8d8ea", height: "100vh"}}>



        <div className="ui violet inverted menu">
        <div className="header item">Secret Recipes</div>
        <a className="active item">Home</a>
        
        <div className="ui dropdown item">
          Recipes by meal
          <i className="dropdown icon"></i>
          <div className="menu">
            <div className="item">Breakfast</div>
            <div className="item">Lunch</div>
            <div className="item">Dinner</div>
            <div className="divider"></div>
            <div className="item">Desserts</div>
          </div>
        </div>
        <div className="right menu">
          <div className="item">
            <div className="ui action left icon input">
              <i className="search icon"></i>
              <input type="text" placeholder="Search Recipes" />
              <button className="ui button">Submit</button>
            </div>
          </div>
          <a className="item">Logout</a>
        </div>
        </div>
        
<div className="ui container" style={{backgroundColor: "#fcbad3", marginTop: "60px", padding: "20px"}}>
<div className="ui three stackable cards">
  <div className="card" style={{backgroundColor: "#ffffd2"}}>
    <div className="content">
    <h4 class="ui sub header">Recipe</h4>
    </div>
  </div>
  <div className="card" style={{backgroundColor: "#ffffd2"}}>
    <div className="content">
    <h4 class="ui sub header">Recipe</h4>
    </div>
  </div>
  <div className="card" style={{backgroundColor: "#ffffd2"}}>
    <div className="content">
    <h4 class="ui sub header">Recipe</h4>
    </div>
  </div>
  <div className="card" style={{backgroundColor: "#ffffd2"}}>
    <div className="content">
    <h4 class="ui sub header">Recipe</h4>
    </div>
  </div>
  <div className="card" style={{backgroundColor: "#ffffd2"}}>
    <div className="content">
    <h4 class="ui sub header">Recipe</h4>
    </div>
  </div>
  <div className="card" style={{backgroundColor: "#ffffd2"}}>
    <div className="content">
    <h4 class="ui sub header">Recipe</h4>
    </div>
  </div>
</div>
</div>
        
</div>
     
    );
}

export default RecipeList;