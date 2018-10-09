angular.module("myApp")
    .directive('pages',function(){
        return {
            restrict: "AE",
            templateUrl:"../views/pages.html",
            repalce:true,
            controller:function($scope,userService) {
            //分页逻辑
            //curr当前页数  all总页数 count要显示的页数范围  from页数范围开始  to页数范围结束  range显示的页数范围数组
            function changeRange() {

                function getRange(curr, all, count) {
                    var arr = [];
                    //计算显示的页数
                    curr = parseInt(curr);
                    all = parseInt(all);
                    count = parseInt(count);
                    var from = curr - parseInt(count / 2);
                    var to = curr + parseInt(count / 2) + (count % 2) - 1;
                    //显示的页数容处理
                    if (from <= 0) {
                        from = 1;
                        to = from + count - 1;
                        if (to > all) {
                            to = all;
                        }
                    }
                    if (to > all) {
                        to = all;
                        from = to - count + 1;
                        if (from <= 0) {
                            from = 1;
                        }
                    }
                    for (var i = from; i <= to; i++) {
                        arr.push(i);
                    }
                    $scope.range = arr;
                }
                getRange($scope.curr, $scope.all, $scope.count);
            }
    
            //直接点击页数功能
            $scope.clickPage = function () {
                $scope.curr = this.item;
                changeRange();
                $scope.getList();
            }
    
            // 分页按钮功能
            $scope.changePage = function (type) {
                switch (type) {
                    case '-1': //上一页
                        if ($scope.curr > 1) {
                            --$scope.curr;
                            $scope.getList();
                        }
                        break;
                    case '+1': //下一页
                        if ($scope.curr < ($scope.all)) {
                            ++$scope.curr
                            $scope.getList();
                        }
                        break;
                    case 'first':
                        $scope.curr = 1;
                        changeRange()
                        $scope.getList()
                        break;
                    case 'end':
                        $scope.curr = $scope.all;
                        changeRange()
                        $scope.getList()
                        break;
                }
            }
            //跳转页数功能
            $scope.jump = function () {
                if ($scope.jumpPage <= $scope.all && $scope.jumpPage >= 1) {
                    $scope.curr = $scope.jumpPage;
                }
                changeRange();
                $scope.getList();
            }
            
            }
        }
    })