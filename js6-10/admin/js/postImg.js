angular.module("myApp")
    .directive("postImg",function() {
        return {
            restrict: "AE",
            templateUrl: "../views/postImg.html",
            repalce: true,
            controller: function($scope,userService) {
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
            }
        }
    })