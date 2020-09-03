// external
import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// internal
import { Auth, Home } from './pages';
import { useSelector } from 'react-redux';

//
// const socket = io();
// socket.on('SERVER_NEW_MESSAGE', function (msg) {
//     console.log(msg);
// });

function App() {
    const { userData } = useSelector(state => state.user);

    return (
        <div className='wrapper'>
            <Switch>
                <Route
                    exact
                    path={["/signin", "/signup"]}
                    render={() => (userData.isAuth ? <Redirect to="/" /> : <Auth />)}
                />
                <Route
                    path="/"
                    render={() => (userData.isAuth ? <Home /> : <Redirect to="/signin" />)}
                />
            </Switch>
        </div>
    );
}

export default App;
