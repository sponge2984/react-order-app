import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { AuthButton } from "../customhooks/useAuth";
import { makeStyles } from "@material-ui/core/styles";
import { MenuLists } from "../helper";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        height: "11vh",
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
        <>
            <BottomNavigation
                value={value}
                onChange={handleChange}
                showLabels
                className={classes.root}
            >
                {MenuLists.map((item) => (
                    <BottomNavigationAction
                        label={item.label}
                        icon={item.icon}
                    />
                ))}
            </BottomNavigation>
            <AuthButton className={classes.authBtn} />
        </>
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
