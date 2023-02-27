let c=console.log;
c();
let button=document.getElementById("button");
button.addEventListener('click',function(){//クリックイベント
let xhr = new XMLHttpRequest();
xhr.open("get","https://api.doorkeeper.jp/events?q")//URL取得
xhr.send();//リクエストをサーバーに送信
xhr.onreadystatechange = function () {
    if(xhr.readyState ===4 && xhr.status === 200) {
         let p=document.getElementById("p");
        //let p2=document.getElementById("p2");
          //p2.innerHTML=(xhr.responseText);//idまで指定すると出力される。
          const indices = [];
          let text = document.getElementById("text").value;
        let xhre=xhr.responseText;
        
        let result=xhre.indexOf(text);
        let objectAddress = JSON.parse(xhr.responseText);
          c(objectAddress);
         p.innerHTML=("<a href='"+objectAddress[0].event.public_url+"';>URLです</a>");//ピックアップされて出力される。
         c(objectAddress[0].event.banner);
     //c(result);
     while (result !== -1 && result !== 0){//＆＆はresultが−１と０じゃなければ実行する。||はresultが−１か０じゃなければ実行する。ということは０の場合はー１ではないから実行される。
        indices.push(result);
        result = xhre.indexOf(text,result + 1);
    }
    //空白を出力することでwhile文を始められないからエラーが起こる
    /*while (indices <= 0){
        indices.push(result);
        result = xhre.indexOf(text,result + 1);
    }*/
        if(indices <= 0 ){
            console.log("jjjj");
        }
        else {
           console.log(indices);
         }
        
        //console.log(text)
        //console.log(indices);
        
        
    } 
}});