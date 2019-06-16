import React from "react"
import "./modal-component.css"


class Modal extends React.Component {
    onClose = (e) => {
        this.props.onClose && this.props.onClose(e);

    }


    render() {
        if (this.props.show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
            return null;
        }

        return (
            <div className="modal-block">
                <div className="back-drop-style">
                    <div className="modal-style">
                        <h3>Вход для участников</h3>
                        <div className="input-text">
                            <input type="text" placeholder="Электронная почта"/>
                            <input type="password" placeholder="Пароль" maxLength="10"/>
                        </div>
                        <div className="modal-footer">
                            <button onClick={(e) => {
                                this.onClose(e)
                            }}>
                                Закрыть
                            </button>
                            <button>Войти</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Modal;