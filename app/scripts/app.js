(function(window, document, undefined) {
	'use strict';

	// Select auto-binding template and use as the top level of our app
	var app = document.querySelector('#app');
	app.addEventListener('template-bound', function() {
		var pages = document.querySelector('#pages');
		var infoPage = document.querySelector('info-page');

		pages.selected = 0;
	});

})(window, document);