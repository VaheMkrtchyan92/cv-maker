import React from 'react';
import "./good-comented.css";
import CarouselPage from "./CarouselPage";
import CvCarusel from "../../pages/carusel-cv/carusel-cv-component";
import TrueFalse from "../../pages/true-falseCv";
import Question from "../section/questions";


class Coment extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <>
                <CvCarusel/>
                <TrueFalse/>
                <Question/>
                <div className="coment-component">
                    <h3 className="ankexc-karciqner">Անկեղծ կարծիքներ <span>Facebook-ից</span></h3>
                    <div className="slider">
                        <CarouselPage/>
                    </div>
                </div>
            </>
        )
    }
}

export default Coment;