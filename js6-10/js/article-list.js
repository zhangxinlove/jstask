// 列表页

//  接口
//  http://new.wiki.jnshu.com/pages/viewpage.action?pageId=1180246
myApp.controller("articleListCtrl", function ($scope, $http, $state, $stateParams) {
    // console.log('state',$state.params)
    // console.log('stateParams',$stateParams)
    // 进入页面获取列表
    $http({
        method: "GET",
        url: "/carrots-admin-ajax/a/article/search",
        params: $stateParams
    }).then(function successCallback(response) {
        // console.log("测试：", )
        $scope.articleList = response.data.data.articleList;
        $scope.paging = response.data.data;
        // console.log($scope.paging)
        // console.log("请求列表成功：", $scope.articleList)
    }, function errorCallback(response) {
        console.log("请求列表失败：", response)
    })

    // 分页

    // 搜索后页面，渲染各选项
    // console.log($stateParams)
    $scope.type = $stateParams.type;
    $scope.status = $stateParams.status;

    // $scope.startAt = ($stateParams.start)?$stateParams.start:new Date(Date.parse($scope.start.replace(/-/g, "/"))).getTime();
    // $scope.endAt = ($stateParams.end)?$stateParams.end:new Date(Date.parse($scope.end.replace(/-/g, "/"))).getTime() + 86400000;
    // 时间插件
    //起始时间
    laydate.render({
        elem: '#startTime', //绑定元素
        lang: 'cn', //语言
        type: 'date', //控件选择类型
        format: "yyyy-MM-dd", //自定义格式，可任意排版
        theme: '#0000ff',
        ready: function (date) {
            // console.log(date); //得到初始的日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
        },
        done: function (value, date, endDate) {
            // console.log(value); //得到日期生成的值，如：2017-08-18
            // console.log(new Date(Date.parse(value.replace(/-/g, "/"))).getTime());
            $scope.start = value;
            $scope.startAt = new Date(Date.parse($scope.start.replace(/-/g, "/"))).getTime();
            // console.log($scope.startAt)
            // console.log('$scope.start', $scope.start)
            // console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
            // console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
        },
        // theme: default（默认简约）、molv（墨绿背景）、#颜色值（自定义颜色背景）、grid（格子主题） //主题
        // min: -7, //7天前
        max: 0, //今天 
        // range: true //或者“ ~ ”，开启左右面板范围选择
        // value: '2018-08-18', //初始值，必须遵循format参数设定的格式
        // 或者下面这种写法,
        value: $stateParams.start, //参数即为：2018-08-20 20:08:08 的时间戳
        isInitValue: true //是否允许填充初始值，默认为 true

    });

    //结束时间
    laydate.render({
        elem: '#endTime',
        lang: 'cn', //语言
        theme: '#0000ff',
        max: 0,
        value: $stateParams.end,
        ready: function (date) {
            // console.log(date); 
        },
        done: function (value, date, endDate) {
            // console.log(value); 
            // console.log(new Date(Date.parse(value.replace(/-/g, "/"))).getTime());
            $scope.end = value;
            $scope.endAt = value?new Date(Date.parse($scope.end.replace(/-/g, "/"))).getTime() + 86400000:undefined;
            // console.log(date); 
        }
    });
    // 搜索按钮
    $scope.search = function () {
        // console.log('type', $scope.type)
        // console.log('status', $scope.status)
        // console.log($scope.start)
        $state.go(
            "background.article-list", {
                page: 1,
                status: $scope.status,
                type: $scope.type,
                startAt: $scope.startAt?$scope.startAt:$stateParams.startAt, //上传Unix时间
                endAt: $scope.endAt?$scope.endAt:$stateParams.endAt,
                start: $scope.start?$scope.start:$stateParams.start, //显示时间
                end: $scope.end?$scope.end:$stateParams.end
            }, {
                reload: true
            });
    }
    // 时间戳转为显示时间

    // 重置按钮
    $scope.resetting = function () {
        $state.go(
            "background.article-list", {
                page: 1,
                status: undefined,
                type: undefined,
                startAt: undefined, 
                endAt: undefined,
                start: undefined, 
                end: undefined
            }, {
                reload: true
            });
    }

    // 上下线按钮
    $scope.changeStatus = function (listId, listStatus) {
        // console.log(listId, listStatus)
        // 三元运算修改状态
        listStatus == 1 ? listStatus = '2' : listStatus = '1';
        // console.log(listId, listStatus)
        $http({
            method: "PUT",
            url: "/carrots-admin-ajax/a/u/article/status",
            params: {
                id: listId,
                status: listStatus
            }
        }).then(function successCallback(response) {
            // console.log('请求成功，重载页面')
            location.reload();
        });
    }
    // // 编辑按钮
    //  直接用路由跳转传参
    // $scope.edit = function (listId) {
    //     $state.go("background.add-article", {
    //         id: listId
    //     }, {
    //         reload: true
    //     });
    // }
    // // 删除按钮
    $scope.delete = function (listId) {
        if (confirm("此操作不可恢复，是否删除？")) {
            $http.delete('carrots-admin-ajax/a/u/article/' + listId)
                .then(function () {
                    alert("删除成功!");
                    $scope.search();
                })
        }
    }

});