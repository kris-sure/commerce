import React from 'react';
import axios from "axios";
import FilterView from "./FilterView";


export default class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {categories: []};
    }

    componentDidMount() {
        axios.get(`http://localhost:9999/categories`)
            .then(res => {
                this.setState({ categories: JSON.parse(res.data) });
            });
    }

    render() {
        return (
            <FilterView
            categories = {this.state.categories}
            select = {this.state.select}
            onChangeSort = {this.props.onChangeSort}
            name = {this.state.name}
            onChangeName = {this.props.onChangeName}
            onChangeChecked={this.props.onChangeChecked}/>
            );
    }
}
