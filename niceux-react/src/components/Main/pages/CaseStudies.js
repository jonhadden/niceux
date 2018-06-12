import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loader from './../Loader.js';

import './../../../styles/casestudy.scss';

class CaseStudies extends Component {

	constructor() {
        super();
        this.state = {
            caseStudies: [],
            isloading: true
        }
    }

    componentDidMount() {
        
    	let caseStudiesUrl = 'http://niceux.com/admin/wp-json/wp/v2/projects';
        fetch(caseStudiesUrl)
        .then(response => response.json())
        .then(response => {
            this.setState({
                caseStudies: response,
                isloading: false
            })
        })
    }

    render() {

        let isloading = this.state.isloading;

        let caseStudies = this.state.caseStudies.map((caseStudy, index) => {
            return (
                <li key={index}>
                    <Link to={`/case-studies/${caseStudy.slug}`}>
                        <img src={caseStudy.acf.list_image.sizes.large} alt={caseStudy.acf.list_image.alt} />
                        <h5>{caseStudy.title.rendered}</h5>
                    </Link>
                    <span dangerouslySetInnerHTML={ {__html: caseStudy.excerpt.rendered} } />
                </li>
            )
        })

        return (
        	<div className="case-studies">
	        	<div className="container">
                    <div className="pageHeader row">
                        <div className="col s12">
    		     			<h1>Case Studies</h1>
                            <h2>From real estate to transportation. Across government, health care and banking. Every industry we serve is another opportunity to expand our understanding of the world around us and utilize our expertise in new, exciting ways.</h2>
                        </div>
                    </div>
                    <div className="pageContent row">
                        <div className="col s12">
    		    			<ul className="list">
                               {isloading ? (
                                    <Loader />
                                ) : ( 
                                    caseStudies
                                )}
                            </ul>
                        </div>
		    		</div>
		    	</div>
	     	</div>
        );
    }
};

export default CaseStudies;