import React from "react"
import "./showDownload-component.css"


class ShowDownload extends React.Component {
    onClose = (e) => {
        this.props.onClose(e);
    };

    render() {
        if (this.props.show) {
            // document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
            return null;
        }

        return (
            <div className="download-block">
                <div className="back-download-style">
                    <div className="download-style">
                        <h3>Выберите стиль</h3>
                        <div className="download-input-text">
                            <input type="text" placeholder="Электронная почта"/>
                            <input type="checkbox" placeholder="Пароль" maxLength="10"></input>
                            <input type="radio" placeholder="Пароль" maxLength="10" hhhhhh />
                            <input type="checkbox" placeholder="Пароль" maxLength="10"/>
                            <input type="checkbox" placeholder="Пароль" maxLength="10"/>
                            <input type="checkbox" placeholder="Пароль" maxLength="10"/>
                            <input type="checkbox" placeholder="Пароль" maxLength="10"/>
                            <input type="checkbox" placeholder="Пароль" maxLength="10" />
                        </div>
                        <div className="modal-footer">
                            <button onClick={this.onClose}>
                                Закрыть
                            </button>
                            <button>Download</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default ShowDownload;