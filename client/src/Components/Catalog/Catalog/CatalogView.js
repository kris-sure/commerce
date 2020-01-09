import React from 'react';
import FilterController from "../Filter/FilterController";
import ListController from "../List/ListController";

export default class CatalogView extends React.Component {
    render() {
        return (
            <div className="row landing">
                <div className="col-lg-3">
                    <FilterController
                        onProductChange = {this.props.self}
                        onChangeChecked = {this.props.onChangeChecked}
                        onChangeSort = {this.props.onChangeSort}
                        onChangeName = {this.props.onChangeName}
                    />
                </div>
                <div className="col-lg-9">
                    <ListController onProductChange = {this.props.self} products = {this.props.products} />
                </div>
            </div>
        )
    }
}
