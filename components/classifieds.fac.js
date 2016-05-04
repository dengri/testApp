(function(){
	'use strict';

	angular.module('ngClassifieds')	
		.factory('classifiedsFactory', function($http){

			return {

				getClassifieds: function(){

					return $http.get('http://itschool.ocr-service.net:1337/test')
				}				
			}
		});
	
})();
