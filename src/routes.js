import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Homepage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="About" component={AboutPage} />
    </Route>
);