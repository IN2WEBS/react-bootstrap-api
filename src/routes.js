import React from 'react';
import { Route } from 'react-router';
import { dispatch } from 'redux';

// Container
import App from './containers/app';

// Components
import Home from './components/Home';
import Single from './components/Single';

export default (
	<div>
		<Route component={App}>
			<Route component={Home} path="/" />
			<Route component={Single} path="single" />
		</Route>
	</div>
);
