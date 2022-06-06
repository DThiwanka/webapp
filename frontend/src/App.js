import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

//imports
import adminprofile from "./components/admin_profile/adminprofile";
import home from "./components/home/home"
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

    )
}

export default App