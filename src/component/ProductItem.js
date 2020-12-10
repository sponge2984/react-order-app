import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import clsx from "clsx";
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        width: "30%",
        height: "200px",
        margin: "5px",
    },
});

function ProductItem({ className, itemInfo, onSelect }) {
    const classes = useStyles();
    const handleAddItem = () => {
        onSelect(itemInfo);
    };
    return (
        <Card className={clsx(classes.root, className)} onClick={handleAddItem}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={itemInfo.img}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {itemInfo.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default ProductItem;
