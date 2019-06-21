import React from "react"
import "./index.css"

export default class TrueFalse extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <h1 className="true-false-cv-text">True and False CV</h1>
                    <div className="hhhh">
                        <div className="true-false-cv">
                                <div className="true-block">
                                    <i className="fas fa-4x fa-check"></i>
                                    <span>True</span>
                                    <div className="cv-image-wrong"></div>
                                </div>
                                <div className="wrong-block">
                                  <i className="far fa-4x fa-times-circle"></i>
                                    <span>Wrong</span>
                                    <div className="cv-image-true"></div>
                                </div>
                        </div>
                    </div>

            </>
        )
    }
}