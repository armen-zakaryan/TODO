'use strict';

define(['react', 'react-router'], function (React, Router) {
    var RouteHandler = Router.RouteHandler;    

    return React.createClass({
    	render () {
        	return (
        		<div>
        			<h1> Weolcome To Home Page!!! </h1>
        			<RouteHandler/>
        		</div>
        	)
    	}
	});


	/*
	var App = React.createClass({
	    render () {
		    return (
		        <div>
		        	<h1>App</h1>
		        	<RouteHandler/>
		        </div>
		    )
	  	}
	});
*/


/*
        var App = React.createClass({
                    getInitialState: function () {
                    	debugger;
                    	return {

                    	};
                    },

                    componentDidMount: function () {
                    	debugger;
                    	
                    },
                    render: function () {
                        var footer;
                        var main;

						return (
							<div>
								<header className="header">
									<h1>APP</h1>
									<input
										ref="newField"
										className="new-todo"
										placeholder="What needs to be done?"
										autoFocus={true}
									/>
								</header>
								{main}
								{footer}
							</div>
						);

					}                       
	
		});

		React.render( <App/>, document.getElementById('app') );
*/

});