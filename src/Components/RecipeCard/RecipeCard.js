import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SimpleModal from './dialogs/EditRecipeDialog'
import { axiosWithAuth } from "../../API/AxiosWithAuth";
import EditRecipeDialog from './dialogs/EditRecipeDialog'
import DeleteRecipeDialog from "./dialogs/deleteRecipeDialog";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
		backgroundColor: "#D9F8FE",
	},
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: "rotate(180deg)",
	},
	avatar: {
		width: "11vw",
		backgroundColor: "#8EDDFD",
    },
    title: {
        fontStyle: "italic",
        fontSize: "5vw",
    },
    content: {
        font: "",
},
}));



function RecipeCard({
	recipeOrigin,

	categoryId,
	userId,

	ingredients,

	recipeName,
	steps,
	recipeImage,
}) {
	const classes = useStyles();
	const [expanded, setExpanded] = useState(false);
	const [recipes, setRecipes] = useState([]);
	const [editRecipe, setEditRecipe] = useState(false)

    
    
    
    
    //API CALL
	useEffect(() => {
		axiosWithAuth()
			.get("/recipes")
			.then((res) => console.log(res))
			.catch((err) => console.log(err.response));
    }, []);

    
	console.log(recipes);
	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card className={classes.root}>
			<CardHeader
				avatar={
					<Avatar aria-label="recipe" className={classes.avatar}>
						DESSERT
					</Avatar>
				}
				title={recipeName}
				//subheader="September 14, 2016"
			/>
			<CardMedia
				className={classes.media}
				image={recipeImage}
				title="Image of Recipe"
			/>
			<CardContent>
				<Typography variant="body2" color="textSecondary" component="p">
					{recipeOrigin}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<DeleteRecipeDialog />
				<EditRecipeDialog />

				<IconButton
					className={clsx(classes.expand, {
						[classes.expandOpen]: expanded,
					})}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<ExpandMoreIcon />
				</IconButton>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Typography paragraph className={classes.title}>
						Ingredients:
					</Typography>
					<Typography paragraph className={classes.content}>
						{ingredients}
					</Typography>
					<Typography paragraph className={classes.title}>
						Steps
					</Typography>
					<Typography paragraph className={classes.content}>
						{steps}
					</Typography>
				</CardContent>
			</Collapse>
		</Card>
	);
}
const mapStateToProps = (state) => {
	return state;
};

export default connect(mapStateToProps)(RecipeCard);
