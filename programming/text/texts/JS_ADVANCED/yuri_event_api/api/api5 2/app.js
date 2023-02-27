let c=console.log;
c();
let button=document.getElementById("button");

button.addEventListener('click',function(){//クリックイベント
let xhr = new XMLHttpRequest();
let paramstring = "https://api.doorkeeper.jp/events?q=";

let text = document.getElementById("q").value;
c(text);
//xhr.open("get","https://api.doorkeeper.jp/events?q")
xhr.open("get",paramstring + text);//URL取得
xhr.send();//リクエストをサーバーに送信
xhr.onreadystatechange = function () {
    if(xhr.readyState ===4 && xhr.status === 200) {
          //検索パラメータを使う。使う場所をどうするか。テキスト内容をs=の後にしたとして。s==urlとしたとして。
        let objectAddress = JSON.parse(xhr.responseText);
          //c(objectAddress);

         let $p = document.getElementsByTagName("p");//URLを順番に出す
         let $plength = $p.length;
         let pindex = 0;
      
          
            while(pindex < $plength){
                $p[pindex].innerHTML=("<a id='a1' href='"+objectAddress[pindex].event.public_url+"';>"+ objectAddress[pindex].event.title+"</a>");//ピックアップされて出力される。
                //console.log(objectAddress[pindex].event.public_url);
                pindex++;
             }
           //テキスト入力するとURL文を出す。
         // c(objectAddress[0].event.banner);
        /*if(indices <= 0 ){
            console.log("検索されませんでした。");
        }
        else {
           console.log(indices);
         }*/
    }
    else{
        let p1=document.getElementById("parent");
        let $p = document.getElementsByTagName("a");//URLを順番に出す
        /* while(p1.firstChild){
        p1.removeChild(p1.firstChild);
        }*/
       //p1.innerHTML="";
        c($p);
       c(p1);
        //p1.removeChild($p);
        p1.innerHTML=("該当するイベントがありませんでした。");
    }
}});

//空白を出力することでwhile文を始められないからエラーが起こる
    /*while (indices <= 0){
        indices.push(result);
        result = xhre.indexOf(text,result + 1);
    }*/
     //c(result);
     //c(pindex);
         //c($plength)
        
   
   //let p=document.getElementById("p");
        //let p2=document.getElementById("p2");
          //p.innerHTML=(xhr.responseText);//idまで指定すると出力される。
      //console.log(text)
        //console.log(indices);
       