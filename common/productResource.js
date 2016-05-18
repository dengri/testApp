(function(){
	
	angular
		.module('common.services')
		.factory("productResource", ["$resource", "appSettings", productResource])
		.factory("questionsResource", ["$resource", "appSettings", questionsResource])
		// .factory("answersResource", ["$resource", "appSettings", answersResource]);


		function productResource( $resource, appSettings){
			return $resource(appSettings.serverPath + '/test');
		}	
		
		function questionsResource($resource, appSettings) {
			return $resource(appSettings.serverPath, {},
				{
					all: {
						method: 'GET',
						url: appSettings.serverPath + '/test',
						isArray: true
					},				
					answers: {
						method: 'GET',
						url: appSettings.serverPath + '/question/:id',
						isArray: false
					},
				});
		
		}

		
})();
