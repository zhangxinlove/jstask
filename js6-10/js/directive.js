// 分页自定义指令
myApp
    .directive("paging", function ($state) {
        return {
            //restrict 指令在DOM中可以何种形式被引用或声明
            // E（ 元素） < my - directive > < /my-directive> 
            // A（ 属性， 默认值） < div my - directive = "expression" > < /div> 
            // C（ 类名） < div class = "my-directive:expression;" > < /div> 
            // M（ 注释） < --directive: my - directive expression
            restrict: 'EA',


            // priority 优先级 用来表示指令使用的优先顺序
            // 如果一个元素上具有两个优先级相同的指令，声明在前面的那个会被优先调用。
            // 如果其中一 个的优先级更高，则不管声明的顺序如何都会被优先调用：具有更高优先级的指令总是优先运行。
            // priority: Number,


            // terminal 用来告诉AngularJS停止运行当前元素上比本指令优先级低的指令。
            // 但同当前指令 优先级相同的指令还是会被执行。
            // terminal: Boolean,


            //template 
            // 用来表示模板，可以是一段字符串,也可以是一个函数。
            // template: String or Template Function: function (tElement, tAttrs)(...
            // },


            // templateUrl 用来表示模板，与上面的template功能相似，但表示路径，
            // 可以是外部HTML文件路径的字符串也可以是一个可以接受两个参数的函数，参数为tElement和tAttrs，
            // 并返回一个外部HTML文件 路径的字符串。
            templateUrl: "view/paging.html",


            // replace 默认为false，模板会被当作子元素插入到调用此指令的元素内部，为true，则直接替换此元素
            // replace: Boolean or String,


            // （1）当scope设置为true时，会从父作用域继承并创建一个新的作用域对象。
            // （2） 默认为false，并不会创建新的作用域对象，直接使用父scope。
            // （3）设置为{}，表示隔离作用域，指令的 模板就无法访问外部作用域了
            // scope: {paging: "="},
            scope: false,


            // transclude是一个可选参数，表示是否允许在指令中，嵌入内容。值为Boolean，
            // 默认值为false代表不允许在指令中嵌入内容，如果手动设置为true后，
            // 要结合ng-transclude指令使用，不然和false效果一样。
            // transclude: Boolean,


            // controller参数可以是一个字符串或一个函数。当设置为字符串时，会以字符串的值为名字， 
            // 来查找注册在应用中的控制器的构造函数.当为函数时，可以像平时写控制器那样写，
            // 可以将任意可以被注入的AngularJS服务传递给控制器
            // controller: String or
            // function (scope, element, attrs, transclude, otherInjectables) { ...
            // },


            // controllerAs参数用来设置控制器的别名，可以以此为名来发布控制器，并且作用域可以访 问controllerAs。
            // 这样就可以在视图中引用控制器，甚至无需注入$scope。
            // controllerAs: String,


            // require参数可以被设置为字符串或数组，字符串代表另外一个指令的名字。require会将控 
            // 制器注入到其值所指定的指令中，并作为当前指令的链接函数的第四个参数。
            // require: String,



            link: function (scope) {
                // console.log($state)

                // console.log('分页数据',scope.paging)
                new Page({
                    id: 'pagination',
                    pageTotal: Math.ceil(scope.paging.total / scope.paging.size), //必填,总页数
                    pageAmount: 10, //每页多少条
                    dataTotal: scope.paging.total, //总共多少条数据
                    curPage: $state.params.page, //初始页码,不填默认为1
                    pageSize: scope.paging.size, //分页个数,不填默认为5
                    showPageTotalFlag: true, //是否显示数据统计,不填默认不显示
                    showSkipInputFlag: true, //是否支持跳转,不填默认不显示
                    getPage: function (page) {
                        //获取当前页数
                        // console.log(page);
                        $state.go(
                            "background.article-list", {
                                page: page
                            }, {
                                reload: true
                            });

                    }
                })
            },
            // compile: // 返回一个对象或连接函数，如下所示： 
            //     function (tElement, tAttrs, transclude) {
            //         return {
            //             pre: function (scope, iElement, iAttrs, controller) { ...
            //             },
            //             post: function (scope, iElement, iAttrs, controller) { ...
            //             }
            //         }
            //         // 或者 
            //         return function postLink(...) { ...
        }

    });