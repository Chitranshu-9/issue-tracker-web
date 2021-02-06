import React, { Component } from 'react';
import ProjectDetail from './ProjectDetail';
import HomePage from "./homepage";


import firebaseDB from "./firebaseSetup";
import "./navbar.css";
import "../App.css";

class CreateIssue extends Component {
    constructor(props) {
        super(props)
        this.state = {

            Title: '',
            Description: '',
            Labels: '',
            Author: '',
            currentProjectId: this.props.currentProjectId,
            homeBtnClicked: false,
            labelKeyword: '',
            searchLabels: [],
            issueData: [],
            authorChecked: false,
            checkboxSearch: '',
            checkboxAuthor: '',
            searchByAuthor: false,
            labelChecked: false,
            // Title: '',
            // Description: '',
            // Labels: '',
            // Author: '',
            // currentProjectId: this.props.currentProjectId
        }
    }


    componentDidMount() {
        firebaseDB.child('issueDesc').on('value', snapshot => {
            if (snapshot.val() != null) {
                this.setState({
                    issueData: snapshot.val()
                })
                // console.log("snap-shot val", snapshot.val());
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var cntntObj = {

            Title: this.state.Title,
            Description: this.state.Description,
            Labels: this.state.Labels,
            Author: this.state.Author,
            currentProjectId: this.state.currentProjectId
        }
        this.props.createIssue(cntntObj)
    }

    handleInput = (e) => {
        e.preventDefault();
        // console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value

        })
        // console.log(this.state.email);
    }

    // filterDataBySearchParams = () => {
    //     let data = this.state.issueData;
    //     data.map((val, key) => {
    //         console.log(val.Title);
    //     })
    // }
    // handleInputChange = (e) => {
    //     e.preventDefault();
    //     var name = e.target.name
    //     var value = e.target.value
    //     var values = this.state;
    //     this.setState({
    //         ...values,
    //         [name]: value
    //     })
    // }
    homeBtnHandler = (e) => {
        e.preventDefault();
        this.setState({
            homeBtnClicked: !this.state.homeBtnClicked
        })
    }



    handleSearchInput = (e) => {
        this.setState({
            labelKeyword: e.target.value
        })
        // console.log("inputValues", inputValues);
    }

    // keyPressResults = (e) => {
    //     if (this.state.labelChecked) {
    //         if (e.key === "enter") {
    //             // this.setState({
    //             //     searchLabels: [...this.state.searchLabels, this.state.checkboxSearch]

    //             // })
    //             console.log("enter key pressed");
    //         }
    //     }

    // }

    appendToState = () => {
        if (this.state.labelChecked || this.state.labelChecked) {
            let arr = [];
            arr.push(this.state.checkboxSearch)
            return arr;
        }

        // console.log("searchLabels", this.state.searchLabels);

    }

    handleCheckBoxSearchInput = (e) => {
        if (this.state.authorChecked || this.state.labelChecked) {
            this.setState({
                checkboxSearch: e.target.value
            })
        }
    }

    filterByAuthor = (e) => {
        if (this.state.authorChecked) {
            this.setState({
                checkboxAuthor: Object.keys(this.state.issueData).filter((val) => {
                    if (this.state.issueData[val].Author.includes(this.state.checkboxSearch)) {
                        // console.log("filtered data is", val)
                        return val;
                    }
                }).map((val, key) => {
                    // console.log("author result", this.state.issueData[val].Author)
                    let ans;
                    return ans = this.state.issueData[val].Author;
                })
            }

            )

        } else if (this.state.labelChecked) {
            // console.log("author not selected");
        }
    }

    render() {
        // console.log('homeBtnClicked', this.state.searchLabels);
        // console.log("create-issue-props", this.props)
        // console.log("create-issue-content", this.state.issueContent);
        // console.log('homeBtnClicked', this.state.issueContent.currentProjectId);
        // console.log("optionSelected", this.state.optionSelected);
        // console.log("issueData from state", this.state.issueData);
        const labelKeyword = this.state.labelKeyword;
        const issueData = this.state.issueData;
        // console.log("this.state.authorChecked", this.state.authorChecked);
        // console.log("Search by Author result?", this.state.searchByAuthor);
        // console.log("labelChecked", this.state.labelChecked)
        // console.log("searchLabels", this.searchLabels)

        // console.log("searchLabels", this.state.searchLabels)
        return (
            <div>
                {this.state.homeBtnClicked ? <HomePage />
                    : <div>
                        <nav class="navbar navbar-expand-sm   navbar-light bg-light">
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <a class="navbar-brand" href="#">Issue Tracker</a>

                            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link" onClick={this.homeBtnHandler}> Home </a>
                                    </li>

                                </ul>
                                <form class="form-inline my-2 my-lg-0" onSubmit={(e) => { e.preventDefault(); }}>
                                    <input id="search-box" name="searchLabels" onChange={this.handleSearchInput} class="form-control mr-sm-2" type="search" placeholder="Search by Title or Description" aria-label="Search" />
                                    {/* <button onClick={this.appendToState}> Add to searchResults</button> */}
                                </form>
                            </div>
                        </nav>

                        <br />

                        <h1>Create Issue</h1>
                        <hr />
                        <br />




                        <form onSubmit={this.handleSubmit}>
                            <input placeholder="Title" name="Title" onChange={this.handleInput} value={this.state.Title} className="create-issue-form" />
                            <input placeholder="Description" name="Description" onChange={this.handleInput} value={this.state.Description} className="create-issue-form" />
                            <input placeholder="Labels" name="Labels" onChange={this.handleInput} value={this.state.Labels} className="create-issue-form" />
                            <input placeholder="Author" name="Author" onChange={this.handleInput} value={this.state.Author} className="create-issue-form" />
                            <input type="submit" id="submit-issue" />
                        </form>
                        {/* <hr /> */}
                        <br />
                        <br />
                        <div className="filter-check-box">
                            <input id="srch-label-author" placeholder="Search by Label or Author" name="checkboxSearch"
                                onChange={this.handleCheckBoxSearchInput}
                                value={this.state.checkboxSearch}
                                onKeyPress={(e) => {
                                    if (this.state.labelChecked) {
                                        if (e.key === "Enter") {
                                            this.setState({
                                                searchLabels: [...this.state.searchLabels, this.state.checkboxSearch]

                                            })
                                        }
                                    }
                                }}

                            />


                            {/* <button onSubmit={this.filterByAuthor}>Search</button> */}
                            <label className="checkbx-srch">
                                Author:
                            <input
                                    name="authorChecked"
                                    type="checkbox"
                                    checked={this.state.authorChecked}
                                    onChange={(e) => {
                                        this.setState({
                                            authorChecked: !this.state.authorChecked
                                        })
                                    }}

                                />

                            </label>
                            <label className="checkbx-srch">
                                Labels:
                            <input
                                    name="labelChecked"
                                    type="checkbox"
                                    checked={this.state.labelChecked}
                                    onChange={(e) => {
                                        this.setState({
                                            labelChecked: !this.state.labelChecked
                                        })
                                    }}
                                />
                            </label>

                            <button id="clr-btn" onClick={(e) => {
                                this.setState({
                                    searchLabels: []
                                })
                            }}> Clear labels</button>
                            <br />
                            {
                                this.state.searchLabels.map((label) => {
                                    return <label id="srch-labels"> {label} </label>
                                    // <ul>
                                    //     <li> labels: {label}</li>
                                    // </ul>
                                })
                            }
                        </div>
                        <br />

                        {
                            labelKeyword === '' ? <div> <ProjectDetail projectId={this.state.currentProjectId}
                                authorSelected={this.state.authorChecked} authorSearchKey={this.state.checkboxSearch} searchLabels={this.state.searchLabels} /></div> :

                                <div>
                                    <h3> Results based on Title or Description Searches</h3>
                                    <br />
                                    <br />
                                    {Object.keys(issueData).filter((val) => {
                                        if (issueData[val].Title.includes(labelKeyword) || issueData[val].Description.includes(labelKeyword)) {
                                            console.log("filtered data is", val)
                                            return val;
                                        }
                                    }).map((val, key) => {

                                        return <div>
                                            {/* <h3> Results based on Title or Description</h3> */}
                                            <ul id="label-list" >
                                                <li >
                                                    Title: {issueData[val].Title}
                                                    <br />
                                               Description: {issueData[val].Description}
                                                    <br />
                                               Labels: {issueData[val].Labels}
                                                    <br />
                                               Author: {issueData[val].Author}
                                                    <br />
                                                </li>
                                                <hr />
                                            </ul></div>

                                    })}
                                </div>
                        }

                    </div>
                }
            </div >
        );
    }
}

export default CreateIssue;