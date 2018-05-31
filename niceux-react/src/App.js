import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import './styles/common.scss';
import './styles/typography.scss';
import './styles/animations.scss';

const App = () => (
    <Router>
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    </Router>
);

export default App;
