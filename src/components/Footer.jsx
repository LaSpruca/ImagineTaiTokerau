import React from 'react';

const error = () => document.title === "Imagine Tai Tokerau | 404" ? "error" : "";

export const Footer = () => (
    <div className={"footer " + error()}>
        <h5>&#169;ImagineTaiTokerau 2020</h5>
    </div>
);
