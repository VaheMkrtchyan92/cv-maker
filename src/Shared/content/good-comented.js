import React from 'react';
import "./good-comented.css";
import CarouselPage from "./CarouselPage";
import HeaderImage from "../top-header/coverimage/header-image-component";


class Coment extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <>
                <HeaderImage></HeaderImage>
                <div className="coment-component">
                    <h3 className="ankexc-karciqner">Անկեղծ կարծիքներ <span>Facebook-ից</span></h3>
                    <div className="slider">

                        <CarouselPage />

                    </div>
                </div>
            </>
        )
    }
}

export default Coment;