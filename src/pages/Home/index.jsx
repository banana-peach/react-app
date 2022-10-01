import React from "react";
import "./index.less"
import Error from "../../static/photos/error.png"

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelected: true,
            voiceUsers: [
                { id: 1, name: "用户1" },
                { id: 2, name: "用户2" },
                { id: 3, name: "用户3" },
            ]
        }
    }

    render() {
        return (
            <div className="home-conatiner">
                <div className="title">急救车内画面</div>
                <div className="tabs">
                    <div className="tab-row">
                        <div className={this.state.isSelected ? "selected" : ""}>监控</div>
                        <div className={this.state.isSelected ? "" : ""}>心电图</div>
                        <div className={this.state.isSelected ? "" : ""}>视频</div>
                    </div>
                    <div className="content-row">
                        <img src={Error} alt="" />
                    </div>
                </div>
                <button className="refresh-buttton">刷新</button>
                <div className="voice-room">
                    <div className="title">正在通话</div>
                    <ul className="user-list">
                        {
                            this.state.voiceUsers.map((user) => {
                                return (
                                    <li key={user.id}>{user.name}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="patient-info">

                    <div className="title">患者信息</div>
                </div>
            </div >
        )
    }
}