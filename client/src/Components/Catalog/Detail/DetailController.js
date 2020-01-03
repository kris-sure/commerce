import React from 'react';
import axios from "axios";
import DetailView from "./DetailView";


export default class Detail extends React.Component {

    state = {
        id: this.props.match.params.id,
        product: []
    };

    componentDidMount() {
        axios.get(`http://localhost:9999/products/${this.state.id}`)
            .then(res => {
                this.setState({ product: JSON.parse(res.data) });
            })
    }

    render() {
        return (<DetailView product = {this.state.product} />);
    }
}
