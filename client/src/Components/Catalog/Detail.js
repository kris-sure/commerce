import React from 'react';
import {Link} from "react-router-dom";


export default class Detail extends React.Component {
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
                        <img src={"img/1.jpg"} className="img-thumbnail" />
                    </div>
                    <div className="col-lg-9">
                        <h1>Product name</h1>
                        <h5>200 $</h5>
                        <button className="btn btn-success mb-4">Order</button>
                        <h4>Description:</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        )
    }
}
