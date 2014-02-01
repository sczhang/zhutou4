angular.module('zhutou.directives', []).directive('codesinppet', ['$http', '$templateCache', '$location', function($http, $templateCache, $location){
	
	// http://demo.stanleyhlng.com/prettify-js/?id=bootstrap-light
	
	function htmlSanitize(s) {
	  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	};
	
	return {
		restrict: "EA",
		template: "<div directive><pre class=\"prettyprint linenums\"></pre></div>",
		link: function(scope, el, attrs){
			var snippet = attrs.tplUrl;
			
			$http.get( 
					'codetemplate/' + snippet,
					
					{ cache: $templateCache } ).success(function(html) {
		        var htmlEl = htmlSanitize(html);
		        el.find("pre").append(htmlEl);
		        
		        setTimeout(function(){
		        	prettyPrint();
		        });
		        
		      });
		}
	};
}])

;