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
    	let articlesUrl = 'http://localhost:8888/NiceUX/Site/niceux/niceux-react/admin/wp-json/wp/v2/posts';
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
		        	<div className="row">
		     			<h3>Articles</h3>
		    			<ul className="list">
		    			   {articles}
                        </ul>
		    		</div>
		    	</div>
	     	</div>
        );
    }
};

export default Articles;