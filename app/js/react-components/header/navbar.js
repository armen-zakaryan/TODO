'use strict';

define(['react', 'react-router'], function (React, Router) {
    var RouteHandler = Router.RouteHandler;    

    return React.createClass({
    	render () {
        	return (
        		<div>
        			<div className="navbar-container">
						<ul>
				          <li className="active"><a href="#home" >Home</a></li>
				          <li><a href="#users">Users</a></li>
				          <li><a href="#news">News</a></li>
				        </ul>


        			</div>
        			<hr></hr>
        			<RouteHandler/>
        		</div>
        	)
    	}
	});

});