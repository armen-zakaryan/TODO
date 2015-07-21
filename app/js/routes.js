'use strict';

define([
	'react', 
	'react-router',
	'jsx!react-components/home', 
	'jsx!react-components/users',
	'jsx!react-components/user',
	'jsx!react-components/news',
	'jsx!react-components/header/navbar'
], function(React, Router, Home, Users, User, News, Navbar) {
	var Route = Router.Route,
		Redirect = Router.Redirect,
		DefaultRoute = Route.DefaultRoute,
		NotFoundRoute = Router.NotFoundRoute;

	var NotFound = React.createClass({
        render: function () {
            return <h1>Not Found</h1>;
        }
    });

    var App = React.createClass({
    	render: function () {
    		return <Navbar/>;
    	}
    });

	var routes = [
	  <Route handler={App}>
	    <Route name="home" handler={Home}/>
	  	<Route name="news" handler={News}/>
	    <Route name="users" handler={Users}>
	    	<Route handler={User} path=":id"/>
	    </Route>
	    <NotFoundRoute handler={NotFound} />
	  </Route>
	];

/*
	var routes = Router.createRoutesFromReactChildren(
	  <Route path="/" handler={App}>
	    <Route name="users" path="/users/:userId" handler={Users}>
	      <Route name="task" path="tasks/:taskId" handler={User}/>
	      <Redirect from="todos/:taskId" to="task"/>
	    </Route>
	  </Route>
	);*/



	// Set Router
	Router.run(routes, function (Handler) {
	  React.render(<Handler/>, document.body);
	});



});