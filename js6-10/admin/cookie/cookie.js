angular.module("myApp")
    //封装设置cookie
    .factory("_Cookie", function() {
        return {
            setCookie: function(c_name,c_value,expiredays) {
                var  exdate = new Date();
                //生成时间                
                exdate.setTime(Number(exdate)+expiredays);                
                return  document.cookie = c_name+ "=" + escape(c_value) +((expiredays==null)?"":";expires=" + exdate.toGMTString())
            },
            getCookie: function(c_name) {
                if(document.cookie.length>0) {
                    var  arrStr = document.cookie.split("; ")//splite
                    for(var i = 0;i<arrStr.length;i++) {
                        var arr = arrStr[i].split("=");
                        if(arr[0]==c_name) {
                            return arr[1]
                        }
                    }
                    return "";
                }
            }
        }
    })