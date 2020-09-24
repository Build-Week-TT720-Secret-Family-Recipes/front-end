import React, {useState} from "react";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import EditIcon from "@material-ui/icons/Edit";
import Typography from "@material-ui/core/Typography";
import FormGroup from "@material-ui/core/FormGroup";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../../../Styles/Styles";
import { putRequest } from "../../../redux/actions";

function EditRecipeDialog(props) {
	const [open, setOpen] = useState(false);
		const { register, handleSubmit } = useForm();
	const classes = useStyles();
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
const onSubmit = (data) => {
	console.log(data);
	putRequest(data);
};
	

	return (
		<div>
			<Button variant="outlined" color="primary" onClick={handleClickOpen}>
				<EditIcon />
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="form-dialog-title"
				className={classes.dialog}
			>
				<Grid item className={classes.recipeDescriptionFormDialog}>
					<DialogTitle id="form-dialog-title">Edit Your Recipe</DialogTitle>
					<DialogContent>
						<Typography className={classes.dialogHeader}>
							Recipe Name
						</Typography>
						<TextField
							placeholder="Whats the name of this dish?"
							type="text"
							name="name"
							className={classes.dialogFormInput}
							inputRef={register}
						/>
						<Typography className={classes.dialogHeader}>
							When will you eat this?
						</Typography>

						<FormGroup row className={classes.formgroup}>
							<label key="Breakfast">
								<input
									type="checkbox"
									value="breakfast"
									name="category"
									ref={register}
								/>
								Breakfast
							</label>
							<label key="Lunch">
								<input
									type="checkbox"
									value="lunch"
									name="category"
									ref={register}
								/>
								Lunch
							</label>
							<label key="Dinner">
								<input
									type="checkbox"
									value="Dinner"
									name="category"
									ref={register}
								/>
								Dinner
							</label>
							<label key="Dessert">
								<input
									type="checkbox"
									value="Dessert"
									name="category"
									ref={register}
								/>
								Dessert
							</label>
							<label key="Snacks">
								<input
									type="checkbox"
									value="Snacks"
									name="category"
									ref={register}
								/>
								Snacks
							</label>
							<label key="Drinks">
								<input
									type="checkbox"
									value="Drinks"
									name="category"
									ref={register}
								/>
								Drinks
							</label>
							<label key="Appetizers">
								<input
									type="checkbox"
									value="Appetizers"
									name="category"
									ref={register}
								/>
								Appetizers
							</label>
							<label key="Whenever">
								<input
									type="checkbox"
									value="Whenever"
									name="category"
									ref={register}
								/>
								Whenever
							</label>
						</FormGroup>
						<Typography className={classes.dialogHeader}>
							Recipe Origin
						</Typography>
						<TextField
							placeholder="Where did you get this recipe from?"
							type="text"
							name="where"
							className={classes.dialogFormInput}
							inputRef={register}
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose} color="primary">
							Cancel
						</Button>
						<Button onClick={handleSubmit(onSubmit)} color="primary">
							Update
						</Button>
					</DialogActions>
				</Grid>
			</Dialog>
		</div>
	);
}

export default EditRecipeDialog;