import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loader from './../Loader.js';

import './../../../styles/about.scss';

class About extends Component {

	constructor() {
        super();
        this.state = {
            articles: [],
            author: [],
            avatars: [],
            isloading: true
        }
    }

    componentDidMount() {
    	let articlesUrl = 'http://niceux.com/admin/wp-json/wp/v2/posts?per_page=2';
        fetch(articlesUrl)
        .then(response => response.json())
        .then(response => {
            this.setState({
                articles: response,
                isloading: false
            })
        })

        let authorUrl = 'http://niceux.com/admin/wp-json/wp/v2/users/1';
        fetch(authorUrl)
        .then(response => response.json())
        .then(response => {
            let avatarUrls = Object.values(response.avatar_urls);
            this.setState({
                author: response,
                avatars: avatarUrls
            })
        })

    }

    render() {

        let isloading = this.state.isloading;
        let author = this.state.author;
        let avatarUrls = this.state.avatars;
    	let articles = this.state.articles.map((article, index) => {
            return (
            	<li key={index}>
        			<Link to={`/articles/${article.slug}`}>
			        	{article.title.rendered}
					</Link>
				</li>
            )
        })

        return (
        	<div className="about">
	        	<div className="container">
		        	<div className="pageHeader row">
                        <div className="col s12">
    		     			<h1>About NiceUX</h1>
                            <h2>Designing good, and valuable, software takes not only an understanding of how to organize information, but the soft skills necessary to listen, empathize, and foster conversations to guide projects down the correct path.</h2>
                        </div>
                    </div>
                    <div className="pageContent">
                        <div className="row">
                            <div className="col s12">
                                <p>Producing detailed, high-quality wireframes isn’t enough anymore. In today’s digital product design world, one must be able to toe the line between being a good business partner and facilitating design from theoretical requirements through delivery.</p>
                                <p>I am uniquely able to provide not only business stakeholder facilitation and project strategy, but also the detailed level of information architecture deliverables and the ability to write code with today’s advanced frameworks. Or, at a minimum, be able to articulate to an engineer how design artifacts will manifest themselves into HTML, CSS and Javascript.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 m6">
                                <img src={avatarUrls[2]} alt="Author Profile" className="responsive-img col s4" />
                                <div className="author col s8">
                                    <h4>{author.name}</h4>
                                    <ul>
                                        <li><a href="https://twitter.com/niceux">@niceux</a></li>
                                        <li><a href="mailto:jon@niceux.com">jon@niceux.com</a></li>
                                        <li><a href="http://www.linkedin.com/in/jonhadden">linkedin.com/in/jonhadden</a></li>
                                        <li><a href="https://github.com/jonhadden/">github.com/jonhadden</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col s12 m6">
                                <h4>Read more of Jon's thinking about:</h4>
                                <ul>
                                   {isloading ? (
                                        <Loader />
                                    ) : ( 
                                        articles
                                    )}
                                </ul>
                            </div>
                        </div>
		    		</div>
		    	</div>
	     	</div>
        );
    }
};

export default About;
