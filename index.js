(function () {
  angular
    .module('app', ['ui.router'])
    .config([
      '$stateProvider',
      '$urlRouterProvider',
      '$locationProvider',
      function ($stateProvider, $urlRouterProvider, $locationProvider) {
        // $rootScope.pbUrl ="//localhost:9063/"
        // var pbUrl = '//localhost:9063/';
        var pbUrl = '//localhost:81/';

        //默认路由
        $urlRouterProvider.otherwise('/ins');
        //定义路由规则
        $stateProvider
          .state('ins', {
            url: '/ins',
            templateUrl: pbUrl + 'ins.html',

            controller: function ($scope, $state, $stateParams, $location, $http) {
              $scope.pbUrl = pbUrl
              $scope.user = '巡检模块首页测试';
            },
          })
          .state('page1', {
            url: '/page',
            template: `
            <div>
            <header></header>
            Test Page1
            </div>
            `,
          })
          .state('page2', {
            url: '/page2',
            template: `
            <div>
            <header></header>
            Test Page2
            </div>
            `,
          });

        // $locationProvider.html5Mode({
        //   enabled: true,
        //   requireBase: false
        // });//去掉#号
        // $locationProvider.hashPrefix("/a");
      },
    ])
    .directive('header', function () {
      return {
        restrict: 'AE', //a attr e element  c class
        template: `
        <div>
        <a href="" ui-sref="ins">首页</a>
        <a href="" ui-sref="page1">Page1</a>
        <a href="" ui-sref="page2">Page2</a>
        </div>
        
        `,
      };
    })
    .run(function ($rootScope) {
      console.log('running ');


      $rootScope.$on(
        '$stateChangeStart',
        function (event, toState, toParams, fromState, fromParams) {
          console.log(toState);
        }
      );
    })
    //环境设置 重新设置 UrlLinkCon
    .controller('mainctrl', function ($rootScope, $scope, $state, $http) {
      console.log('main Ctrl');
      // $rootScope.pbUrl = '//localhost:9063/';
      $rootScope.pbUrl = '//localhost/';

      $scope.qkFlag = window.__POWERED_BY_QIANKUN__;
    });
})();
