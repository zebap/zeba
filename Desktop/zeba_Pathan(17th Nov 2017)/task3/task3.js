
var app = angular.module("myApp",[]);
app.controller("AppController",['$scope',AppController]);

function AppController($scope) {
  $scope.nameError = null;
  $scope.numberError =null;
  $scope.dtails =null;
    $scope.listOfData=[
          {
    id :1,
    Name: 'John',
    Phone: 999999999,
    City:'Pune',
    Address1: 'ABC road',
    Adddress2: 'XYZ Building',
    PostalCode:1234
  },{
    id :2,
    Name: 'John',
    Phone: '666jj',
    City:'Pune',
    Address1: 'ABC road',
    Adddress2: 'XYZ Building',
    PostalCode:1234
  },{
    id :3,
    Name: 'John',
    Phone: 7878787878,
    City:'Pune',
    Address1: 'ABC road',
    Adddress2: 'XYZ Building',
    PostalCode:1234
  }
      ];
       $scope.add = function (user) {
       	var count = 0;
        if(angular.isUndefined(user)){
          $scope.dtails = 'please provide the data to add';
        }else if(angular.isUndefined(user.name)||  user.name=== '' || user.name===null){
       		$scope.nameError ='Name is required';
       		  $scope.numberError =null;
            $scope.dtails =null;
       	}else if(angular.isUndefined(user.phone)||  user.phone=== '' || user.phone===null){
       		$scope.numberError ='Phone is required';
       		 $scope.nameError = null;
           $scope.dtails =null;
       	}else if((angular.isUndefined(user.name)||  user.name=== '' || user.name===null)&& (angular.isUndefined(user.phone)||  user.phone=== '' || user.phone===null)){
       		$scope.nameError ='Name is required';
       		$scope.numberError ='Phone is required';
       	}else{
       		$scope.numberError =null;
       		 $scope.nameError = null;
           $scope.dtails =null;
       		$scope.listOfData.push({
            	id :user.id,
    Name: user.name,
    Phone: user.phone,
    City: user.city,
    Address1: user.address1,
    Adddress2: user.address2,
    PostalCode: user.PostalCode
            });
       	}
           
            
        };
        $scope.edited = -1;
         $scope.editedModel = {
            'id' :0,
    'Name': '',
    'Phone':0,
    'City':'',
    'Address1': '',
    'Adddress2': '',
    'PostalCode':''
        };
      $scope.edit = function (id) {
             for(var i = 0; i<$scope.listOfData.length; i++){
             	if($scope.listOfData[i].id === id){
             		$scope.listOfData[i].id =user.id;
             		$scope.listOfData[i].Name = user.name;
             		$scope.listOfData[i].City = user.city;
             		$scope.listOfData[i].phone = user.phone;
             		$scope.listOfData[i].Address1 = user.address1;
             		$scope.listOfData[i].Address2 = user.address2;
             		$scope.listOfData[i].PostalCode = user.PostalCode;



    
             	}
             }
        };
       $scope.finishEdit = function (index) {
            $scope.listOfData[index] = $scope.editedModel;
            $scope.edited = -1;
        };
    
  }