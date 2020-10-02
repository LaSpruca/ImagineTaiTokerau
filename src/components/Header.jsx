import React, {Component} from 'react';
import logo from '../assets/image/logo.png'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {showNav: false};

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
                    <a href="/" className="nav-link">
                        <span className="oi oi-home"/> Home
                    </a>

                    <a href="/about" className="nav-link">
                        <span className="oi oi-question-mark"/> About
                    </a>

                    <a href="/ideas" className="nav-link">
                        <span className="oi oi-cloud"/> Ideas
                    </a>

                    <a href="/experts" className="nav-link">
                        <span className="oi oi-book"/> Experts
                    </a>

                    <a href="/participants" className="nav-link">
                        <span className="oi oi-people"/> Participants
                    </a>

                    <a href="/register" className="nav-link">
                        <span className="oi oi-pencil"/> Registor
                    </a>

                    <a href="/contact" className="nav-link">
                        <span className="oi oi-envelope-open"/> Contact
                    </a>
                </div>
            </div>
            </header>
        );
    }
}

export default Header;
