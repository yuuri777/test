function sports(a){
   
    let result;
     
     if(a==="野球"){
         result = "イチロー";
     }else if(a==="サッカー") {
         result = "キングカズ";
     }else if(a==="バスケットボール") {
         result = "八村塁";
     }
     //result="電気";
     //if文外の電気で書き換えられてしまった。
     return result ;
     //if文に合致した時点で次の処理に進まない。
     //変数を作る。
     //return　resultを入れることで関数呼び出した場合の出力結果はこの変数にしますよという意味になる。
     //今回if文の条件にあったらresultを関数内に表示させますという意味のif文
     
   
    
     //returnは一つしか返せない。
     
 }
 console.log(sports("野球"));
 console.log(sports("サッカー"));
 console.log(sports("バスケットボール"));
 
     //let  baceball = "イチロー";
     //実引数が野球だからaの中に野球が入っている状態。
       //関数が実行されるまで読まれない。２行目から６行目まで。
       //return a = baceball;
 
 //関数sを実行している。仮引数に野球という文字をいれても関数sを実行している。
 //1行目 aには野球が入る。
 
 //function f(b){
     //let サッカー = "キングカズ";
     //return b = サッカー;
 //}
 
 //function p(c){
     //let  バスケットボール ="八村塁";
     //return c = バスケットボール;
   
    
 //}
 //console.log(f("サッカー"));
 //console.log(p("バスケットボール"));