import React from 'react';


export default class Filter extends React.Component {
    render() {
        return (
            <div>
                <div className="filter">
                    <h4 className="mb-3">Sorting</h4>
                    <select className="custom-select">
                        <option value="1">Random</option>
                        <option value="2">Price up</option>
                        <option value="3">Price down</option>
                    </select>
                </div>
            <div className="filter mt-3">
                <h4 className="mb-3">Filter by category</h4>
                <label className="container">Category 1
                    <input type="checkbox" />
                        <span className="checkmark"></span>
                </label>

                <label className="container">Category 2
                    <input type="checkbox" />
                        <span className="checkmark"></span>
                </label>

                <label className="container">Category 3
                    <input type="checkbox" />
                        <span className="checkmark"></span>
                </label>

                <label className="container">Category 4
                    <input type="checkbox" />
                        <span className="checkmark"></span>
                </label>
            </div>
            </div>
        )
    }
}
