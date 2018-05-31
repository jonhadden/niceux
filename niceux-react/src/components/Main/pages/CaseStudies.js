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
    	let caseStudiesUrl = 'http://localhost:8888/NiceUX/Site/niceux/niceux-react/admin/wp-json/wp/v2/projects';
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
		        	<div className="row">
		     			<h3>Case Studies</h3>
		    			<ul className="list">
		    			   {caseStudies}
                        </ul>
		    		</div>
		    	</div>
	     	</div>
        );
    }
};

export default CaseStudies;