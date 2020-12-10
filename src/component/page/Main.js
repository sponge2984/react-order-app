import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { AuthButton } from "../customhooks/useAuth";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { MenuLists } from "../helper";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    authBtn: {
        position: "absolute",
        right: 0,
        top: 0,
        margin: "0 10px",
    },
});
const pathLists = MenuLists.map((item) => item.path);
function getDefaultIndex(path) {
    const getIndex = pathLists.indexOf(path);
    return getIndex > -1 ? getIndex : 0;
}
export function MenuTabs() {
    const classes = useStyles();

    let history = useHistory();
    const location = useLocation();
    const [value, setValue] = React.useState(
        getDefaultIndex(location.pathname)
    );
    const handleChange = (event, newValue) => {
        setValue(newValue);
        history.push(pathLists[newValue]);
    };
    return (
        <Paper square className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="secondary"
                aria-label="icon label tabs example"
                centered
            >
                {MenuLists.map((item) => (
                    <Tab icon={item.icon} label={item.label} />
                ))}
            </Tabs>
            <AuthButton className={classes.authBtn} />
        </Paper>
    );
}
export function MainRoute({ children }) {
    return (
        <>
            <MenuTabs />
            {children}
        </>
    );
}
