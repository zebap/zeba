var app = angular.module("myApp",[]);
app.controller("AppController",['$scope',AppController]);

function AppController($scope) {
  
  
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
    id :1,
    Name: 'John',
    Phone: '666jj',
    City:'Pune',
    Address1: 'ABC road',
    Adddress2: 'XYZ Building',
    PostalCode:1234
  },{
    id :1,
    Name: 'John',
    Phone: 7878787878,
    City:'Pune',
    Address1: 'ABC road',
    Adddress2: 'XYZ Building',
    PostalCode:1234
  }
      ];
      $scope.getdata = function(){
        $scope.listOfData1 = [];
        for(var i =0; i< $scope.listOfData.length; i++){
        if(angular.isString($scope.listOfData[i].Phone)){
          $scope.listOfData1.push({
            id :$scope.listOfData[i].id,
    Name: $scope.listOfData[i].name,
    Phone: 'NA',
    City:$scope.listOfData[i].City,
    Address1: $scope.listOfData[i].Address1,
    Adddress2: $scope.listOfData[i].Address2,
    PostalCode:$scope.listOfData[i].PostalCode
  });
        }else{
          $scope.listOfData1.push({
            id :$scope.listOfData[i].id,
    Name: $scope.listOfData[i].name,
    Phone: $scope.listOfData[i].Phone,
    City:$scope.listOfData[i].City,
    Address1: $scope.listOfData[i].Address1,
    Adddress2: $scope.listOfData[i].Address2,
    PostalCode:$scope.listOfData[i].PostalCode
  });
        }
      }
      console.log($scope.listOfData1);
      }
      
      
    
  }