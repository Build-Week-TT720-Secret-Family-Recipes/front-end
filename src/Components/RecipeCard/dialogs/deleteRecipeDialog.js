import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

function DeleteRecipeDialog(props) {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
    };
    
    const deleteRecipe = () => {
        
    }

	return (
		<fragment>
			<Button variant="outlined" color="primary" onClick={handleClickOpen}>
				<DeleteIcon />
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">Delete Your Recipe</DialogTitle>
				<DialogContent>
					<DialogContentText>
						ARE YOU SURE YOU WANT TO DELETE THIS RECIPE?
					</DialogContentText>
					<Button onClick={deleteRecipe}>DELETE</Button>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button onClick={handleClose} color="primary">
						Update
					</Button>
				</DialogActions>
			</Dialog>
		</fragment>
	);
}

export default DeleteRecipeDialog;
