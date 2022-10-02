import React from "react";
import { useLocation } from 'react-router-dom';

export default class Voice extends React.Component {
    constructor(pros) {
        super(pros)
        this.state = {

        }
    }
    componentDidMount() {
        // const location = useLocation();
        // console.log(location)

    }

    render() {
        return (
            <div className="voice-room">
                <div className="title">正在通话</div>
                <ul className="user-list">
                    {
                        this.props.user.map((user) => {
                            return (
                                <li key={user.id}>{user.name}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

}