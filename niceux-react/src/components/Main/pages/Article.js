import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './../../../styles/article.scss';

class Article extends Component {

	constructor(props) {
        super(props);
        let match = props.match;//← here

        this.state = {
        	match: match,
            article: [],
            articleCategories: []
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
                console.log(articleCategoryIds, response);
                const filteredCategories = response.filter(category => articleCategoryIds.includes(category.id));
                this.setState({
                    articleCategories: filteredCategories
                })
            })

        }.bind(this), 100);

    }

    render() {

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
                {article}
            </div>
        );


	}

};

export default Article;
