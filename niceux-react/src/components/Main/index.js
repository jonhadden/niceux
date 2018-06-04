import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Home from './pages/Home';
import CaseStudies from './pages/CaseStudies';
import CaseStudy from './pages/CaseStudy';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Contact from './pages/Contact';
import Category from './pages/Category';

const Main = () => {

  	const timeout = { enter: 300, exit: 200 };

  	return (

		<TransitionGroup component="main">
			<CSSTransition timeout={timeout} classNames="fade" appear>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/case-studies" component={CaseStudies} />
					<Route path="/case-studies/:title" component={CaseStudy} />
					<Route exact path="/articles" component={Articles} />
					<Route path="/articles/:title" component={Article} />
					<Route path="/contact" component={Contact} />
					<Route path="/category/:category" component={Category} />
				</Switch>
			</CSSTransition>
		</TransitionGroup>

	);
};

export default Main;