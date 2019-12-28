import React from 'react';
import {Link} from "react-router-dom";


export default class List extends React.Component {
    render() {
        return (
            <div className="list">
                <div className="row">
                    <div className="col-md-3">
                        <Link to={'/detail'}>
                        <figure className="card card-product">
                            <div className="img-wrap"><img src={"img/1.jpg"} />
                            <a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i> Quick view</a>
                            </div>
                            <figcaption className="info-wrap">
                                <h6 className="title text-dots">The name of product</h6>
                                <div className="action-wrap">
                                    <div className="price-wrap h5">
                                        <span className="price-new">$280</span>
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to={'/detail'}>
                            <figure className="card card-product">
                                <div className="img-wrap"><img src={"img/1.jpg"} />
                                    <a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i> Quick view</a>
                                </div>
                                <figcaption className="info-wrap">
                                    <h6 className="title text-dots">The name of product</h6>
                                    <div className="action-wrap">
                                        <div className="price-wrap h5">
                                            <span className="price-new">$280</span>
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to={'/detail'}>
                            <figure className="card card-product">
                                <div className="img-wrap"><img src={"img/1.jpg"} />
                                    <a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i> Quick view</a>
                                </div>
                                <figcaption className="info-wrap">
                                    <h6 className="title text-dots">The name of product</h6>
                                    <div className="action-wrap">
                                        <div className="price-wrap h5">
                                            <span className="price-new">$280</span>
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to={'/detail'}>
                            <figure className="card card-product">
                                <div className="img-wrap"><img src={"img/1.jpg"} />
                                    <a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i> Quick view</a>
                                </div>
                                <figcaption className="info-wrap">
                                    <h6 className="title text-dots">The name of product</h6>
                                    <div className="action-wrap">
                                        <div className="price-wrap h5">
                                            <span className="price-new">$280</span>
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                        </Link>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-3">
                        <Link to={'/detail'}>
                            <figure className="card card-product">
                                <div className="img-wrap"><img src={"img/1.jpg"} />
                                    <a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i> Quick view</a>
                                </div>
                                <figcaption className="info-wrap">
                                    <h6 className="title text-dots">The name of product</h6>
                                    <div className="action-wrap">
                                        <div className="price-wrap h5">
                                            <span className="price-new">$280</span>
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to={'/detail'}>
                            <figure className="card card-product">
                                <div className="img-wrap"><img src={"img/1.jpg"} />
                                    <a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i> Quick view</a>
                                </div>
                                <figcaption className="info-wrap">
                                    <h6 className="title text-dots">The name of product</h6>
                                    <div className="action-wrap">
                                        <div className="price-wrap h5">
                                            <span className="price-new">$280</span>
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to={'/detail'}>
                            <figure className="card card-product">
                                <div className="img-wrap"><img src={"img/1.jpg"} />
                                    <a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i> Quick view</a>
                                </div>
                                <figcaption className="info-wrap">
                                    <h6 className="title text-dots">The name of product</h6>
                                    <div className="action-wrap">
                                        <div className="price-wrap h5">
                                            <span className="price-new">$280</span>
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <Link to={'/detail'}>
                            <figure className="card card-product">
                                <div className="img-wrap"><img src={"img/1.jpg"} />
                                    <a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i> Quick view</a>
                                </div>
                                <figcaption className="info-wrap">
                                    <h6 className="title text-dots">The name of product</h6>
                                    <div className="action-wrap">
                                        <div className="price-wrap h5">
                                            <span className="price-new">$280</span>
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                        </Link>
                    </div>
                </div>

                <div className="pagination ml-4 mt-4">
                    <nav aria-label="...">
                        <ul className="pagination">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" tabIndex="-1">Previous</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item active">
                                <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
        )
    }
}
