import React from 'react';
import FilterController from "../Filter/FilterController";
import ListController from "../List/ListController";

export default class CatalogView extends React.Component {
    render() {
        return (
            <div className="row landing">
                <div className="col-lg-3">
                    <FilterController onProductChange = {this.props.self}/>
                </div>
                <div className="col-lg-9">
                    <ListController products = {this.props.products}/>
                </div>
            </div>
        )
    }
}
