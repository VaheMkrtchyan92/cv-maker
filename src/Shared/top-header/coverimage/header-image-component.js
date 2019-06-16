import React from "react"
import "./header-image-component.css"
import PickButton from "../../buttons/format-button-component"
const HeaderImage = () => {
    return (
        <>

            <div className="header-image">
                <div className="color-image">
                    <div></div>
                    <PickButton />

                </div>
            </div>
        </>
    )
}
export default HeaderImage