import React, { useContext, useState } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
export const authContext = React.createContext();

const fakeAuth = {
    isAuthenticated: false,
    signin(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    },
};
function useProvideAuth() {
    const [user, setUser] = useState(localStorage.getItem("token") || null);

    const signin = (cb) => {
        return fakeAuth.signin(() => {
            //get jwt token
            setUser("user");
            localStorage.setItem("token", "test");
            cb();
        });
    };

    const signout = (cb) => {
        return fakeAuth.signout(() => {
            setUser(null);
            localStorage.removeItem("token");
            cb();
        });
    };

    return {
        user,
        signin,
        signout,
    };
}

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export function PrivateRoute({ children, ...rest }) {
    let auth = useContext(authContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user ? (
                    children
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
    let auth = useContext(authContext);

    return (
        <div className={className}>
            {auth.user ? (
                <p>
                    {`Welcome!! ${auth.username || ""}`}
                    <Button
                        onClick={() => {
                            auth.signout(() => history.push("/login"));
                        }}
                        variant="contained"
                        color="secondary"
                    >
                        Sign out
                    </Button>
                </p>
            ) : (
                <p>You are not logged in.</p>
            )}
        </div>
    );
}
