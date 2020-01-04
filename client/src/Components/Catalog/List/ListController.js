import React from 'react';
import ListView from "./ListView";
import axios from "axios";

export default class ListController extends React.Component {
    constructor(props) {
        super(props);
        this.fetchMoreData = this.fetchMoreData.bind(this);
        this.state = {pages: 10};
    }

    fetchMoreData() {
        const pages = (this.state.pages === undefined) ? 10 : this.state.pages + 10;
        axios.get(`http://localhost:9999/products`,{
            params: {
                pages: [pages]
            }})
            .then(res => {
                console.log(JSON.parse(res.data));
                this.props.onProductListChange(JSON.parse(res.data));
            });
        this.setState({pages: pages});
    }

    render() {
        return (<ListView products = {this.props.products} fetchMoreData = {this.fetchMoreData}/>);
    }
}
