import React, { Component } from 'react';
import "./navbar.css";

class CreateProject extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Title: '',
            Description: '',
            Author: '',
        }
    }

    // handleInput = (e) => {
    //     e.preventDefault();
    //     // console.log(e.target.value)
    //     this.setState({
    //         [e.target.name]: e.target.value

    //     })
    //     // console.log(this.state.email);
    // }

    handleInputChange = (e) => {
        e.preventDefault();
        var name = e.target.name
        var value = e.target.value
        var values = this.state;
        this.setState({
            ...values,
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addOrEdit(this.state)
    }

    render() {
        // console.log(this.state);
        // console.log(this.props);

        return (
            <div>
                <h1>CreateProject</h1>
                <br />
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Title" name="Title" onChange={this.handleInputChange} value={this.state.Title} className="create-prjct" />
                    <input placeholder="Description" name="Description" onChange={this.handleInputChange} value={this.state.Description} className="create-prjct" />
                    {/* <input placeholder="Labels" name="Labels" onChange={this.handleInputChange} value={this.state.Labels} /> */}
                    <input placeholder="Author" name="Author" onChange={this.handleInputChange} value={this.state.Author} className="create-prjct" />
                    <input type="submit" id="submit-prjct" />
                </form>
            </div>
        );
    }
}

export default CreateProject;