import React from "react";
import { useStylesMain } from "../styled/styledMain";
function Manage() {
    const classes = useStylesMain();
    return (
        <div className={classes.root}>
            <h1>Manage</h1>
        </div>
    );
}

export default Manage;
