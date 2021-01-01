import React from "react";
import { useStylesMain } from "../styled/styledMain";
import { useStylesMeals } from "../styled/styledMeals";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
function Meals() {
    const classesMain = useStylesMain();
    const classesMeals = useStylesMeals();

    return (
        <div className={classesMain.root}>
            <Grid item xs={12} md={6} className={classesMeals.mealsLeftSide}>
                <h1>準備中Coming</h1>

                <List
                    component="nav"
                    className={classesMeals.prepareList}
                    aria-label="mailbox folders"
                >
                    {["1221", "2321", "3422", "1234", "2343", "3412"].map(
                        (el) => (
                            <ListItem button>
                                <ListItemText
                                    primary={el}
                                    className="listItem"
                                />
                            </ListItem>
                        )
                    )}
                </List>
            </Grid>

            <Grid item xs={12} md={6} className={classesMeals.mealsRightSide}>
                <h1>請取餐Served</h1>
                <List
                    component="nav"
                    className={classesMeals.alreadyList}
                    aria-label="mailbox folders"
                >
                    {["5163", "2151", "3452", "2351", "2156"].map((el) => (
                        <ListItem button>
                            <ListItemText primary={el} className="listItem" />
                        </ListItem>
                    ))}
                </List>
            </Grid>
        </div>
    );
}

export default Meals;
