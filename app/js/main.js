'use strict';

require(['config'], function () {
    require(['react', 'JSXTransformer', 'jsx!routes'], function () {
    	console.log("App started...");
    });
});