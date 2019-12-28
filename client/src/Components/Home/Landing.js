import React from 'react';
import {Link} from "react-router-dom";


export default class Landing extends React.Component {
    render() {
        return (
            <div className="row landing">
                <div className="col-md-12">
                    <h1 className="text-center">Landing</h1>
                    <p className="text-center mt-4"><Link to={'/catalog'} className="btn btn-primary btn-lg">Catalog</Link></p>
                </div>
            </div>
        )
    }
}
