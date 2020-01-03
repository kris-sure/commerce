import React from 'react';
import axios from "axios";
import CatalogView from "./CatalogView";


export default class CatalogController extends React.Component {

    constructor(props) {
        super(props);
        this.setProduct = this.setProduct.bind(this);
        this.state = {products: []};
    }

    componentDidMount() {
        this.setProduct(null);
    }

    setProduct(productsArray) {
        if (productsArray !== null && productsArray.length > 0) {
            this.setState({products: productsArray});
        } else {
            axios.get(`http://localhost:9999/products`)
                .then(res => {
                    const products = JSON.parse(res.data);
                    this.setState({ products: products });
                });
        }
    }

    render() {
        return (<CatalogView products = {this.state.products} self = {this.setProduct}/>);
    }

}
