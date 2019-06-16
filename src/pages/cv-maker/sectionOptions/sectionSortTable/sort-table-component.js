import React from "react"
import "./sort-table-component.css"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import SectionBasic from "../../../sections/basic";
import SectionEducation from "../../../sections/educations";

export default class SortTable extends React.Component {
    render() {
        return (
            <Router>
                <div className="sort-table">
                    <ul className="noul-ui-sortable">

                        <li className="item-section-basic"><Link to="/cv-maker/sections/basic">Общая </Link>
                        </li>
                        <li className="item-section-education"><Link to="/cv-Maker/SectionEducation">Образование</Link>
                        </li>
                        <li className="item-section-work-selected"><Link to="/cv-Maker/SectionWork">Опыт работы</Link>
                        </li>
                        <li className="item-section-qualifications"><Link to="/cv-Maker/SectionWork">Квалификация</Link>
                        </li>
                        <li className="item-section-interests"><Link to="/cv-Maker/SectionInterests">Интересы</Link>
                        </li>
                        <li className="item-section-references"><Link
                            to="/cv-Maker/SectionReferences">Рекомендации</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route exact path="/cv-maker/sections/basic" component={SectionBasic}/>
                        <Route path="/cv-Maker/SectionEducation" component={SectionEducation}/>
                        <Route path="/cv-Maker/SectionWork" component={SectionWork}/>
                        <Route path="/cv-Maker/SectionQualifications" component={SectionQualifications}/>
                        <Route path="/cv-Maker/SectionInterests" component={SectionInterests}/>
                        <Route path="/cv-Maker/SectionReferences" component={SectionReferences}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}
const SectionWork = () => (
    <div className="section-work">
        <h1>fhgidfhgihdfig</h1>
        <form action="">
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
        </form>
    </div>
)
const SectionQualifications = () => (
    <div className="section-qualifications">
        <h1>fhgidfhgihdfig</h1>
        <form action="">
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
        </form>
    </div>
)
const SectionInterests = () => (
    <div className="section-interests">
        <h1>fhgidfhgihdfig</h1>
        <form action="">
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
        </form>
    </div>
)
const SectionReferences = () => (
    <div className="section-reference">
        <h1>fhgidfhgihdfig</h1>
        <form action="">
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
        </form>
    </div>
)