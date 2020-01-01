import React from 'react';
import axios from "axios";


export default class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {checked: []};
        this.state = {categories: []};
        this.onChange = this.onChange.bind(this);
    }

    onChange(index, e) {
        let updatedArray = [];
        let queryString = "";
        if (this.state.checked === undefined) {
            updatedArray[index] = e.target.value;
            queryString = this.buildQuery([e.target.value]);
        } else {
            updatedArray = this.state.checked;
            if (this.isChecked(e.target.value)) {
                updatedArray.map((num, index) => {
                    if (num === e.target.value) {
                        updatedArray.splice(index, 1);
                    }
                });
            } else {
                updatedArray[index] = e.target.value;
            }
            queryString = this.buildQuery(this.state.checked);
        }
        console.log(updatedArray);
        this.setState({checked: updatedArray});
        console.log(this.state.checked);
        this.setFilterProduct(queryString);
    }

    isChecked(value) {
        let array = [];
        array = this.state.checked;
        for(var i = 0; i < array.length; i++) {
            if (array[i] === value) {
                return true;
            }
        }
    }

    buildQuery(checked) {
        let array = checked;
        let string = "";
        for(var i = 0; i < array.length; i++) {
            string = (i === 0) ? string.concat(array[i]) : string.concat("_" + array[i]);
        }
        return string;
    }

    setFilterProduct(queryString) {
        console.log(queryString);
        axios.get(`http://localhost:9999/products`, {
            params: {
                filter: [queryString]
            }})
            .then(res => {
                console.log(JSON.parse(res.data));
                this.props.onProductChange(JSON.parse(res.data));
            });
    }

    componentDidMount() {
        axios.get(`http://localhost:9999/categories`)
            .then(res => {
                const categories = JSON.parse(res.data);
                this.setState({ categories });
            });
    }

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
                    { this.state.categories.map((category, index) =>
                        (
                            <div key={category.id}>
                            <label className="container">{category.name}
                                <input type="checkbox" value={category.id} onChange={this.onChange.bind(this, index)} />
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
