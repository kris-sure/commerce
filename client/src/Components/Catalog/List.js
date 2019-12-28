import React from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';


export default class List extends React.Component {

    state = {
        products: []
    };

    componentDidMount() {
        axios.get(`http://localhost:9999/products`)
            .then(res => {
                const products = JSON.parse(res.data);
                console.log(products);
                this.setState({ products });
            })
    }

    render() {
        return (
            <div className="list">
                <div className="row">
                    { this.state.products.map(function(product) {
                        return (<div key={product.id} className="col-md-3">
                            <Link to={`/detail/${product.id}`}>
                                <figure className="card card-product">
                                    <div className="img-wrap"><img src={"img/1.jpg"} alt="..." />
                                        <i className="fa fa-search-plus"></i> Quick view
                                    </div>
                                    <figcaption className="info-wrap">
                                        <h6 className="title text-dots">{product.name}</h6>
                                        <div className="action-wrap">
                                            <div className="price-wrap h5">
                                                <span className="price-new">{product.price}</span>
                                            </div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </Link>
                        </div>)
                    })}
                </div>

                <div className="pagination ml-4 mt-4">
                    <nav aria-label="...">
                        <ul className="pagination">
                            <li className="page-item disabled">
                                <a className="page-link" href="/" tabIndex="-1">Previous</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="/">1</a></li>
                            <li className="page-item active">
                                <a className="page-link" href="/">2 <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="page-item"><a className="page-link" href="/">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="/">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
        )
    }
}
