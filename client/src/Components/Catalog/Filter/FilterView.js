import React from 'react';


export default class FilterView extends React.Component {
    render() {
        return (
            <div>
                <div className="filter">
                    <h4 className="mb-3">Sorting</h4>
                    <select className="custom-select" value={this.props.select} onChange={this.props.onChangeSort}>
                        <option value="ASC">Price up</option>
                        <option value="DESC">Price down</option>
                    </select>
                </div>
                <div className="filter">
                    <h4 className="mb-3">Filter by name</h4>
                    <input type="text" className="form-control" value={this.props.name} placeholder="Enter name" onChange={this.props.onChangeName} />
                </div>
                <div className="filter mt-3">
                    <h4 className="mb-3">Filter by category</h4>
                    { this.props.categories.map((category, index) =>
                        (
                            <div key={category.id}>
                                <label className="container">{category.name}
                                    <input type="checkbox" value={category.id} onChange={this.props.onChangeChecked.bind(this, index)} />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        )
                    )}
                </div>
            </div>
        )
    }
}
