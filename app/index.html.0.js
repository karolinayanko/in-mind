
	    if ('registerElement' in document
	      && 'createShadowRoot' in HTMLElement.prototype
	      && 'import' in document.createElement('link')
	      && 'content' in document.createElement('template')) {
	      // We're using a browser with native WC support!
	    } else {
	      document.write('<script src="/bower_components/webcomponentsjs/webcomponents.js"><\/script>');
	    }
	  