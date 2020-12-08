import React from "react";
import { useStyles } from "../styled/styledMain";
function Meals() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1>Meals</h1>
        </div>
    );
}

export default Meals;
