import React from "react"
import "./sort-table-component.css"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import SectionBasic from "../../../sections/basic";
import SectionEducation from "../../../sections/educations";
import SectionWork from "../../../sections/works"
import SectionQualifications from "../../../sections/qualification";
import SectionInterests from "../../../sections/interest";
import SectionReferences from "../../../sections/reference";

export default class SortTable extends React.Component {
    render() {
        return (
            <Router>
                <div className="sort-table">
                    <ul className="noul-ui-sortable">

                        <li className="item-section-basic"><Link to="/cv-maker/sections/basic">Общая </Link>
                        </li>
                        <li className="item-section-education"><Link to="/cv-Maker/section/education">Образование</Link>
                        </li>
                        <li className="item-section-work-selected"><Link to="/cv-Maker/section/work">Опыт работы</Link>
                        </li>
                        <li className="item-section-qualifications"><Link to="/cv-Maker/sectionq/qualifications">Квалификация</Link>
                        </li>
                        <li className="item-section-interests"><Link to="/cv-Maker/section/interests">Интересы</Link>
                        </li>
                        <li className="item-section-references"><Link
                            to="/cv-Maker/SectionReferences">Рекомендации</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route exact path="/cv-maker/sections/basic" component={SectionBasic}/>
                        <Route path="/cv-Maker/section/education" component={SectionEducation}/>
                        <Route path="/cv-Maker/section/work" component={SectionWork}/>
                        <Route path="/cv-Maker/section/qualifications" component={SectionQualifications}/>
                        <Route path="/cv-Maker/section/interests" component={SectionInterests}/>
                        <Route path="/cv-Maker/section/references" component={SectionReferences}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}



