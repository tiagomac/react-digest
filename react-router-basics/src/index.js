import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Redirect, BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Header from "./Header";

const Home = (props) => {
    console.log(props);
    return <Redirect to="/login">Login</Redirect>;
};

const About = () => {
    return <h2>About Page</h2>;
};

const Contact = () => {
    return <h2>Contact Page</h2>;
};

const Profile = (props) => {
    console.log(props);
    return (
        <div>
            <h2>Profile Page</h2>
            <Link to="/profile/10">Edit Profile</Link>
        </div>
    );
};

const EditProfile = (props) => {
    console.log(props);
    return <p>Editing profile page of user with id {props.match.params.id} </p>;
};

const NotFound = () => {
    return <h2>Page Not found.</h2>;
};

const App2 = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact={true}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/profile" component={Profile} exact={true} />
                <Route path="/profile/:id" component={EditProfile} />
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <App2/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
