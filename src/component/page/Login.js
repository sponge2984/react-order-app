import React, { useState, useContext, useReducer, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../Context";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Alert from "@material-ui/lab/Alert";
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
        "& .error": {
            position: "fixed",
            top: "35px",
            width: "300px",
            zIndex: 5,
        },
    },
    loginBtn: {
        margin: "30px 10px 10px 10px",
        background: "#5b96e0",
        "&:hover": {
            background: "#2e6ab5",
        },
    },
}));

export default function Login() {
    const classes = useStyles();
    let { auth } = useContext(AuthContext);
    const { isLoading, isError, signIn } = auth;

    const [payload, setPayload] = useState({
        n: "",
        p: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isShowError, setIsShowError] = useState(false);
    const onSubmit = () => {
        signIn(payload.n, payload.p);
    };

    const handleChange = (prop) => (event) => {
        setPayload({ ...payload, [prop]: event.currentTarget.value });
    };
    useEffect(() => {
        if (isError) {
            setIsShowError(true);
        }
    }, [isError]);
    return (
        <div className={classes.loginWrapper}>
            <div className={classes.formContainer}>
                <p>登入</p>
                {isShowError && (
                    <Alert
                        severity="error"
                        variant="filled"
                        className="error"
                        onClose={() => setIsShowError(false)}
                    >
                        帳號密碼錯誤請重新輸入
                    </Alert>
                )}
                <FormControl className={classes.textField} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-username">
                        UserName
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-username"
                        type={"text"}
                        value={payload.n}
                        onChange={handleChange("n")}
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
                        value={payload.p}
                        onChange={handleChange("p")}
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
