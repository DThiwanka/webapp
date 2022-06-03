import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

//imports
import adminprofile from "./components/admin_profile/adminprofile";
import home from "./components/home/home"

function App() {
    return (
        <BrowserRouter key={App.BrowserRouter}>
            <Route path="/" exact component={home} key={App.home}></Route>
            <Route path="/admin" exact component={adminprofile} key={App.adminprofile}></Route>
        </BrowserRouter>

    )
}

export default App