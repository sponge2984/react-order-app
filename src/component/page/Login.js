import React, { useState, useContext, useReducer } from "react";
import { useHistory } from "react-router-dom";
import { authContext } from "../customhooks/useAuth";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";

import FormControl from "@material-ui/core/FormControl";
import loginBackground from "../../assets/images/loginbackground.jpg";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
const useStyles = makeStyles((theme) => ({
    loginWrapper: {
        width: "100vw",
        height: "100vh",
        display: "flex",
        backgroundImage: `url(${loginBackground})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        justifyContent: "center",
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: "25ch",
        margin: theme.spacing(1),
    },
    formContainer: {
        background: "#fff",
        width: "300px",
        height: "320px",
        margin: "10px auto",
        borderRadius: "5px",
        boxShadow:
            "0px 2px 4px -1px rgba(0,0,0,0.1), 0px 4px 4px 0px rgba(0,0,0,0.18), 0px 1px 10px 0px rgb(0,0,0,0.22)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    loginBtn: {
        margin: "30px 10px 10px 10px",
        background: "#5b96e0",
        "&:hover": {
            background: "#2e6ab5",
        },
    },
}));

function loginReducer(state, action) {
    switch (action.type) {
        case "field": {
            return {
                ...state,
                [action.fieldName]: action.payload,
            };
        }
        case "login": {
            return {
                ...state,
                error: "",
                isLoading: true,
            };
        }
        case "success": {
            return {
                ...state,
                isLoggedIn: true,
                isLoading: false,
            };
        }
        case "error": {
            return {
                ...state,
                error: "Incorrect username or password!",
                isLoggedIn: false,
                isLoading: false,
                username: "",
                password: "",
            };
        }
        case "logOut": {
            return {
                ...state,
                isLoggedIn: false,
            };
        }
        default:
            return state;
    }
}

const initialState = {
    username: "",
    password: "",
    isLoading: false,
    error: "",
    isLoggedIn: false,
};

export default function Login() {
    const classes = useStyles();
    let history = useHistory();
    let auth = useContext(authContext);

    const [state, dispatch] = useReducer(loginReducer, initialState);
    const { username, password, isLoading, error } = state;
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "login" });
        try {
            await auth.signin({ username, password }, () => {
                dispatch({ type: "success" });
                history.push("/");
            });
        } catch (error) {
            dispatch({ type: "error" });
        }
    };

    const handleChange = (prop) => (event) => {
        console.log("handleChange:", prop);
        dispatch({
            type: "field",
            fieldName: prop,
            payload: event.currentTarget.value,
        });
    };

    return (
        <div className={classes.loginWrapper}>
            <div className={classes.formContainer}>
                <p>Login page </p>
                {error && <p className="error">{error}</p>}
                <FormControl className={classes.textField} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-username">
                        UserName
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-username"
                        type={"text"}
                        value={username}
                        onChange={handleChange("username")}
                        labelWidth={70}
                    />
                </FormControl>
                <FormControl className={classes.textField} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                        Password
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={handleChange("password")}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    onMouseDown={(event) =>
                                        event.preventDefault()
                                    }
                                    edge="end"
                                >
                                    {showPassword ? (
                                        <Visibility />
                                    ) : (
                                        <VisibilityOff />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={70}
                    />
                </FormControl>
                <Button
                    onClick={onSubmit}
                    variant="contained"
                    color="primary"
                    disabled={isLoading}
                    className={classes.loginBtn}
                >
                    {isLoading ? "Logging in..." : "Log In"}
                </Button>
            </div>
        </div>
    );
}
