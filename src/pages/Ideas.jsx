import React, {Component} from 'react';
import Header from "../components/Header";

class Ideas extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="content">
                    <div className="ideas">
                        <h3>Ideas</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ideas;
