(function () {
  angular.module('app').controller('ctrl', function ($rootScope, $scope) {
    // $rootScope.pbUrl = '//localhost:9063/';
    $rootScope.pbUrl = '//localhost:81/';
    // $scope.pbUrl ='//localhost:9063/';
    $scope.name = 'angluarJS 子应用测试';
    console.log($('#title').html());
  });
})();
