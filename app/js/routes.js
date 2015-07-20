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
	    <Route path="home" handler={Home}/>
	  	<Route path="news" handler={News}/>
	    <Route path="users" handler={Users}>
	    	<Route handler={User} path="/user/:id"/>
	    </Route>
	    <NotFoundRoute handler={NotFound} />
	  </Route>
	];


	// Set Router
	Router.run(routes, function (Handler) {
	  React.render(<Handler/>, document.body);
	});

});