import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./component/page/Login";
import Order from "./component/page/Order";
import Manage from "./component/page/Manage";
import Meals from "./component/page/Meals";
import { ProvideAuth, PrivateRoute } from "./component/customhooks/useAuth";
import { MainRoute } from "./component/page/Main";
function App() {
    return (
        <div className="App">
            <ProvideAuth>
                <Router>
                    <Switch>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <MainRoute>
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
                        </MainRoute>
                    </Switch>
                </Router>
            </ProvideAuth>
        </div>
    );
}

export default App;
