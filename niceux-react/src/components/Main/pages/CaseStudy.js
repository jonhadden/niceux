import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loader from './../Loader.js';
/* import Highlight from 'react-highlight'; */

import './../../../styles/casestudy.scss';
/* import './../../../styles/syntax-highlight.scss'; */

class CaseStudy extends Component {

	constructor(props) {
        super(props);
        let match = props.match;//← here

        this.state = {
        	match: match,
            caseStudy: [],
            caseStudyCategories: [],
            isloading: true
        }
    }

    componentDidMount() {
        let caseStudyUrl = `http://niceux.com/admin/wp-json/wp/v2/projects?slug=${this.state.match.params.title}`;
        fetch(caseStudyUrl)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            this.setState({
                caseStudy: response
            })
        })

        setTimeout(function() { 

            let categoriesUrl = "http://niceux.com/admin/wp-json/wp/v2/categories";
            fetch(categoriesUrl)
            .then(response => response.json())
            .then(response => {
                var caseStudyCategoryIds = this.state.caseStudy[0].categories;
                const filteredCategories = response.filter(category => caseStudyCategoryIds.includes(category.id));
                this.setState({
                    caseStudyCategories: filteredCategories,
                    isloading: false
                })
            })

        }.bind(this), 500);

    }

    render() {

        let isloading = this.state.isloading;

        let caseStudyCategories = this.state.caseStudyCategories.map((category, index) => {
            return (
                <li key={index}>
                    <Link to={`/category/${category.slug}`}>
                        {category.name}
                    </Link>
                </li>
            )
        })

        let caseStudy = this.state.caseStudy.map((caseStudy, index) => {
            return (
                <div key={index}>
                    <div className="hero" style={{ backgroundImage: `url(${caseStudy.acf.list_image.url})` }} ></div>
                    <div className="container">
                        <div className="pageHeader row">
                            <div className="col s12">
                                <h1>{caseStudy.title.rendered}</h1>
                                <h2 dangerouslySetInnerHTML={ {__html: caseStudy.excerpt.rendered} } />
                            </div>
                        </div>
                        <div className="pageContent row">
                            <div className="col s12 m2 metadata">
                                <h4>Services</h4>
                                <ul>
                                    {caseStudyCategories}
                                </ul>
                            </div>
                            <div className="col s12 m8">
                                <div dangerouslySetInnerHTML={ {__html: caseStudy.content.rendered} } />
                            </div>
                        </div>
                    </div>
                </div>
            )
        })


        return (
            <div className="case-study">
                {isloading ? (
                    <Loader />
                ) : ( 
                    caseStudy
                )}
            </div>
        );


	}

};

export default CaseStudy;
