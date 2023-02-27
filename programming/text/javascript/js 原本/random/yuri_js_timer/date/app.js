function showclock1(){
var time = new Date();
var hour = time.getHours();
var min = time.getMinutes();
var sec = time.getSeconds();
var msg ="現在時刻は、"+ hour + ":" + min + ":" + sec +"です。";
document.getElementById("realtime").innerHTML=msg;
}
setInterval("showclock1()",1000);

/*window.onload = function (){
    var today = new Date();
    console.log(today)

    console.log("年="+ today.getFullYear());
    console.log("月"+ (today.getMonth() +1));
    console.log("日"+ today.getDate());
    console.log("時"+ today.getHours());
    console.log("分"+ today.getMinutes());
    console.log("秒"+ today.getSeconds());
}
var day=Date.now();
console.log(day);

/*var today = new Date();
var year = today.getFullYear();
var month= today.getMonth() +1;
var day = today.getDate();
console.log(year + "年" + month + "月" + day + "日"); 

/*var day = new Date();

day.setMonth(day.getMonth() +4 );

console.log(day);
/*var day = new Date();
console.log( day );
day.setDate(day.getDate() + 50);
//setdateで日付を再設定できるようになる。
console.log( day );
/*var today2 = new Date("2017/11/27 20:30");

var today3 = new Date(2017, 10, 27, 20, 30);

var today4 = new Date(1561782200000);
console.log(today1);
console.log(today2);
console.log(today3);
console.log(today4);*/



