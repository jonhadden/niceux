import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

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
                    <Link to={`/work/${project.slug}`}>
                    	{project.title.rendered}
                    </Link>
                </li>
            )
        })

        return (
     		<ul>
     			{projects}
     		</ul>       
        );

    }

};

export default Home;