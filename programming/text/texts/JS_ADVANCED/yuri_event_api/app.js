let button=document.getElementById("button");
button.addEventListener('click',function(){
let xhr = new XMLHttpRequest();
xhr.open("get","https://api.doorkeeper.jp/events?q")
xhr.send();
xhr.onreadystatechange = function () {
    if(xhr.readyState ===4 && xhr.status === 200) {
         let p=document.getElementById("p");
        let p2=document.getElementById("p2");
          //p2.innerHTML=(xhr.responseText);//idまで指定すると出力される。
        const indices = [];
          let text = document.getElementById("text").value;
        xx=xhr.responseText;
        result=xx.indexOf(text);
        while (result !== -1){
            indices.push(result);
            result = xx.indexOf(text,result + 1);

        }
        console.log(indices);
        console.log(result);
        console.log(text)
        if(result=== -1){
            console.log("jjjj");
        }else {
            p.innerHTML=text;
        }
    } 
}});
//let objectAddress = JSON.parse(xhr.responseText);
      
//p.innerHTML=(objectAddress[0].event.id);//idまで指定すると出力される。
       //console.log(xhr.responseText);
        //console.log(objectAddress[0].event.title);//ピックアップされて出力される。
        //console.log(objectAddress);//全体のオブジェクトを取得。
       