import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';

function NavBar(props) {
    if(!localStorage.getItem("token")){
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        </div>
    );
    } 
    else {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link onClick={() => {console.log("Deleting token and logging out"); localStorage.removeItem("token"); props.history.push("/login"); window.location.reload();}}>Log Out</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default withRouter(NavBar);
