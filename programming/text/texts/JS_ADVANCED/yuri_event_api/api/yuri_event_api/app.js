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
      let p1=document.getElementById("p1");

        let $p = document.getElementsByTagName("a");//URLを順番に出す
      
       
        p1.innerHTML="";
        document.getElementById("p2").innerHTML="";

        document.getElementById("p3").innerHTML="";
        document.getElementById("p4").innerHTML="";
        document.getElementById("p5").innerHTML="";
        document.getElementById("p6").innerHTML="";
        document.getElementById("p7").innerHTML="";
        document.getElementById("p8").innerHTML="";
        document.getElementById("p9").innerHTML="";
        document.getElementById("p10").innerHTML="";
        document.getElementById("p11").innerHTML="";
        document.getElementById("p12").innerHTML="";
        document.getElementById("p13").innerHTML="";
        document.getElementById("p14").innerHTML="";
        document.getElementById("p15").innerHTML="";
        document.getElementById("p16").innerHTML="";
        document.getElementById("p17").innerHTML="";
        document.getElementById("p18").innerHTML="";
        document.getElementById("p19").innerHTML="";
        document.getElementById("p20").innerHTML="";
        document.getElementById("p21").innerHTML="";
        document.getElementById("p22").innerHTML="";
        document.getElementById("p23").innerHTML="";
        document.getElementById("p24").innerHTML="";
        document.getElementById("p25").innerHTML="";
        
        p1.innerHTML=("該当するイベントがありませんでした。");

        //c($p);
      // c(p1);
        //p1.removeChild($p);
        //
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
        
    /* while(p1.firstChild){
        p1.removeChild(p1.firstChild);
        }*/
   //let p=document.getElementById("p");
        //let p2=document.getElementById("p2");
          //p.innerHTML=(xhr.responseText);//idまで指定すると出力される。
      //console.log(text)
        //console.log(indices);
       