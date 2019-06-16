import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CvMaker from "./pages/cv-maker/cv-make-component";
import { createBrowserHistory } from "history"
import MainPage from "./pages/main/index";
import Navbar from "./shared/top-header/Navbar"
import Footer from "./shared/footer/footer-component";

const history = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router history={history}>
                    {/*Header*/}
                    <Navbar/>

                    {/*Content Components (pages)*/}

                    <Switch>
                        <Route exact path="/" component={MainPage}/>
                        <Route path="/cv-maker" component={CvMaker}/>
                    </Switch>


                    {/*Footer*/}
                    <Footer/>
                </Router>
            </div>
        );
    }
}

export default App;