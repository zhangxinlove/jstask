var app = angular.module("myApp");

app.controller('addCtrl', function ($scope, $http, $state, $stateParams, userService, articleConstant) {
    // 把类型数据模型赋予变量
    $scope.select = articleConstant;
    console.log($stateParams.id);
    $scope.load = function () {
        if ($stateParams.id != undefined) {
            console.log($stateParams.id);
            var id = parseInt($stateParams.id);
            //通过ID发送请求获得线上数据
            userService.oneArticle(id)
                .then(function (res) {
                    var res = res.data.data.article;
                    console.log(res);
                    $scope.title = res.title;
                    $scope.select.$type = $scope.select.type[res.type + 1];
                    $scope.imgUrl = res.img;
                    $scope.content = res.content;
                    $scope.url = res.url;
                    $scope.select.$industry = $scope.select.industry[res.industry]
                })
            $scope.addHead = '编辑Article'
        } else {
            $scope.addHead = '新增Article'
            $scope.select.$type = $scope.select.type[0];
            $scope.select.$industry = $scope.select.industry[0];
        }
    }();



    // 上线
    $scope.sendData = function (status) {
        if ($scope.form.A1.$error.required || $scope.form.A2.$error.required || $scope.form.A3.$error.required) {
            alert('请填写完整');
            return
        }
        if($scope.select.$type.num == 3) {
            if($scope.select.$industry == undefined) {
                alert('请填写二级菜单')
                return
            }
        }
        if ($stateParams.id != undefined) {
            redact(status)
        } else {
            Addhttp(status);
        }



    };
    // 新增逻辑
    function Addhttp() {
        var params = {
            title: $scope.title,
            type: $scope.select.$type.num,
            status: status,
            img: $scope.imgUrl,
            content: $scope.content,
            url: $scope.url,
            industry: $scope.select.$industry.num
        }
        userService.addArticle(params)
            .then(function (res) {
                console.log(res);
                $state.go('admin.list');
            })
    }

    //编辑逻辑
    function redact(status) {
        var id = parseInt($stateParams.id);
        var timestamp = (new Date()).valueOf();
        console.log(timestamp);
        var params = {
            title: $scope.title,
            status: status,
            img: $scope.imgUrl,
            content: $scope.content,
            url: $scope.url,
            industry: $scope.select.$industry.num,
            createAt: timestamp,
            type: $scope.select.$type.num
        }
        userService.redactArticle(id, params)
            .then(function (res) {
                console.log(res);
                $state.go('admin.list');
            })
    }


    // 选择图片
    $scope.chooseImage = function () {
        var file = document.getElementById("file").files[0]
        var formData = new FormData();
        formData.append('file', file);
        $('.imgName').text(file.name);
        $('.imgSize').text((file.size / 1000000) + 'MB');
        $('.imgshow').show();
    }
    // 上传图片
    $scope.pushImage = function () {
        var pro = 0; //设置进度条的初始值
        var proBar = setInterval(Time, 10)

        function Time() {
            pro += 2;
            document.getElementById("progress").style.width = pro + '%';
            if (pro == 100) {
                clearInterval(proBar);
            }
        }
        var file = document.getElementById("file").files[0]
        var formData = new FormData();
        formData.append('file', file);

        userService.postImg(formData)
            .then(function (res) {
                console.log(res)
                $scope.imgUrl = res.data.data.url;
                $scope.imgTxt = 'OK';
            })
    }
})