import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/image/logo.png';

class Header extends Component {
    constructor(props) {
        super(props);
        let currentPage = "";

        if (window.location.pathname === "/") {
            currentPage = "home";
            console.log("home");
        } else {
            currentPage = window.location.pathname.split("/")[1];
        }

        console.log(currentPage);

        this.state = {
            currentPage,
            showNav: false
        };


        document.title = "Imagine Tai Tokerau " + currentPage.split("-").map((a) => a[0].toUpperCase() + a.slice(1)).join(" ");

        this.toggleNavButton = this.toggleNavButton.bind(this);
    }

    toggleNavButton() {
        this.setState((state) => {
            return {showNav: !state.showNav}
        })
    }

    render() {
        return (
            <header>
                <div className="logo">
                    <img src={logo} alt="Imagine Tai Tokerau Logo" />
                </div>

                <div className={"nav-wrapper " + (this.state.showNav ? "" : "hidden")}>

                    <div className="nav-btn-wrapper">
                        <button onClick={this.toggleNavButton}><span className="oi oi-menu" /></button>
                </div>

                <div className="nav">
                    <Link to="/" className={"nav-link " + (this.state.currentPage === "home" ? "active" : "")}>
                        <span className="oi oi-home"/> Home
                    </Link>

                    <Link to="/about" className={"nav-link " + (this.state.currentPage === "about" ? "active" : "")}>
                        <span className="oi oi-question-mark"/> About
                    </Link>

                    <Link to="/ideas" className={"nav-link " + (this.state.currentPage === "ideas" ? "active" : "")}>
                        <span className="oi oi-cloud"/> Ideas
                    </Link>

                    <Link to="/experts" className={"nav-link " + (this.state.currentPage === "experts" ? "active" : "")}>
                        <span className="oi oi-book"/> Experts
                    </Link>

                    <Link to="/participants" className={"nav-link " + (this.state.currentPage === "participants" ? "active" : "")}>
                        <span className="oi oi-people"/> Participants
                    </Link>

                    <Link to="/register" className={"nav-link " + (this.state.currentPage === "register" ? "active" : "")}>
                        <span className="oi oi-pencil"/> Registor
                    </Link>

                    <Link to="/contact" className={"nav-link " + (this.state.currentPage === "contact" ? "active" : "")}>
                        <span className="oi oi-envelope-open"/> Contact
                    </Link>
                </div>
            </div>
            </header>
        );
    }
}

export default Header;
