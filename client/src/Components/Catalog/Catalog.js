import React from 'react';
import Filter from "./Filter";
import List from "./List";


export default class Catalog extends React.Component {
    render() {
        return (
            <div className="row landing">
                <div className="col-lg-3">
                    <Filter />
                </div>
                <div className="col-lg-9">
                    <List />
                </div>
            </div>
        )
    }
}
