import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        let projectsUrl = 'http://localhost:8888/NiceUX/Site/niceux/niceux-react/admin/wp-json/wp/v2/projects';
        fetch(projectsUrl)
        .then(response => response.json())
        .then(response => {
            this.setState({
                projects: response
            })
        })
    }

    render() {

        let projects = this.state.projects.map((project, index) => {
            return (
                <li key={index}>
                    <h2>{project.title.rendered}</h2>
                </li>
            )
        })

        return (
            <div className="App">
                <h1>Projects</h1>
                <ul>
                    {projects}
                </ul>
            </div>
        );
    }
}

export default App;
