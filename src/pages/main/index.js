import React, {Component} from 'react';
import Coment from '../../shared/content/good-comented'
import Question from '../../shared/section/questions'



class MainPage extends Component {
    render() {
        return (
            <div>
                <Coment/>
                <Question/>


            </div>
        );
    }
}

export default MainPage;