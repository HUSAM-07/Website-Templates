import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../Components/index';
import _15311 from '../Components/app';
const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/"><HomePage /></Route>
				<Route exact path="/_15311"><_15311 /></Route>
			</Switch>
		</Router>
	);
}
export default RouterDOM;