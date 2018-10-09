// 过滤器

myApp
    // 类型
    .filter('filterType', function () {
        return function (type) {
            switch (type) {
                case 0:
                    return '首页';
                case 1:
                    return '找职位';
                case 2:
                    return '找精英'
                case 3:
                    return '行业大图';
            };
        }
    })
    // 状态
    .filter('filterStatus',function(){
        return function(status){
            switch (status){
                case 1:
                return '草稿';
                case 2:
                return '上线';
            }
        }
    })
    // 上下线按钮，与状态相反
    .filter('filterUnStates',function(){
        return function(status){
            switch (status){
                case 1:
                return '上线';
                case 2:
                return '下线';
            }
        }
    })