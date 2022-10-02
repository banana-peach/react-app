import React from "react";
import "./index.less"
import Error from "../../static/photos/error.png"
import Voice from "./voice";
import Welcome from "./refresh";

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
    refreshPage(time) {
        console.log("点击了刷新按钮, 时间是:" + time)
        window.location.reload()
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
                <button className="refresh-buttton" onClick={this.refreshPage.bind(this, new Date())}>刷新</button>
                <Voice user={this.state.voiceUsers} />
                <div className="patient-info">
                    <Welcome name={"mao"}/>
                    <div className="title">患者信息</div>
                </div>
            </div >
        )
    }
}