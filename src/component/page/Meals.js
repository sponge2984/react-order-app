import React from "react";
import { useStylesMain } from "../styled/styledMain";
function Meals() {
    const classes = useStylesMain();
    return (
        <div className={classes.root}>
            <h1>Meals</h1>
        </div>
    );
}

export default Meals;
