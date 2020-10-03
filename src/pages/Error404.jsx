import React from 'react';
import Header from "../components/Header";
import {Link} from "react-router-dom";
import './404.css';

export const Error404 = () => {
    return (
        <div>
            <Header error="true"/>
            <div className="content">
                <div className="contact">
                    <h1>Error 404</h1>
                    <h2>The page
                        <code> {document.location.pathname.substr(1).split("%20").join(" ")} </code>
                        does not exist</h2>
                    <a href="/">Return to Home</a>
                </div>
            </div>
        </div>
    );
};