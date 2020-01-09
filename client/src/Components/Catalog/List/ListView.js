import React from 'react';
import {Link} from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

export default class ListView extends React.Component {
    render() {
        return (
            <div className="list">
                <InfiniteScroll
                    dataLength={this.props.products.length}
                    next={this.props.onProductChange}
                    hasMore={true}
                >
                <div className="row">
                    { this.props.products.length > 0 ?
                        (this.props.products.map((product) => (
                        <div key={product.id} className="col-md-3">
                            <Link to={`/detail/${product.id}`}>
                                <figure className="card card-product">
                                    <div className="img-wrap"><img src={"img/1.jpg"} alt="..." />
                                    </div>
                                    <figcaption className="info-wrap">
                                        <h6 className="title text-dots">{product.name}</h6>
                                        <div className="action-wrap">
                                            <div className="price-wrap h5">
                                                <span className="price-new">{product.price} $</span>
                                            </div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </Link>
                        </div>
                    ))) : (<h3>Not products</h3>)}
                </div>
                </InfiniteScroll>
            </div>
        )
    }
}
