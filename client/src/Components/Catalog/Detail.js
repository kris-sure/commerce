import React from 'react';
import {Link} from "react-router-dom";
import axios from "axios";


export default class Detail extends React.Component {

    state = {
        id: this.props.match.params.id,
        product: []
    };

    componentDidMount() {
        axios.get(`http://localhost:9999/products/${this.state.id}`)
            .then(res => {
                const product = JSON.parse(res.data);
                console.log(product);
                this.setState({ product });
            })
    }

    render() {
        return (
            <div className="detail">
                <div className="row mb-4">
                    <div className="col-lg-12">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to={'/'}>Home</Link></li>
                                <li className="breadcrumb-item"><Link to={'/catalog'}>Catalog</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Detail</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <img src={"/img/1.jpg"} alt="..." className="img-thumbnail" />
                    </div>
                    <div className="col-lg-9">
                        <h1>{this.state.product.name}</h1>
                        <h5>{this.state.product.price} $</h5>
                        <button className="btn btn-success mb-4">Order</button>
                        <h4>Description:</h4>
                        <p>{this.state.product.desc}</p>
                    </div>
                </div>
            </div>
        )
    }
}
