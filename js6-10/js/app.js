// 路由

// 声明AngularJS模块, 并把ui-router传入AngularJS主模块
var myApp = angular.module("myApp", ["ui.router"]);
// 配置路由，把 $stateProvider 和 $urlRouteProvider 路由引擎作为函数参数传入
myApp.config(function ($stateProvider, $urlRouterProvider) {
    // 匹配不到路由跳转界面
    $urlRouterProvider.when("", "/login");
    // 各个路由
    $stateProvider
        .state("login", {
            url: "/login",//浏览器地址栏显示的地址，随便写
            templateUrl: "view/login.html",//文件地址
            controller: "loginCtrl"
        })
        .state("background", {
            url: "/background",
            templateUrl: "view/background.html",
            controller: "backgroundCtrl"
        })
        .state("background.welcome", {
            url: "/welcome",
            templateUrl: "view/welcome.html"
        })
        .state("background.article-list", {
            url: "/article-list",
            templateUrl: "view/article-list.html",
            controller: "articleListCtrl"
        });
});