import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loader from './../Loader.js';

import './../../../styles/article.scss';

class Article extends Component {

	constructor(props) {
        super(props);
        let match = props.match;//← here

        this.state = {
        	match: match,
            article: [],
            articleCategories: [],
            isloading: true
        }
    }

    componentDidMount() {
        let articleUrl = `http://niceux.com/admin/wp-json/wp/v2/posts?slug=${this.state.match.params.title}`;
        fetch(articleUrl)
        .then(response => response.json())
        .then(response => {
            this.setState({
                article: response
            })
        })

        setTimeout(function() { 

            let categoriesUrl = "http://niceux.com/admin/wp-json/wp/v2/categories";
            fetch(categoriesUrl)
            .then(response => response.json())
            .then(response => {

                var articleCategoryIds = this.state.article[0].categories;

                const filteredCategories = response.filter(category => articleCategoryIds.includes(category.id));
                this.setState({
                    articleCategories: filteredCategories,
                    isloading: false
                })
            })

        }.bind(this), 500);

    }

    render() {

        let isloading = this.state.isloading;

        let articleCategories = this.state.articleCategories.map((category, index) => {
            return (
                <li key={index}>
                    <Link to={`/category/${category.slug}`}>
                        {category.name}
                    </Link>
                </li>
            )
        })

        let article = this.state.article.map((article, index) => {
            return (
                <div key={index}>
                    <div className="container">
                        <div className="row">
                            <div className="col s12">
                                <h2>{article.title.rendered}</h2>
                                <h3 dangerouslySetInnerHTML={ {__html: article.excerpt.rendered} } />
                            </div>
                        </div>
                    </div>
                    <div className="container content">
                        <div className="row">
                            <div className="col s12 m2 metadata">
                                <h4>Categories</h4>
                                <ul>
                                    {articleCategories}
                                </ul>
                            </div>
                            <div className="col s12 m8">
                                <div dangerouslySetInnerHTML={ {__html: article.content.rendered} } />
                            </div>
                        </div>
                    </div>
                </div>
            )
        })


        return (
            <div className="article">
                {isloading ? (
                    <Loader />
                ) : ( 
                    article
                )}
            </div>
        );


	}

};

export default Article;
