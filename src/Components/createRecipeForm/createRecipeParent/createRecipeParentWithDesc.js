import React from 'react';
import { connect } from "react-redux";

const CreateRecipeParentWithDesc = ({
	recipeOrigin,
	recipePros,
	needToKnow,
}) => {
	return recipeOrigin ? (
		<div>
			<h3>Recipe Information</h3>
			<h4>{recipeOrigin}</h4>
			<h4>{recipePros}</h4>
			<h4>{needToKnow}</h4>
		</div>
	) : (
        <div></div>
    )
};

  const mapStateToProps = (state) => {
		return state;
	};

export default connect(mapStateToProps)(CreateRecipeParentWithDesc);