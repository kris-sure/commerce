import React from 'react';
import Filter from "./Filter";
import List from "./List";
import axios from "axios";


export default class Catalog extends React.Component {

    constructor(props) {
        super(props);
        this.setProduct = this.setProduct.bind(this);
        this.state = {products: []};
    }

    componentDidMount() {
        this.setProduct(null);
    }

    setProduct(products) {
        if (products !== null) {
            this.setState({products: products});
        } else {
            axios.get(`http://localhost:9999/products`)
                .then(res => {
                    const products = JSON.parse(res.data);
                    this.setState({ products: products });
                });
        }
    }

    render() {
        return (
            <div className="row landing">
                <div className="col-lg-3">
                    <Filter onProductChange = {this.setProduct}/>
                </div>
                <div className="col-lg-9">
                    <List products = {this.state.products}/>
                </div>
            </div>
        )
    }
}
