import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './../../../styles/home.scss';

class Home extends Component {

	constructor() {
        super();
        this.state = {
        	feature: [],
            articles: []
        }
    }

    componentDidMount() {
        
    	let featureUrl = 'http://niceux.com/admin/wp-json/wp/v2/projects?featured_case_study=1';
        fetch(featureUrl)
        .then(response => response.json())
        .then(response => {
			const feature = response.filter(feature => feature.acf.featured_case_study === true);
            this.setState({
                feature: feature
            })
        })

        let articlesUrl = 'http://niceux.com/admin/wp-json/wp/v2/posts?per_page=4';
        fetch(articlesUrl)
        .then(response => response.json())
        .then(response => {
            this.setState({
                articles: response
            })
        })
    }

    render() {

    	let featureProject = this.state.feature.map((feature, index) => {
    		return (
    			<div className="hero" key={index} style={{ backgroundImage: `url(${feature.acf.featured_image.url})` }} >
                    <div className="container">
    	        		<div className="row">
    	        			<div className="col s12 m8 l6">
    		        			<p className="projectType">Case Study</p>
    		        			<h2>{feature.title.rendered}</h2>
    		        			<h3 dangerouslySetInnerHTML={ {__html: feature.acf.lead_in} } />
    		        			<Link to={`/case-studies/${feature.slug}`} className="btn grey lighten-5">View Case Study</Link>
    		        		</div>
    	        		</div>
                    </div>
	        	</div>
    		)
    	})

        let articles = this.state.articles.map((article, index) => {
            return (
            	<li key={index}>
            		<h5>
                        <Link to={`/articles/${article.slug}`}>
				            {article.title.rendered}
					   </Link>
                    </h5>
					<span dangerouslySetInnerHTML={ {__html: article.excerpt.rendered} } />
				</li>
            )
        })

        return (
        	<div className="home">

	        	{featureProject}

	        	<div className="container">
		        	<div className="about row">
		        		<h3>User Experience Design, Usability Research <br/>&amp; Frontend Engineering </h3>
                        <h4>Following a user-centered design methodology, we ensure to consider content, context and human factors of a product's design before we start designing. Unlike marketing and advertising agencies, we understand how digital products are different than marketing fluff, and we know how to plan for it giving you the edge over competition.</h4>
                    </div>
                    <div className="row">
		     			<h3>Recent Articles</h3>
                        <ul className="list">
		    			   {articles}
                        </ul>
		    		</div>
		    	</div>
	     	</div>
        );

    }

};

export default Home;