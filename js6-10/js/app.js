// 路由

// 声明AngularJS模块, 并把ui-router传入AngularJS主模块,fileupload图标上传模块
var myApp = angular.module("myApp", ["ui.router","angularFileUpload"]);
// 配置路由，把 $stateProvider 和 $urlRouteProvider 路由引擎作为函数参数传入
myApp.config(function ($stateProvider, $urlRouterProvider) {
    // 匹配不到路由跳转界面
    $urlRouterProvider.when("", "/login");
    // 各个路由
    $stateProvider
        // 登录页
        .state("login", {
            url: "/login", //浏览器地址栏显示的地址，随便写
            templateUrl: "view/login.html", //文件地址
            controller: "loginCtrl"
        })
        // 主页
        .state("background", {
            url: "/background",
            templateUrl: "view/background.html",
            controller: "backgroundCtrl"
        })
        // 欢迎页
        .state("background.welcome", {
            url: "/welcome",
            templateUrl: "view/welcome.html"
        })
        // 列表页
        .state("background.article-list", {
            url: "/article-list?page&start&end&type&status",
            params: {startAt:null,endAt:null},
            templateUrl: "view/article-list.html",
            controller: "articleListCtrl"
        })
        // 新增列表页
        .state("background.add-article", {
            url: "/add-article?id",
            templateUrl: "view/add-article.html",
            controller: "addArticleCtrl"
        })
        // 测试页
        // .state("background.ceshi", {
        //     url: "/ceshi",
        //     templateUrl: "view/ceshi.html",
        //     controller: "AppController"
        // })
});