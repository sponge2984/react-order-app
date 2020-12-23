import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { AuthButton } from "../customhooks/useAuth";
import { makeStyles } from "@material-ui/core/styles";
import { MenuLists } from "../helper";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    navigationContainer: {
        height: "auto",
        background: "linear-gradient(to right, #24283e, #102f69, #0c1a29)",
        display: "flex",
        justifyContent: "space-between",
        "& .navigationLeft": {
            display: "flex",
            alignItems: "center",
        },
        "& .navigationRight": {
            display: "flex",
            alignItems: "center",
        },
    },
    navigation: {
        backgroundColor: "transparent",
        //height: '48px';
        "& .navigationItem": {
            color: "#ffffffba",
            "&:hover": {
                color: "#fff",
            },
        },
        "& .Mui-selected": {
            color: "#fff",
        },
    },
    authBtn: {
        margin: "0 10px",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {},
}));
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
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.navigationContainer}>
                    <span className="navigationLeft">
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Order App
                        </Typography>
                    </span>
                    <span className="navigationRight">
                        <BottomNavigation
                            value={value}
                            onChange={handleChange}
                            showLabels={false}
                            className={classes.navigation}
                        >
                            {MenuLists.map((item) => (
                                <BottomNavigationAction
                                    label={item.label}
                                    icon={item.icon}
                                    className="navigationItem"
                                />
                            ))}
                        </BottomNavigation>
                        <AuthButton className={classes.authBtn} />
                    </span>
                </Toolbar>
            </AppBar>
        </div>
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
