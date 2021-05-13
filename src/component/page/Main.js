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
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    navigationContainer: {
        height: "auto",
        background: "linear-gradient(to right, #172f5a, #102f69, #09284a)",
        boxShadow:
            "0px 2px 4px -1px rgba(0,0,0,0.12), 0px 4px 5px 0px rgba(0,0,0,0.16), 0px 1px 10px 0px rgba(0,0,0,0.22)",
        zIndex: 1300,
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
            [theme.breakpoints.down("sm")]: {
                minWidth: "60px",
            },
        },
        "& .Mui-selected": {
            color: "#fff",
        },
    },
    authBtn: {
        margin: "0 10px",
        "& button": {
            backgroundColor: "#5b96e0",
            "&:hover": { backgroundColor: "#3e75b9" },
        },
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
    const theme = useTheme();
    const isWebSize = useMediaQuery(theme.breakpoints.up("md"));
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
        <AppBar position="sticky">
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
                    {isWebSize && (
                        <Typography variant="h6" className={classes.title}>
                            Order App
                        </Typography>
                    )}
                </span>
                <span className="navigationRight">
                    <BottomNavigation
                        value={value}
                        onChange={handleChange}
                        showLabels={false}
                        className={classes.navigation}
                    >
                        {MenuLists.map((item, idx) => (
                            <BottomNavigationAction
                                key={idx}
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
