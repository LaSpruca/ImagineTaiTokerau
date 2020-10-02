import React, {Component} from 'react';
import Header from "../components/Header";

class Participants extends Component {

    render() {
        return (
            <div>
                <Header/>
                <div className="content">
                    <div className="participants">
                        <h3>Participants</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Participants;
