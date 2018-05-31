import React, { Component } from 'react';

import './../../../styles/casestudy.scss';

class CaseStudy extends Component {

	constructor(props) {
        super(props);
        let match = props.match;//← here

        this.state = {
        	match: match,
            project: [],
            categories: []
        }
    }

    componentDidMount() {
        let projectUrl = `http://localhost:8888/NiceUX/Site/niceux/niceux-react/admin/wp-json/wp/v2/projects?slug=${this.state.match.params.title}`;
        fetch(projectUrl)
        .then(response => response.json())
        .then(response => {
            let categories = response[0].categories.map(function(category){
                let categoryUrl = `http://localhost:8888/NiceUX/Site/niceux/niceux-react/admin/wp-json/wp/v2/categories/${category}`;
                fetch(categoryUrl)
                .then(response => response.json())
                .then(response => {
                    return categories = categories;
                })
            }) 

            this.setState({
                project: response
            })
        })
    }

    render() {

        let category = this.state.categories.map((category, index) => {
            return (
                <li key={index}>
                    {category}
                </li>
            )
        })

        let project = this.state.project.map((project, index) => {
            return (
                <div className="hero" key={index} style={{ backgroundImage: `url(${project.acf.featured_image.url})` }} >
                    <div className="row">
                        <div className="col s12 m8 l5">
                            <h2>{project.title.rendered}</h2>
                            <h3 dangerouslySetInnerHTML={ {__html: project.excerpt.rendered} } />
                            <div dangerouslySetInnerHTML={ {__html: project.content.rendered} } />
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <div className="case-study">
                {project}
            </div>       
        );


	}

};

export default CaseStudy;
