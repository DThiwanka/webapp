import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//imports
import adminprofile from "./components/admin_profile/adminprofile";
import home from "./components/home/home"
<<<<<<< HEAD
import login from "./components/login/login"
import Nav from "./components/navbar/navbar"

function App() {
    return (
        <BrowserRouter key={App.BrowserRouter}>
            <Nav/>
            <Route path="/" exact component={home} key={App.home}></Route>
            <Route path="/admin" exact component={adminprofile} key={App.adminprofile}></Route>
            <Route path="/login" exact component={login} key={App.login}></Route>
        </BrowserRouter>
=======
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
>>>>>>> c438167a53fd20ade61964d883c5fad937bc8351

    )
}

export default App