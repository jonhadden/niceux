import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Articles extends Component {

	constructor() {
        super();
        this.state = {
            articles: []
        }
    }

    componentDidMount() {
    	let articlesUrl = 'http://niceux.com/admin/wp-json/wp/v2/posts';
        fetch(articlesUrl)
        .then(response => response.json())
        .then(response => {
        	console.log(response);
            this.setState({
                articles: response
            })
        })
    }

    render() {
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
        	<div className="articles">
	        	<div className="container">
		        	<div className="pageHeader row">
                        <div className="col s12">
    		     			<h1>Articles on Design &amp; Code</h1>
                            <h2>While we have the frequent opportunities to lecture at conferences and host workshops, we still like to get our thoughts about product strategy, design and code down on paper.</h2>
                        </div>
                    </div>
                    <div className="pageContent row">
                        <div className="col s12">
    		    			<ul className="list">
    		    			   {articles}
                            </ul>
                        </div>
		    		</div>
		    	</div>
	     	</div>
        );
    }
};

export default Articles;