(function(){
	angular
		.module("common.services", ['ngResource'])
		.constant("appSettings", {serverPath: "http://itschool.ocr-service.net:1337"});
})();
