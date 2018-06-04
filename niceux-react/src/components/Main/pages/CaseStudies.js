import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CaseStudies extends Component {

	constructor() {
        super();
        this.state = {
            caseStudies: []
        }
    }

    componentDidMount() {
    	let caseStudiesUrl = 'http://niceux.com/admin/wp-json/wp/v2/projects';
        fetch(caseStudiesUrl)
        .then(response => response.json())
        .then(response => {
            this.setState({
                caseStudies: response
            })
        })
    }

    render() {
    	let caseStudies = this.state.caseStudies.map((caseStudy, index) => {
            return (
            	<li key={index}>
            		<h5>
            			<Link to={`/case-studies/${caseStudy.slug}`}>
				        	{caseStudy.title.rendered}
						</Link>
					</h5>
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
    		    			   {caseStudies} 
                            </ul>
                        </div>
		    		</div>
		    	</div>
	     	</div>
        );
    }
};

export default CaseStudies;