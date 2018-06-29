var app = angular.module('app', []);

app.controller('postController', function($scope, $http, $location) {
	$scope.submitForm = function(){
		var url = $location.absUrl() + "api/student";
		
		var config = {
                headers : {
                    'Content-Type': 'application/json;charset=utf-8;'
                }
        }
		
		var data = {

            id: $scope.id,
            rollNo: $scope.rollNo,
            name: $scope.name,
            email: $scope.email,
            mobile: $scope.mobile,
            addess: $scope.addess
        };
		
		
		$http.post(url, data, config).then(function (response) {
			$scope.postResultMessage = "Sucessful!";
		}, function (response) {
			$scope.postResultMessage = "Fail!";
		});

        id: $scope.id,
		$scope.rollNo = "";
		$scope.name = "";
		$scope.email = "";
		$scope.mobile = "";
		$scope.addess = "";

	}
});

app.controller('getallcustomersController', function($scope, $http, $location) {
	
	$scope.showAllCustomers = false;

	$scope.getAllCustomers = function() {
		var url = $location.absUrl() + "api/findall";

		var config = {
			headers : {
				'Content-Type' : 'application/json;charset=utf-8;'
			}
		}

       $http.get(url,config).then(function(response) {

			if (response.data.status === "Done") {
				$scope.allcustomers = response.data;
				$scope.showAllCustomers = true;

			} else {
				$scope.getResultMessage = "get All Customers Data Error!";
			}

		}, function(response) {
			$scope.getResultMessage = "Fail!";
		});

	}
});


app.controller('getcustomerController', function($scope, $http, $location) {
	
	$scope.showCustomer = false;
	
	$scope.getCustomer = function() {
		var url = $location.absUrl() + "api/student/" + $scope.id;

		var config = {
			headers : {
				'Content-Type' : 'application/json;charset=utf-8;'
			}
		}

		$http.get(url, config).then(function(response) {

			if (response.data.status == "Done") {
				$scope.s = response.data;
				$scope.showCustomer = true;
			} else {
				$scope.getResultMessage = "rollNo Data Error!";
			}

		}, function(response) {
			$scope.getResultMessage = "Fail!";
		});

	}
});



app.controller('getcustomersbylastnameController', function($scope, $http, $location) {
	
	$scope.showCustomersByLastName = false;
	
	$scope.getCustomersByLastName = function() {
		var url = $location.absUrl() + "api/findByrRollNo";

		var config = {
			headers : {	'Content-Type' : 'application/x-www-form-urlencoded;' },
			params: { 'rollNo' : $scope.rollNo }
		}

		$http.get(url, config).then(function(response) {

			if (response.data.status == "Done") {
				$scope.allcustomersbylastname = response.data;
				$scope.showCustomersByLastName = true;

			} else {
				$scope.getResultMessage = "Customer Data Error!";
			}

		}, function(response) {
			$scope.getResultMessage = "Fail!";
		});

	}
});

