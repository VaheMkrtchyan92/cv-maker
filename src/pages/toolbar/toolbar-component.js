import React from "react"
import ShowDownload from "./showdownload/showDownload-component";


export default class ToolBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }

    toggleDownload = () => {
        this.setState({
            show: !this.state.show
        });
    };

    render() {
        return (
            <div className="btns-section">
                <div></div>
                <div className="right-btns">
                    <button>yes</button>
                    <button>No</button>
                    <button><i className="fas fa-0.5px fa-info-circle"></i> Help</button>
                    <button><i className="far fa 0.5px fa-save"></i> save</button>
                    <button onClick={this.toggleDownload}><i
                        className="fas fa 0.5px fa-cloud-download-alt"></i> download
                    </button>
                </div>
                <ShowDownload onClose={this.toggleDownload}
                show={this.state.show}/>
            </div>
        )
    }
}