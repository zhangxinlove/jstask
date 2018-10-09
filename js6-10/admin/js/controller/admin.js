var app = angular.module("myApp");

app.controller('adminCtrl', function ($scope, $state, $stateParams,$rootScope, userService) {
    console.log($rootScope.title)
    console.log('开始时间' + $stateParams.starAt)
    console.log('结束时间' + $stateParams.endAt);
    console.log('类型' + $stateParams.type);
    console.log('状态' + $stateParams.status);
    console.log('页数' + $stateParams.page);
    console.log($stateParams)
    console.log($state.params)
    $scope.out = function () {
        userService.logout().then(function (res) {
            console.log(res);
        });
        localStorage.login = 'false';
        $state.go('login');
        return
    }

    // console.log('登陆状态' + localStorage.login)
    if (localStorage.login != 'true') {
        alert('请先登录');
        $scope.out();
        return
    }
    
    $scope.menu1 = false;
    $scope.menu2 = false;
    $scope.menu3 = false;

    // 手风琴菜单栏
    $scope.toggle = function (num) {
        switch (num) {
            case 1:
                $scope.menu1 = !$scope.menu1;
                $scope.menu2 = false;
                $scope.menu3 = false;
                break;
            case 2:
                $scope.menu1 = false;
                $scope.menu2 = !$scope.menu2;
                $scope.menu3 = false;
                break;
            case 3:
                $scope.menu1 = false;
                $scope.menu2 = false;
                $scope.menu3 = !$scope.menu3;
                break;
        }
    }

});