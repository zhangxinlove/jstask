console.log("js文件");

var Num = sessionStorage.getItem("Num"); //上一页面输入人数
var playArr = JSON.parse(sessionStorage.getItem("playArr")); //上一页面身份数组
var x = sessionStorage.getItem('x'); //判断杀人页面还是投票页面
console.log(x)
var kiNum = sessionStorage.getItem('kiNum'); //杀手人数
var ciNum = Num - kiNum; //平民人数
var deadArr = new Array; //死亡玩家数组


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


(function bgcolor(){
    var playerArr = $('.play-t');//角色盒子数组
    for (var i=0;i<deadArr.length;i++){
        playerArr[deadArr[i]].css('background','red');
    }

})();//重置背景颜色


window.onload = function () {
    if (x === "杀人") {
        $('.mtt').html('杀手请睁眼<br>杀手请选择要杀的对象');
        $('.mtb').html('<span class="jiao"></span>点击下方玩家头像，对被击杀的玩家进行标记')
        $('#playgame').text('确定');
        kill();
    } else if (x === "投票") {
        $('.mtt').text('发言讨论结束，请大家投票');
        $('.mtb').html('<span class="jiao"></span>点击得票数量最多人的头像')
        $('#playgame').text('投死');
        vote();
    };
}//顶部文字和底部按钮文字

    var outbox = document.getElementById('play-box');
function kill() {//杀人页面执行

    outbox.addEventListener('click',function(ev){
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        while(target !== outbox ){
            if(target.className == 'player') {   
                var x =  Number(target.innerText.substring(3,4));
                var playt=new Array;//所有要变色的盒子
                console.log(typeof(x));
                if (target.innerText.substring(0,2) == "杀手") {
                    alert("本是同根生");//杀手不能杀杀手
                } else {
                    target.style.background = 'red';//点击的平民变色
                }
                break;
            }
            target = target.parentNode;
        }
    })


    // playbox.on('click', function () {
    //     var ev = ev || window.event;
    //     var target = ev.target || ev.srcElement;
    //     if (target.className == 'play-t') {
    //         if (target.innerText == "杀手") {
    //             alert("本是同根生");//杀手不能杀杀手
    //         } else {
    //             target.style.background = 'red';//点击的平民变色

    //         }
    //     }
    // })

} //杀手杀人

// function vote() {//投票页面执行
//     playbox.on('click', function () {
//         var ev = ev || window.event;
//         var target = ev.target || ev.srcElement;
//         if (target.className == 'play-t') {
//             target.style.background = 'red';//投票所选玩家变色
//             if (target.innerText == "杀手") {

//             } else if (target.innerText == "平民") {

//             }
//         }
//     })
// }

$('#playgame').on('click', function () {
    switch (x) {
        case '杀人':
            ciNum=ciNum-1;//平民减少一人
            sessionStorage.ciNum=ciNum;
            break;
        case "投票":
            alert('投票页面')
            break;
    }
    // location.assign('page6.html');
});