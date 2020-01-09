import React from 'react';
import axios from "axios";
import CatalogView from "./CatalogView";


export default class CatalogController extends React.Component {
    constructor(props) {
        super(props);
        this.setProduct = this.setProduct.bind(this);
        this.onChangeChecked = this.onChangeChecked.bind(this);
        this.onChangeSort = this.onChangeSort.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.state = {pages: 10};
        this.state = {sort: ""};
        this.state = {name: ""};
        this.state = {checked: []};
        this.state = {products: []};
    }

    componentDidMount() {
        this.setProduct(null);
    }

    setProduct(productsArray, sortValue, nameValue) {
        let filter = "";
        let sort = "ASC";
        let name = "";
        let pages = 10;

        if (productsArray) {
            filter = this.buildQuery(productsArray);
        } else {
            filter = (this.state.checked !== undefined) ? this.buildQuery(this.state.checked) : "";
        }
        if (sortValue) {
            sort = sortValue;
        } else {
            sort = (this.state.sort !== undefined) ? this.state.sort : "ASC";
        }
        if (nameValue) {
            name = nameValue;
        } else {
            name = (this.state.name !== undefined && this.state.name.length > 1) ? this.state.name : "";
        }
        if (!productsArray && !sortValue && !nameValue) {
            pages = (this.state.pages === undefined) ? 10 : this.state.pages + 10;
        } else {
            pages = (this.state.pages === undefined) ? 10 : this.state.pages;
        }

        axios.get(`http://localhost:9999/products`,{
            params: {
                filter: [filter],
                sort: [sort],
                name: [name],
                pages: [pages]
            }})
            .then(res => {
                this.setState({ products: JSON.parse(res.data) });
            });
        this.setState({pages: pages});
    }

    /* Checked */
    onChangeChecked(index, e) {
        let updatedArray = (this.state.checked === undefined) ? [] : this.state.checked;
        if (this.isChecked(updatedArray, e.target.value)) {
            updatedArray.map((num, index) => {
                if (num === e.target.value) {
                    updatedArray.splice(index, 1);
                }
                return updatedArray;
            });
        } else {
            updatedArray.push(e.target.value);
        }
        this.setState({checked: updatedArray});
        this.setProduct(updatedArray);
    }
    isChecked(updatedArray, value) {
        let array = updatedArray;
        for(var i = 0; i < array.length; i++) {
            if (array[i] === value) {
                return true;
            }
        }
    }
    buildQuery(checked) {
        let array = checked;
        let string = "";
        for(var i = 0; i < array.length; i++) {
            string = (i === 0) ? string.concat(array[i]) : string.concat("_" + array[i]);
        }
        return string;
    }
    /* Checked */

    /* Sort */
    onChangeSort(e) {
        const sort = e.target.value;
        this.setState({sort: sort});
        this.setProduct(null, sort);
    }
    /* Sort */

    /* Name */
    onChangeName(e) {
        const name = e.target.value;
        this.setState({name: name});
        this.setProduct(null, null, name);
    }
    /* Name */

    render() {
        return (
            <CatalogView
                products = {this.state.products}
                self = {this.setProduct}
                pages = {this.state.pages}
                fetchMoreData = {this.fetchMoreData}
                onChangeChecked = {this.onChangeChecked}
                onChangeSort = {this.onChangeSort}
                onChangeName = {this.onChangeName}
            />
            );
    }

}
