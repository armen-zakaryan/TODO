'use strict';

define([
	'react', 
	'react-router', 
	'jsx!react-components/home', 
	'jsx!react-components/users',
	'jsx!react-components/cars'
], function(React, Router, Home, Users, Cars) {
	var Route = Router.Route;


	

debugger

	var routes = [
	  <Route handler={Home}>
	    <Route name="cars" handler={Cars}/>
	    <Route name="users" handler={Users}/>
	  </Route>
	];

	


	Router.run(routes, function (Handler) {
	  React.render(<Handler/>, document.body);
	});







    return {}
});