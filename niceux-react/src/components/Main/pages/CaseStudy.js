import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './../../../styles/casestudy.scss';

class CaseStudy extends Component {

	constructor(props) {
        super(props);
        let match = props.match;//← here

        this.state = {
        	match: match,
            project: [],
            projectCategories: []
        }
    }

    componentDidMount() {
        let projectUrl = `http://niceux.com/admin/wp-json/wp/v2/projects?slug=${this.state.match.params.title}`;
        fetch(projectUrl)
        .then(response => response.json())
        .then(response => {
            this.setState({
                project: response
            })
        })

        setTimeout(function() { 

            let categoriesUrl = "http://niceux.com/admin/wp-json/wp/v2/categories";
            fetch(categoriesUrl)
            .then(response => response.json())
            .then(response => {
                var projectCategoryIds = this.state.project[0].categories;
                const filteredCategories = response.filter(category => projectCategoryIds.includes(category.id));
                this.setState({
                    projectCategories: filteredCategories
                })
            })

        }.bind(this), 100);

    }

    render() {

        let projectCategories = this.state.projectCategories.map((category, index) => {
            return (
                <li key={index}>
                    <Link to={`/category/${category.slug}`}>
                        {category.name}
                    </Link>
                </li>
            )
        })

        let project = this.state.project.map((project, index) => {
            return (
                <div key={index}>
                    <div className="hero" style={{ backgroundImage: `url(${project.acf.featured_image.url})` }} ></div>
                    <div className="container">
                        <div className="pageHeader row">
                            <div className="col s12">
                                <h1>{project.title.rendered}</h1>
                                <h2 dangerouslySetInnerHTML={ {__html: project.excerpt.rendered} } />
                            </div>
                        </div>
                        <div className="pageContent row">
                            <div className="col s12 m2 metadata">
                                <h4>Services</h4>
                                <ul>
                                    {projectCategories}
                                </ul>
                            </div>
                            <div className="col s12 m8">
                                <div dangerouslySetInnerHTML={ {__html: project.content.rendered} } />
                            </div>
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
