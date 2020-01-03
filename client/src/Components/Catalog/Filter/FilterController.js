import React from 'react';
import axios from "axios";
import FilterView from "./FilterView";


export default class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {checked: []};
        this.state = {sort: "ASC"};
        this.state = {name: ""};
        this.state = {categories: []};
        this.onChange = this.onChange.bind(this);
        this.onChangeSort = this.onChangeSort.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
    }

    onChange(index, e) {
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

        let queryString = (this.state.checked === undefined) ? this.buildQuery([e.target.value]) : this.buildQuery(updatedArray);
        const sort = (this.state.sort === undefined) ? "ASC" : this.state.sort;
        const name = (this.state.name === undefined) ? "" : this.state.name;
        this.setFilterProduct(queryString, sort, name);
        this.setState({checked: updatedArray});
    }

    onChangeSort(e) {
        const sort = e.target.value;
        this.setState({sort: sort});
        const queryString = (this.state.checked === undefined) ? "" : this.buildQuery(this.state.checked);
        const name = (this.state.name === undefined) ? "" : this.state.name;
        this.setFilterProduct(queryString, sort, name);
    }

    onChangeName(e) {
        const name = e.target.value;
        const sort = (this.state.sort === undefined) ? "ASC" : this.state.sort;
        const queryString = (this.state.checked === undefined) ? "" : this.buildQuery(this.state.checked);
        this.setFilterProduct(queryString, sort, name);
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

    setFilterProduct(queryString, sort, name) {
        axios.get(`http://localhost:9999/products`, {
            params: {
                filter: [queryString],
                sort: [sort],
                name: [name],
            }})
            .then(res => {
                this.props.onProductChange(JSON.parse(res.data));
            });
    }

    componentDidMount() {
        axios.get(`http://localhost:9999/categories`)
            .then(res => {
                const categories = JSON.parse(res.data);
                this.setState({ categories });
            });
    }

    render() {
        return (
            <FilterView
            categories = {this.state.categories}
            select = {this.state.select}
            onChangeSort = {this.onChangeSort}
            name = {this.state.name}
            onChangeName = {this.onChangeName}
            onChange={this.onChange}/>
            );
    }
}
