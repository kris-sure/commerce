import React from 'react';
import ListView from "./ListView";

export default class ListController extends React.Component {
    render() {
        return (<ListView products = {this.props.products} />);
    }
}
