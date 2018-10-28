// 登录页

// 请求头，所有请求都用此格式
myApp.config(function ($httpProvider) {
    $httpProvider.defaults.headers.post = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})
myApp.controller("loginCtrl", function ($scope, $http, $state) {
    // 登录按钮点击事件
    $scope.login = function () {
        $http({
            method: 'POST',
            // 拦截名carrots-admin-ajax，登录等地Post /a/login
            url: 'carrots-admin-ajax/a/login',
            // 请求头,注释掉用上面的的写法
            // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            // 发送账号密码,
            params: {
                name: $scope.name,
                pwd: $scope.pwd
            },
            // 请求成功执行的代码，response就是请求回来的对象
        }).then(function successCallback(response) {
            // console.log("登录请求成功");
            if (response.data.code == 0) {
                // 存储用户信信息
                sessionStorage.userData=JSON.stringify(response.data);
                sessionStorage.userLogin="yes";
                // 调用路由state名称跳转，用json的形式传参
                $state.go("background.welcome");
                // location.href直接是路由url地址，传参直接拼在地址url后面
                // location.href = "#!/background";
            } else {
                $scope.loginMessage = response.data.message;
            }
        }, function errorCallback(response) {
            console.log(response);
            $scope.loginMessage = "服务器连接失败";
        });
    }
});