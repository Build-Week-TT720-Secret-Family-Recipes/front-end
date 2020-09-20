import React from "react";
// import { useHistory } from "react-router-dom";
// import { useForm } from "react-hook-form";
import { reduxForm, Field } from "redux-form";

//STYLING
// import Typography from "@material-ui/core/Typography";
// import Grid from "@material-ui/core/Grid";
// import Button from "@material-ui/core/Button";
// import Paper from "@material-ui/core/Paper";
// import { useStyles } from "../../Styles/Styles";
// import TextField from "@material-ui/core/TextField";

//CRUD
//import axios from "axios";

const renderInputAddInfo = (props) => {
    // <TextField {...props.input} type="text" />
 return   <input {...props.input} type="text"/>
};

// const handleSubmit = values => {
//     alert(JSON.stringify(values))
// }

function CreateRecipeAdtnl({handleSubmit}) {
	return (
		<div>
			<h2> Additional Info </h2>
			<form onSubmit={handleSubmit}>
				<Field name="additionaInfo" component={renderInputAddInfo} />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default reduxForm({
    form: 'additionalInfo',})(CreateRecipeAdtnl);
