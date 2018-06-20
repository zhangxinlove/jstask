console.log("JS文件-page3");

function back(){
    history.back();
}//左上角后退
function help(){
    location.assign("page2-help.html")
}//右上角帮助

var inputNum= document.getElementById("players");//input节点
var rangeNum= document.getElementById("thumb");//滑块节点

function InputValue() {    
    rangeNum.value=inputNum.value;
    if (inputNum.value>=4&&inputNum.value<=18){
        setGame();
    }else{
        alert("请输入正确人数（4-18人）！")
    }//判断4-18人
}

function rangeValue(){
    inputNum.value=rangeNum.value;
    console.log(inputNum.value);
}
function reduceNum(){//减号按钮
    rangeNum.value=rangeNum.value-1;
    inputNum.value=rangeNum.value;
    console.log(rangeNum.value)
    setGame();
}
function addNum(){//加号按钮
    rangeNum.value=parseInt( rangeNum.value)+1;//加法有链接字符串的功能，所有要先转化成数字 
    inputNum.value=rangeNum.value;
    console.log(rangeNum.value);
    setGame();
}
function setGame(){
    console.log("执行");
}