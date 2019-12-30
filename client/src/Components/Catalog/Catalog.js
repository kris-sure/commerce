import React from 'react';
import Filter from "./Filter";
import List from "./List";
import axios from "axios";


export default class Catalog extends React.Component {
    state = {
        products: []
    };

    componentDidMount() {
        axios.get(`http://localhost:9999/products`)
            .then(res => {
                const products = JSON.parse(res.data);
                this.setState({ products });
            });
    }

    render() {
        return (
            <div className="row landing">
                <div className="col-lg-3">
                    <Filter products = {this.state.products}/>
                </div>
                <div className="col-lg-9">
                    <List products = {this.state.products}/>
                </div>
            </div>
        )
    }
}
