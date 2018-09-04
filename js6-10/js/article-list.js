// 列表页

//  接口
//  http://new.wiki.jnshu.com/pages/viewpage.action?pageId=1180246
myApp.controller("articleListCtrl", function ($scope, $http, $state) {
    // $http({
    //     method: "GET",
    //     url: 'carrots-admin-ajax/a/article/search',
    // }).then(function successCallback(response) {
    //     console.log("成功：",response)
    // }, function errorCallback(response) {
    //     console.log("失败：",response)
    // });
    $http.get('carrots-admin-ajax/a/article/search')
        .then(function successCallback(response) {
            console.log("测试：", )
            $scope.articleList = response.data.data.articleList;
            console.log("请求列表成功：", $scope.articleList)
        }, function errorCallback(response) {
            console.log("请求列表失败：", response)
        });
});