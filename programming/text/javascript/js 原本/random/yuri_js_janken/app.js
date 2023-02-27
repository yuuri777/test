//ランダム要素。
//if文　＝＝＝。
//innerhtmlで結果表示。
function janken(janken_p){
    
let jan=["グー","チョキ","パー"];
//let janken_p["グー","チョキ","パー"];
//htmlのonclickの引数がconsole.logでの引数だった場合。js内の関数の引数が仮引数となる。
      let janken1 = Math.floor(Math.random() * jan.length);

     if( janken1 === janken_p ){
        result="あいこ";
     }else if( janken1 ===0&&janken_p === 2){
        result="勝利！";
     }else if(janken1 === 1&&janken_p === 0){
        result="勝利！";
     }else if(janken1=== 2&&janken_p === 1){
        result="勝利！";
     }else{
        result="敗北";
     }
     document.getElementById("result").innerHTML=result
     document.getElementById("image").src="janken"+ janken1 +".png";
     //id取得後.srcでhtml上に写真を表示
     //写真のアドレスを数字の部分使う事により呼ばれた配列番号により表示する写真を変えられる。
     
     console.log(janken1);
     
     if(janken_p===0){
        document.getElementById("pa").src="889.jpg"
        document.getElementById("tyoki").src="889.jpg"
        
     }else if(janken_p===1){
        document.getElementById("gu").src="889.jpg"
        document.getElementById("pa").src="889.jpg"
        
     }else if(janken_p===2){
        document.getElementById("gu").src="889.jpg"
        document.getElementById("tyoki").src="889.jpg"
     
     }
     
}
