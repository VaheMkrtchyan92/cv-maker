import React from "react"
import "./options-component.css"
import SortTable from "./sectionSortTable/sort-table-component";

export default class Options extends React.Component {


    render() {
        return (
            <div className="section">
                    <SortTable/>
            </div>
        )
    }
}