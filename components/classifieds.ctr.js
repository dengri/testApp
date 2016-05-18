(function(){
"use srict";

	angular
		.module("ngClassifieds")
		.controller("classifiedsCtrl", function($scope, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog, productResource){
			


			var vm = this;
			productResource.query(
				function(data){
					vm.questions = data;
					
				}
			);







			var contact = {
			  "name": "John Doe",
			  "phone": "(555) 555-55-555",
			  "email": "johndoe@gmail.com"
			};


			classifiedsFactory.getClassifieds().then(function(data){
				
				$scope.classifieds = data.data;
				
			});	
			
			$scope.openSidebar = function(){
				$mdSidenav('left').open();
			}

			$scope.closeSidebar = function(){
				$mdSidenav('left').close();
			}

			$scope.saveClassified = function(data){
				if($scope.classified){
					data.contact = contact;
					$scope.classifieds.push(data);
					$scope.classified = {};
					$scope.closeSidebar();

				$mdToast.show(
					$mdToast.simple()
						.content('Classified saved')
						.position('top, right')
						.hideDelay(3000)
				);	

				}
			}

			$scope.flexSize = '30';


		$scope.loginAdmin = function(event){
			var confirm = $mdDialog.confirm().title("Login functionality coming soon...")
				.ok('Login')
				.cancel('Cancel')
				.targetEvent(event);
			
				$mdDialog.show(confirm).then(function(){}, function(){});
		}

	});
})()










