console.log("js文件");

var Num = sessionStorage.getItem("Num"); //上一页面输入人数
var playArr = JSON.parse(sessionStorage.getItem("playArr")); //上一页面身份数组

$('#back').on('click', function () {
    alert('上了贼船你还想跑？');
}); //左上角返回按钮
$('#close').on('click', close); //右上角关闭按钮
function close() {
    var message = confirm("是否结束本轮游戏？"); //是否确定
    if (message) {
        location.replace('page2.html'); //返回首页
    }
}

var playbox = $('.play-box');
for (var i = 0; i < Num; i++) {
    playbox.append(
        `<div class="player">
            <div class="play-t">` +
        playArr[i] +
        `</div>
            <div class="play-b">` +
        (i + 1) +
        `号</div>
        </div>`);
} //生成角色模块

window.onload = function () {
    var x = sessionStorage.getItem('x');
    console.log(x)
    if(x==="杀人"){
        $('.mtt').html('杀手请睁眼<br>杀手请选择要杀的对象');
        $('.mtb').html('<span class="jiao"></span>点击下方玩家头像，对被击杀的玩家进行标记')
        $('#playgame').text('确定');   
        kill();
    }else if(x==="投票"){
        $('.mtt').text('发言讨论结束，请大家投票');
        $('.mtb').html('<span class="jiao"></span>点击得票数量最多人的头像')
        $('#playgame').text('投死');
        vote();
    };
}

function kill() {
    
}//杀手杀人

function vote(){
    
}

$('#playgame').on('click', function () {
    
    location.assign('page6.html');
});