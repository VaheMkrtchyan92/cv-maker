import React from "react";
import "./carouselPage.css"

import {MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer} from
        "mdbreact";

const CarouselPage = () => {
    return (
        <MDBContainer>
            <MDBCarousel
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={true}
                className="z-depth-1"
            >
                <MDBCarouselInner className="carousel-inner">
                    <MDBCarouselItem itemId="1">
                        <MDBView>
                            <div className="text-slide">
                                <img
                                    className="d-block img_3"
                                    src="https://2krota.ru/wp-content/uploads/2018/02/c698f4b736d303dbcad55635a840a31f.jpg"
                                    alt="First slide"
                                />
                                <span className="text-slides">Վահե Մկրտչյան</span>

                                <h4 className="text-slides">
                                    Հաճելի բարձր մակարդակ: Ուրախ եմ, որ ընտրել
                                    եմ ձեզ:
                                </h4>
                            </div>
                            <MDBMask overlay="black-light"/>
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBView>
                            <div className="text-slide">
                                <img
                                    className="d-block img_3"
                                    src="https://dqna.com/app/uploads/2018/11/Kate-Headshot-736x736.jpg"
                                    alt="Second slide"
                                />
                                <span className="text-slides">Աննա Հակոբյան</span>

                                <h4 className="text-slides">
                                    Եթե ցանկանում եք ունենալ լավ CV օգտվեք այս կայքից
                                </h4>
                            </div>
                            <MDBMask overlay="black-strong"/>
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        <MDBView>
                            <div className="text-slide">
                                <img
                                    className="d-block img_3"
                                    src="https://hiddeninthecrag.files.wordpress.com/2018/05/fb_img_1525282668203828521993.jpg?w=736"
                                    alt="Third slide"
                                />
                                <span className="text-slides">Լիլիթ Դավթյան</span>
                                <h4 className="text-slides">
                                    Very creative and interesting idea
                                </h4>
                            </div>
                            <MDBMask overlay="black-slight"/>
                        </MDBView>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>
    );
}

export default CarouselPage;