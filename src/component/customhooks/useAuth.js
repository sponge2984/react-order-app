import React, { useContext, useState, useEffect } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { useQuery } from "react-query";
import axios from "axios";
import { AuthContext } from "../Context";
import { MenuTabs } from "../page/Main";
//root ,qaz12y7
const checkdata = (obj) => obj.name !== "" && obj.pass !== "";
const dataProcess = (obj) => {
    const loginfo = new URLSearchParams();
    loginfo.append("username", obj.name);
    loginfo.append("password", obj.pass);
    return loginfo;
};
const getTokenFetcher = ({ queryKey }) =>
    checkdata(queryKey[1])
        ? axios
              .post(queryKey[0], dataProcess(queryKey[1]))
              .then((res) => res.data)
        : null;

function useAuth(postData) {
    const { data, isFetching, isError, refetch } = useQuery(
        ["/api/login/token", postData],
        getTokenFetcher,
        {
            retry: false,
            refetchOnWindowFocus: false,
            enabled: false, //checkdata(postData),
        }
    );

    return {
        token: data,
        isLoading: isFetching,
        isError: isError,
        refetch: refetch,
    };
}

export function ProvideAuth({ children }) {
    const [params, setParams] = useState({ name: "", pass: "" });
    let history = useHistory();
    const { token, isLoading, isError, refetch } = useAuth(params);

    const [authState, setAuthState] = React.useState({
        token: localStorage.getItem("token") || "",
        refreshToken: "",
        isLoading: isLoading,
        isError: isError,
        signIn: (n, p) => goSignIn(n, p),
        signOut: () => goSignOut(),
    });

    useEffect(() => {
        refetch();
    }, [params]);

    useEffect(() => {
        setAuthState({ ...authState, isError: isError, isLoading: isLoading });
    }, [isError, isLoading]);

    /*登入成功取得token*/
    useEffect(() => {
        if (!!token) {
            setAuthState({ ...authState, token: token["access_token"] });
            localStorage.setItem("token", token["access_token"]);
            history.push("/");
        }
    }, [token]);

    function goSignIn(n, p) {
        if (n !== "" && p !== "") {
            setParams({ name: n, pass: p });
        }
    }

    function goSignOut() {
        localStorage.removeItem("token");
        setAuthState({ ...authState, token: "" });
        history.push("/login");
    }

    const updateAuth = (obj) => {
        setAuthState({ ...authState, ...obj });
    };

    return (
        <AuthContext.Provider
            value={{ auth: authState, updateAuth: updateAuth }}
        >
            {children}
        </AuthContext.Provider>
    );
}

//檢查Token route
export function PrivateRoute({ children, ...rest }) {
    let { auth } = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.token ? (
                    <>
                        <MenuTabs />
                        {children}
                    </>
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
}

export function AuthButton({ className }) {
    let history = useHistory();
    let { auth } = useContext(AuthContext);
    const theme = useTheme();
    const isWebSize = useMediaQuery(theme.breakpoints.up("md"));
    return (
        <div className={className}>
            {auth.token ? (
                <p>
                    <span className="userName"></span>
                    <Button
                        onClick={() => {
                            auth.signOut(() => history.push("/login"));
                        }}
                        variant="contained"
                        color="secondary"
                        style={{ textTransform: "initial" }}
                    >
                        {isWebSize ? "Sign Out" : "Logout"}
                    </Button>
                </p>
            ) : (
                <p>You are not logged in.</p>
            )}
        </div>
    );
}
