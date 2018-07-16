console.log('登录页JS');

var btn = $("#btn");
btn.click(function () {
    var user = $("#user").val();
    var pass = $("#pass").val();
    var hide =$("#hide");
    $.ajax({
        type: "post",//类型
        url: "/carrots-admin-ajax/a/login",//地址
        data: {
            name: user,
            pwd: pass
        },
        dataType: "json",
        success: function (data) {
            if (data.message == "success") {
                location.assign('../background.html');
            } else {
                hide.text(data.message);
            }
        }
    })
})