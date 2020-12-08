import React from "react";
import { useStyles } from "../styled/styledMain";
function Manage() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1>Manage</h1>
        </div>
    );
}

export default Manage;
