// external
import React from 'react';
import { Route } from 'react-router-dom';
// internal
import { LoginForm, RegisterForm } from '../../modules';
import "./Auth.scss";
import CheckEmailInfo from '../../components/CheckEmailInfo';

const Auth = () => {
    return (
        <section className="auth">
            <div className="auth__content">
                <Route exact path={['/','/signin']} component={LoginForm} />
                <Route exact path="/signup" component={RegisterForm} />
                <Route exact path="/signup/verify" component={CheckEmailInfo} />
            </div>
        </section>
    );
}

export default Auth;
