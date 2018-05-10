import React, { Component } from 'react';

class Project extends Component {

	constructor(props) {
        super(props);
        let match = props.match;//← here

        this.state = {
        	match: match,
            project: []
        }
    }

    componentDidMount() {
        let projectUrl = `http://localhost:8888/NiceUX/Site/niceux/niceux-react/admin/wp-json/wp/v2/projects?slug=${this.state.match.params.title}`;
        fetch(projectUrl)
        .then(response => response.json())
        .then(response => {
            this.setState({
                project: response
            })
        })
    }

    render() {

  //       const { project } = this.state.project;

  //   	return (
  //           <div className="project">
  //               <h2>{project.title.rendered}</h2>
  //   			<div className="section">{project.content.rendered}</div>
  //           </div>
		// );

        let project = this.state.project.map((project, index) => {
            return (
                <div key={index}>
                    <h2>{project.title.rendered}</h2>
                    <h3 dangerouslySetInnerHTML={ {__html: project.excerpt.rendered} } />
                    <div dangerouslySetInnerHTML={ {__html: project.content.rendered} } />
                </div>
            )
        })

        return (
            <div className="project">
                {project}
            </div>       
        );


	}

};

export default Project;