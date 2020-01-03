import React from 'react';
import {Link} from "react-router-dom";


export default class DetailView extends React.Component {
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
                        <h1>{this.props.product.name}</h1>
                        <h5>{this.props.product.price} $</h5>
                        <button className="btn btn-success mb-4">Order</button>
                        <h4>Description:</h4>
                        <p>{this.props.product.desc}</p>
                    </div>
                </div>
            </div>
        )
    }
}
