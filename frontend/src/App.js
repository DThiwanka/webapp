import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//imports
import adminprofile from "./components/admin_profile/adminprofile";
import home from "./components/home/home"

import Navbar from "./components/navbar/navbar"

function App() {
    return (
        <Router>
            <Navbar />
            <main>
                <Switch>

                    <Route exact path="/" component={home} />
                    <Route exact path="/admin" component={adminprofile} />

                </Switch>
            </main>

        </Router>


    )
}

export default App