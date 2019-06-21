import React from 'react';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';
import PickButton from "../../shared/buttons/format-button-component";

export default class CvCarusel extends React.Component{
constructor(props){
    super(props)
}
    render() {
        return(
            <StyleRoot>
                <div className="color-image">
                    <div></div>
                <PickButton />
                </div>
                <Coverflow
                    displayQuantityOfSide={2}
                    navigation
                    infiniteScroll
                    enableHeading
                    media={{
                        '@media (max-width: 900px)': {
                            width: '100%',
                            height: '300px'
                        },
                        '@media (min-width: 900px)': {
                            width: '100%',
                            height: '600px'
                        }
                    }}
                >

                    <img src='https://d.novoresume.com/images/doc/functional-cv-template.png' alt='CV one' data-action="https://facebook.github.io/react/"/>
                    <img src='https://i.etsystatic.com/10284511/r/il/342ede/709622328/il_794xN.709622328_6weh.jpg' alt='CV two' data-action="http://passer.cc"/>
                    <img src='https://i.etsystatic.com/10284511/r/il/342ede/709622328/il_794xN.709622328_6weh.jpg' alt='CV three' data-action="https://doce.cc/"/>
                    <img src='https://i.etsystatic.com/10284511/r/il/342ede/709622328/il_794xN.709622328_6weh.jpg' alt='CV four' data-action="http://tw.yahoo.com"/>
                    <img src='https://i.etsystatic.com/10284511/r/il/342ede/709622328/il_794xN.709622328_6weh.jpg' alt='CV four' data-action="http://tw.yahoo.com"/>
                    <img src='https://i.etsystatic.com/10284511/r/il/342ede/709622328/il_794xN.709622328_6weh.jpg' alt='CV four' data-action="http://tw.yahoo.com"/>
                    <img src='https://gazeta.spb.ru/f/a0/ru/auto/201810/11154542.1.jpg' alt='CV four' data-action="http://tw.yahoo.com"/>
                    <img src='https://gazeta.spb.ru/f/a0/ru/auto/201810/11154542.1.jpg' alt='CV four' data-action="http://tw.yahoo.com"/>
                    <img src='https://gazeta.spb.ru/f/a0/ru/auto/201810/11154542.1.jpg' alt='CV four' data-action="http://tw.yahoo.com"/>
                    <img src='https://gazeta.spb.ru/f/a0/ru/auto/201810/11154542.1.jpg' alt='CV four' data-action="http://tw.yahoo.com"/>
                </Coverflow>

            </StyleRoot>

        )
    }
}


