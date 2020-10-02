import React, {Component} from 'react';
import Header from "../components/Header";

class About extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="content">
                    <div className="about">
                        <h3>About</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
