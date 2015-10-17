'use strict';

// Services module config
angular.module('services').run(['Menus',
	function(Menus) {
		// Config logic
		// ...

		Menus.addMenuItem('topbar', 'Services', 'services', 'dropdown', '/services(/create)?', true);
		Menus.addSubMenuItem('topbar', 'services', 'List Services', 'services');
	}
]);