import React, { useContext } from "react";
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

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: "25ch",
        },
    },
    loginWrapper: {
        width: "50%",
        height: "50%",

        margin: "10px auto",
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: "25ch",
    },
    formContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "10px",
    },
}));
export default function Login() {
    const classes = useStyles();
    let history = useHistory();
    let auth = useContext(authContext);
    const [values, setValues] = React.useState({
        username: "",
        password: "",
        weight: "",
        weightRange: "",
        showPassword: false,
    });

    let login = () => {
        auth.signin(() => {
            history.push("/");
        });
    };
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <div className={classes.loginWrapper}>
            <div className={classes.formContainer}>
                <p>Login page </p>
                <FormControl
                    className={clsx(classes.margin, classes.textField)}
                    variant="outlined"
                >
                    <InputLabel htmlFor="outlined-adornment-username">
                        UserName
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-username"
                        type={"text"}
                        value={values.username}
                        onChange={handleChange("username")}
                        labelWidth={70}
                    />
                </FormControl>
                <FormControl
                    className={clsx(classes.margin, classes.textField)}
                    variant="outlined"
                >
                    <InputLabel htmlFor="outlined-adornment-password">
                        Password
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? "text" : "password"}
                        value={values.password}
                        onChange={handleChange("password")}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? (
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
                    onClick={login}
                    style={{ margin: "10px" }}
                    variant="contained"
                    color="primary"
                >
                    Login
                </Button>
            </div>
        </div>
    );
}
