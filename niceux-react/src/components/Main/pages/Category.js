import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './../../../styles/category.scss';

class Category extends Component {

	constructor(props) {
        super(props);
        let match = props.match;//← here

        this.state = {
        	match: match,
        	category: [],
        	caseStudies: [],
            articles: []
        }
    }

    componentDidMount() {
    	let categoriesUrl = "http://niceux.com/admin/wp-json/wp/v2/categories";
        fetch(categoriesUrl)
        .then(response => response.json())
        .then(response => {
            var categorySlug = this.state.match.params.category;
            const category = response.filter(category => categorySlug.includes(category.slug));
            this.setState({
            	category: category
            })

            let articlesUrl = `http://niceux.com/admin/wp-json/wp/v2/posts?categories=${category[0].id}`;
	        fetch(articlesUrl)
	        .then(response => response.json())
	        .then(response => {
	            this.setState({
	                articles: response
	            })
	        })

	        let caseStudiesUrl = `http://niceux.com/admin/wp-json/wp/v2/projects?categories=${category[0].id}`;
	        fetch(caseStudiesUrl)
	        .then(response => response.json())
	        .then(response => {
	            this.setState({
	                caseStudies: response
	            })
	        })
        })
        
    }

    render() {

        let categoryHeader = this.state.category.map((category, index) => {
            return (
            	<div className="pageHeader row" key={index}>
            		<div className="col s12">
	            		<h1>{category.name}</h1>
	            		<h2>{category.description}</h2>
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

        let caseStudies = this.state.caseStudies.map((caseStudy, index) => {
            return (
            	<li key={index}>
            		<h4>
            			<Link to={`/case-studies/${caseStudy.slug}`}>
				        	{caseStudy.title.rendered}
						</Link>
					</h4>
					<span dangerouslySetInnerHTML={ {__html: caseStudy.excerpt.rendered} } />
				</li>
            )
        })

        return (
        	<div className="category container">

        		{categoryHeader}

	        	<div className="pageContent row">
	        		<main className="col s12 m8">
	        			<h2>Case Studies</h2>
	        			<ul className="list">
	        				{caseStudies}
	        			</ul>
	        		</main>
	        		<aside className="col s12 m4">
		     			<h3>Articles</h3>
		    			<ul className="list">
		    			   {articles}
                        </ul>
                    </aside>
	    		</div>
	    	</div>
        );


	}

};

export default Category;
