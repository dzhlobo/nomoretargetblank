(function(window) {

	window.onload = function() {
		var annoyingLinks = window.document.querySelectorAll('a[target="_blank"]');

		for (var i = 0; i < annoyingLinks.length; i++) {
			annoyingLinks[i].removeAttribute('target');
		}

		document.addEventListener("DOMNodeInserted", function(e) {
			var item = e.target;

			if ( item.tagName == 'A' && item.getAttribute('target') == '_blank' ) {
				item.removeAttribute('target');
			}
		}, false);
	}

})(window);
