import React, { useContext, useState } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
export const authContext = React.createContext();

function useProvideAuth() {
    const [user, setUser] = useState({
        info: null,
        token: localStorage.getItem("token") || null,
        isLoggedIn: !!localStorage.getItem("token"),
    });
    const signin = (identity, cb) => {
        /*fetch("http://localhost:5555/items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(identity),
            })
            .then((response) => {
                setUser(identity.username);
                //ok 代表狀態碼在範圍 200-299
                if (!response.ok) throw new Error(response.statusText);
                return response.json();
            })
            .then((item) => {
                //get jwt token
                //這裡可以顯示一些訊息，或是結束指示動畫…
                //console.log(item)
                setUser(identity.username);
                localStorage.setItem("token", "test");
                cb();
            })
            .catch((error) => {
                //這裡可以顯示一些訊息
                console.error(error);
            });*/
        localStorage.setItem("token", "test");
        setUser({ info: identity.username, token: "test", isLoggedIn: true });
        setTimeout(cb, 1000); // fake async
    };

    const signout = (cb) => {
        setUser({ info: null, token: null, isLoggedIn: false });
        localStorage.removeItem("token");
        setTimeout(cb, 100);
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
                auth.user.isLoggedIn ? (
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
            {auth.user.isLoggedIn ? (
                <p>
                    <span className="userName">{`Welcome!! ${
                        auth.user.info || ""
                    } `}</span>
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
