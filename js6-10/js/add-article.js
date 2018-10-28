// 新增列表

myApp.controller("addArticleCtrl", function ($scope, $http, $state, $stateParams, FileUploader) {
    // console.log($stateParams.id);
    // 有id，说明是编辑页
    if ($stateParams.id) {
        $http.get('carrots-admin-ajax/a/article/' + $stateParams.id)
            .then(function successCallback(response) {
                $scope.addTop = "编辑Article";
                $scope.addArt = response.data.data.article;
                $scope.imageSrc = $scope.addArt.img;
                // console.log('编辑页：', $scope.addArt);
                // 编辑页下拉框灭有默认选中，转为字符串
                $scope.addArt.type = String($scope.addArt.type);
                $scope.addArt.industry = String($scope.addArt.industry);
                // 富文本编辑器设置内容
                editor.txt.html($scope.addArt.content);
            }, function errorCallback(response) {
                console.log("请求列表失败：", response)
            })
    } else {
        // 无id，新增页
        $scope.addTop = "新增Article";
    }

    // 取消按钮
    $scope.cancel = function () {
        if (confirm("是否确定取消操作？")) {
            window.location.reload();
        }
    }

    // 上线保存同一个上传传事件，分别传入不同status状态
    $scope.upLoad = function (x) {
        $scope.article = $scope.addArt;
        $scope.article.status = x;
        $scope.article.img = $scope.imageSrc;
        $scope.article.content = editor.txt.html();
        // 有id，编辑页
        if ($stateParams.id) {
            // console.log('jQuery',$scope.article)
            // $.ajax({
            //     url: '/carrots-admin-ajax/a/u/article/' + $state.params.id,
            //     type: "PUT",
            //     data:$scope.article,
            //     cache:false,
            //     dataType: "json",
            //     success: function(response){
            //         console.log(response)
            //             if (response.code == 0) {
            //                 // 传参判断是否上线或草稿
            //                 if (x == 1) {
            //                     alert("村委草稿");
            //                 } else if (x == 2) {
            //                     alert("立即上线");
            //                 };
            //                 $state.go("background.article-list")
            //             } else {
            //                 alert("保存失败！")
            //             };
            //      },
            //      error:function(err){
            //      }
            //    });

            // console.log('angular', $scope.article)
            $http({
                method: 'PUT',
                url: '/carrots-admin-ajax/a/u/article/' + $state.params.id,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                },
                // params: $scope.article,
                // 序列化为字符串
                data: $.param($scope.article),

            }).then(function successCallback(response) {
                if (response.data.code == 0) {
                    // 传参判断是否上线或草稿
                    if (x == 1) {
                        alert("村委草稿");
                    } else if (x == 2) {
                        alert("立即上线");
                    };
                    $state.go("background.article-list")
                } else {
                    alert("保存失败！")
                };
            });
        } else {

            console.log('新增页上传', $scope.article)
            // 无id，新增页
            $http({
                method: "POST",
                url: "/carrots-admin-ajax/a/u/article",
                params: $scope.article,
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then(function successCallback(response) {
                if (response.data.code === 0) {
                    if (x == 1) {
                        alert("存为草稿");
                    } else {
                        alert("新增成功");
                    };
                    location.reload();
                } else {
                    alert("保存失败！");
                    console.log('失败', response)
                };
            }, function errorCallback(response) {
                console.log("保存失败：", response)
            })
        }
    }


    //点击图片时放大显示图片
    $scope.changePic = function ($event) {
        var img = $event.srcElement || $event.target;
        angular.element("#bigimage")[0].src = img.src;
        angular.element("#js-imgview")[0].style.display = "block";
        angular.element("#js-imgview-mask")[0].style.display = "block";
    }
    //点击图片时放小显示图片
    $scope.closePic = function () {
        angular.element("#js-imgview")[0].style.display = "none";
        angular.element("#js-imgview-mask")[0].style.display = "none";

    }

    // 富文本编辑器
    var E = window.wangEditor;
    var editor = new E('#editor');
    // 或者 var editor = new E( document.getElementById('editor') )
    editor.create();

    var uploader = $scope.uploader = new FileUploader(); /*实例化一个FileUploader对象*/
    uploader.url = '/carrots-admin-ajax/a/u/img/task'; /*以下是设置了两个必须的属性*/
    uploader.queue = [];

    // 清除上传状态符号
    $scope.clearAll = function () {
        $scope.imageUp = "";
        $scope.imageSrc = undefined;
        $scope.uploader.clearQueue();
    }
    // 选择一张图片，点击取消，再点击按钮，就无法选择同一张图片了，只能选择其他图片。解决办法。
    FileUploader.FileSelect.prototype.isEmptyAfterSelection = function () {
        return true;
    };
    // 删除清除预览图片
    $scope.removeImg = function () {
        $scope.imageSrc = undefined;
    }
    /*以下是上传过程中以及结束后所做的处理动作，可以只拿自己需要的部分，最好将这些都放到一个service中*/

    uploader.onWhenAddingFileFailed = function (item /*{File|FileLikeObject}*/ , filter, options) {
        console.info('onWhenAddingFileFailed', item, filter, options);
    };
    uploader.onAfterAddingFile = function (fileItem) {
        console.info('onAfterAddingFile', fileItem);
        // if(){
        //     uploader.removeFromQueue(0)
        // }
    };
    uploader.onAfterAddingAll = function (addedFileItems) {
        console.info('onAfterAddingAll', addedFileItems);
    };
    uploader.onBeforeUploadItem = function (item) {
        console.info('onBeforeUploadItem', item);
    };
    uploader.onProgressItem = function (fileItem, progress) {
        // console.info('onProgressItem', fileItem, progress);
        $scope.imageUp = (progress == 100) ? "√" : "×";
        // if($scope.imageSrc=""){
        //     $scope.imageUp = ""
        // }
    };
    uploader.onProgressAll = function (progress) {
        console.info('onProgressAll', progress);
    };
    uploader.onSuccessItem = function (fileItem, response, status, headers) {
        // alert(response)
        console.info('onSuccessItem', response);
        $scope.imageSrc = response.data.url;
    };
    uploader.onErrorItem = function (fileItem, response, status, headers) {
        //   console.info('onErrorItem', fileItem, response, status, headers);
    };
    uploader.onCancelItem = function (fileItem, response, status, headers) {
        //   console.info('onCancelItem', fileItem, response, status, headers);
    };
    uploader.onCompleteItem = function (fileItem, response, status, headers) {
        //   console.info('onCompleteItem', fileItem, response, status, headers);
    };
    uploader.onCompleteAll = function () {
        //   console.info('onCompleteAll');
    };
})