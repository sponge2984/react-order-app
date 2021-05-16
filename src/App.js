import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./component/page/Login";
import Order from "./component/page/Order";
import Manage from "./component/page/Manage";
import Meals from "./component/page/Meals";
import { ProvideAuth, PrivateRoute } from "./component/customhooks/useAuth";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
    return (
        <div className="App">
            <Router basename={process.env.PUBLIC_URL}>
                <Switch>
                    <QueryClientProvider client={queryClient}>
                        <ProvideAuth>
                            <Route path="/login">
                                <Login />
                            </Route>
                            <PrivateRoute exact path="/">
                                <Order />
                            </PrivateRoute>
                            <PrivateRoute path="/order">
                                <Order />
                            </PrivateRoute>
                            <PrivateRoute path="/manage">
                                <Manage />
                            </PrivateRoute>
                            <PrivateRoute path="/meals">
                                <Meals />
                            </PrivateRoute>
                        </ProvideAuth>
                    </QueryClientProvider>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
