import React from "react"
import Download from "./sectionDownload/dowload-component"
import "./cv-make-component.css"
import ToolBar from "../toolbar/toolbar-component";
import Options from "./sectionOptions/options-component";

export default class CvMaker extends React.Component {


    render() {
        return (
            <div className="section">
                <Download/>
                <ToolBar/>
                <Options/>
            </div>
        )
    }
}