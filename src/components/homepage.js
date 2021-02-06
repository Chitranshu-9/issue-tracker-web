import React, { Component } from 'react';
import CreateProject from './createproject';
import ProjectDetail from './ProjectDetail';
import CreateIssue from './createIssue';
import './navbar.css'
import '../App.css'

import firebaseDB from "./firebaseSetup";
import {
    BrowserRouter as Router, Switch,
    Route,
    Link
} from "react-router-dom";


class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listOfProjects: {},
            projectClicked: false,
            currentProjectId: '',
        }
    }

    componentDidMount() {
        firebaseDB.child('projectDesc').on('value', snapshot => {
            if (snapshot.val() != null) {
                this.setState({
                    listOfProjects: snapshot.val()
                })
            }
        })
    }
    render() {
        const addOrEdit = obj => {
            firebaseDB.child('projectDesc').push(
                obj
            )
        }

        const createIssue = obj => {
            firebaseDB.child('issueDesc').push(
                obj
            )
        }

        const projectList = this.state.listOfProjects;
        // console.log(this.state);
        // console.log("currentProjectId", this.state.currentProjectId);
        return (
            <Router>
                <div>



                    {/* <CreateProject addOrEdit={addOrEdit} /> */}
                    {/* <CreateIssue createIssue={createIssue} /> */}




                    <ul>

                        {this.state.projectClicked ? <CreateIssue createIssue={createIssue} currentProjectId={this.state.currentProjectId} /> :
                            <div>
                                <nav class="navbar navbar-expand-sm   navbar-light bg-light">
                                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <a class="navbar-brand" href="#">Issue Tracker</a>

                                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                                            <li class="nav-item">
                                                <a class="nav-link" href="#"> Home </a>
                                            </li>

                                        </ul>
                                        <form class="form-inline my-2 my-lg-0">
                                            <input id="search-box" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                        </form>
                                    </div>
                                </nav>
                                <br />
                                {this.state.projectClicked ? null : <CreateProject addOrEdit={addOrEdit} />}
                                <br />
                                {Object.keys(this.state.listOfProjects).map(id => {
                                    return <li className="list-item" key={id} onClick={() => {
                                        this.setState({
                                            projectClicked: !this.state.projectClicked,
                                            currentProjectId: id
                                        })
                                    }}>Author: {projectList[id].Author} <br />
                            Description: {projectList[id].Description}<br />
                                        {/* Labels: {projectList[id].Labels}<br /> */}
                            Title: {projectList[id].Title}<hr /></li>
                                })}
                            </div>
                        }

                    </ul>
                </div>
            </Router>
        );
    }
}

export default HomePage;