import React, { Component } from 'react';
import firebaseDB from "./firebaseSetup";

class ProjectDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listOfIssues: [],
            filteredResults: [],
        }

    }

    componentDidMount() {
        firebaseDB.child('issueDesc').on('value', snapshot => {
            if (snapshot.val() != null) {
                // var pred = this.state.listOfIssues.concat(snapshot.val())
                this.setState({
                    listOfIssues: snapshot.val()
                })
                var state = snapshot.val();
            }
        })
    }
    render() {
        // console.log('state of project details', this.state.listOfIssues);
        // console.log("authorSelected-projectDetails", this.props.authorSelected)
        // console.log("authorSearchKey", this.props.authorSearchKey);
        // console.log("searchLabels-project details", this.props.searchLabels);
        var labels = this.props.searchLabels
        var newexparr = labels.map(label => { return label });
        var listOfIssuesarr = Object.keys(this.state.listOfIssues).map(issue => { return this.state.listOfIssues[issue] })
        // console.log("listOfIssuesarr", listOfIssuesarr);

        let filteredArr = listOfIssuesarr.filter(itemX => newexparr.includes(itemX.Labels));

        console.log("filteredArr", filteredArr);
        var res = Object.keys(this.state.listOfIssues).filter(val => {

            var results = this.props.searchLabels.map(label => {
                if (this.state.listOfIssues[val].Labels === label) {
                    // console.log("this.state.listOfIssues[val]", this.state.listOfIssues[val])
                    return this.state.listOfIssues[val];
                }
                // console.log("val", val)


            })

            if (val == results) {
                console.log(val)
            }
            // return val.Labels === this.props.searchLabels[0]
        })
        // console.log("res", res)

        return (
            <div>
                {/* <h1>Project-Issue description</h1> */}
                <hr />

                <br />


                <ul>

                    {this.props.authorSelected ?
                        // <p>authorSelected</p>
                        <div>
                            <h3>Your Search based on Authors</h3>
                            <br />
                            <hr />
                            {Object.keys(this.state.listOfIssues).filter((val) => {
                                if (this.state.listOfIssues[val].Author.includes(this.props.authorSearchKey)) {
                                    // console.log("filtered data is", val)
                                    return val;
                                }
                            }).map((val, key) => {
                                // console.log("author result", this.state.listOfIssues[val].Author)
                                let ans;
                                return <div className="project-detail-search">
                                    <ul>
                                        <li key={this.state.listOfIssues[val]} >
                                            Author: {this.state.listOfIssues[val].Author}
                                            <br />
                                            Description: {this.state.listOfIssues[val].Description}
                                            <br />
                                            Labels: {this.state.listOfIssues[val].Labels}
                                            <br />
                                            Title: {this.state.listOfIssues[val].Title}
                                            <br />
                                            ProjectId: {this.state.listOfIssues[val].ProjectId}
                                            <hr />

                                        </li>
                                    </ul>
                                </div>
                            })}
                        </div>
                        : <div>
                            {/* {Object.keys(this.state.listOfIssues).map(id => {
                                if (this.state.listOfIssues[id].currentProjectId === this.props.projectId) {
                                    return <li className="list-item" key={id}> Author: {this.state.listOfIssues[id].Author} <br />
                            Description: {this.state.listOfIssues[id].Description}<br />
                                Labels: {this.state.listOfIssues[id].Labels}<br />
                            Title: {this.state.listOfIssues[id].Title}<br />
                            ProjectId: {this.state.listOfIssues[id].currentProjectId}<hr /></li>
                                }
                            })} */}

                            {this.props.searchLabels.length === 0 ?
                                Object.keys(this.state.listOfIssues).map(id => {
                                    if (this.state.listOfIssues[id].currentProjectId === this.props.projectId) {
                                        return <li className="list-item" key={id}> Author: {this.state.listOfIssues[id].Author} <br />
                            Description: {this.state.listOfIssues[id].Description}<br />
                                Labels: {this.state.listOfIssues[id].Labels}<br />
                            Title: {this.state.listOfIssues[id].Title}<br />
                            ProjectId: {this.state.listOfIssues[id].currentProjectId}<hr /></li>
                                    }
                                })
                                :
                                <div>
                                    <h3>Your Searches based on Labels</h3>
                                    {

                                        // data = Object.keys(this.state.listOfIssues).filter((val) => {
                                        //     if (this.state.listOfIssues[val].Labels.includes(this.props.searchLabels.map(label => { return label }))) {
                                        //         console.log("filtered data is", this.state.listOfIssues[val].Author)
                                        //         return val;
                                        //     } else {
                                        //         console.log("not found")
                                        //     }
                                        // }).map(val => {
                                        //     console.log("filtered data mapped", val)
                                        // })

                                        // Object.keys(this.state.listOfIssues).filter(val => {
                                        //     return this.props.searchLabels.map(label => {
                                        //         if (this.state.listOfIssues[val].Labels === label) {
                                        //             return this.state.listOfIssues[val];
                                        //         }
                                        //         // console.log("val", val)


                                        //     })

                                        //     // return val.Labels === this.props.searchLabels[0]
                                        // })

                                        // Object.keys(this.state.listOfIssues).filter(function (array_el) {
                                        //     return this.props.searchLabels.filter(function (anotherOne_el) {
                                        //         return anotherOne_el == array_el.Labels;
                                        //     }).length == 0
                                        // })

                                        filteredArr.map(result => {
                                            return <ul style={{ listStyle: 'none' }}>
                                                <li >
                                                    Title: {result.Title}
                                                    <br />
                                                    Description: {result.Description}
                                                    <br />
                                                    Labels: {result.Labels}
                                                    <br />
                                                    Author: {result.Author}
                                                    <br />

                                                    <hr />
                                                </li>
                                            </ul>
                                        })
                                    }
                                </div>
                            }

                        </div>
                    }

                </ul>
            </div>
        );
    }
}

export default ProjectDetail;