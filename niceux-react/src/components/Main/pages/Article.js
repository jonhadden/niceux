import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DocumentMeta from 'react-document-meta';
import Moment from 'react-moment';
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
            author: [],
            avatars: [],
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

            let authorUrl = `http://niceux.com/admin/wp-json/wp/v2/users/${response[0].author}`;
            fetch(authorUrl)
            .then(response => response.json())
            .then(response => {
                let avatarUrls = Object.values(response.avatar_urls);
                this.setState({
                    author: response,
                    avatars: avatarUrls
                })
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

        let author = this.state.author;
        let avatarUrls = this.state.avatars;

        let article = this.state.article.map((article, index) => {
            return (
                <div key={index}>
                    <div className="container">
                        <div className="row">
                            <div className="col s12 m10 offset-m1">
                                <h2>{article.title.rendered}</h2>
                                <h3 dangerouslySetInnerHTML={ {__html: article.excerpt.rendered} } />
                            </div>
                        </div>
                    </div>
                    <div className="container content">
                        <div className="row">
                            <div className="col s12 m10 offset-m1">
                                <div className="author">
                                    <img src={avatarUrls[2]} alt="Author Profile" className="responsive-img" />
                                    <h4>
                                        <span>Posted by:</span>
                                        <strong>{author.name}</strong>
                                        <span>on&nbsp;
                                            <Moment format="LL">
                                                {article.modified}
                                            </Moment>
                                        </span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 m10 offset-m1">
                                <ul className="tags">
                                    <li>Posted in:</li>
                                    {articleCategories}
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 m10 offset-m1">
                                <div dangerouslySetInnerHTML={ {__html: article.content.rendered} } />
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        
        let meta = {
          title: (this.state.article[0]) ? this.state.article[0].title.rendered : '',
          description: (this.state.article[0]) ? this.state.article[0].excerpt.rendered.innerText : '',
          canonical: 'http://niceux.com/articles/' + ((this.state.article[0]) ? this.state.article[0].slug : ''),
          meta: {
            charSet: 'utf-8',
            itemProp: {
              name: (this.state.article[0]) ? this.state.article[0].title.rendered : '',
              description: 'This is the page description'
            },
            property: {
              'og:title': (this.state.article[0]) ? this.state.article[0].title.rendered : '',
              'og:type': 'article',
              'og:site_name': 'NiceUX - Usability and Engineering Consultants',
              'twitter:site': '@niceux',
              'twitter:title': (this.state.article[0]) ? this.state.article[0].title.rendered : ''
            }
          },
          auto: {
            ograph: true
          }
        };

        return (
            <DocumentMeta {...meta}>
            <div className="article">
                {isloading ? (
                    <Loader />
                ) : ( 
                    article
                )}
            </div>
            </DocumentMeta>
        );


	}

};

export default Article;
