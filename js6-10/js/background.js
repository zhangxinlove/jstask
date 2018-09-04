// 登陆后，主页内容

myApp.controller("backgroundCtrl", function ($scope, $http, $state) {
    // 读取登录状态
    $scope.userLogin = sessionStorage.getItem("userLogin");
    // 判断是否登录状态
    if ($scope.userLogin == "yes") {
        // 读取用户信息，用于右上角用户身份，名称
        $scope.userData = JSON.parse(sessionStorage.getItem("userData"));
        // 角色名称
        $scope.roleName = $scope.userData.data.role.name
        // 用户名称
        $scope.managerName = $scope.userData.data.manager.name
        console.log("登录状态");
        // 右上角退出点击事件
        $scope.logout = function () {
            $http({
                method: 'POST',
                url: 'carrots-admin-ajax/a/logout',
            }).then(function successCallback(response) {
                // console.log("退出请求成功");
                if (response.data.code == 0) {
                    // 退出改变登录状态
                    sessionStorage.userLogin = "";
                    $state.go("login");
                } else {
                    alert("退出失败，请重试");
                }
            }, function errorCallback(response) {
                console.log("退出请求失败");
                alert("服务器连接失败，请重试")
            });
        }
    } else {
        // 未登录状态弹窗提示，跳转登录页面
        alert("请登录账号");
        $state.go("login");
    }
});