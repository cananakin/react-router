import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import Header from './component/Navigation/Header/Header'


class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Header />
					<Switch>
						<Route path="/" exact render={() => <div> <h1> Home Page </h1> </div>} />	
						<Route path="/courses" component={Courses} />
						<Route path="/users" component={Users} />
						<Route render={() => <h1> 404 Page not found </h1>} />
						<Redirect from="/all-courses" to="/courses" />
					</Switch>
				</div>	
			</BrowserRouter>
		);
	}
}

export default App;
