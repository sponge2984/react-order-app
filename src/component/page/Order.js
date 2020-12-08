import React from "react";
import { useStyles } from "../styled/styledMain";
function Order() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1>Order</h1>
        </div>
    );
}

export default Order;
