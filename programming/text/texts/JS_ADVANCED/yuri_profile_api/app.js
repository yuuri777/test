let xhr = new XMLHttpRequest();
let button=document.getElementById("button");
button.addEventListener('click',function(){
xhr.open("GET",'https://randomuser.me/api/');
//get,urlでどんな方法でどのサーバーを取得するか決める。
xhr.send();
//この表記で通信を開始。
xhr.onreadystatechange =function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        
        //console.log(xhr.responseText);
            let p1 = document.getElementById("p1");
            let p2 = document.getElementById("p2");
            let p3 = document.getElementById("p3");
            let p4 = document.getElementById("p4");
     //element.textContent = (xhr.responseText);
            let  objectAddress = JSON.parse(xhr.responseText);
        console.log(objectAddress);//オブジェクトとしての取得
            //console.log(objectAddress.results[0].picture.large)  //写真のみ取り出せる。
        p1.innerHTML = '<img id="img"src="'+(objectAddress.results[0].picture.large)+'">' ;//画像の取り出し。
        
        if((objectAddress.results[0].gender) === "male"){
            p2.innerHTML = "男性";
        }else if((objectAddress.results[0].gender) === "female"){
            p2.innerHTML = "女性";
        }
        
        p3.innerHTML = (objectAddress.results[0].name.title)+" "+(objectAddress.results[0].name.first)+" "+(objectAddress.results[0].name.last)
        p4.innerHTML = (objectAddress.results[0].email);
   }} });
        //img.appendChild(element)
        //関数でサーバーから受け取るための記述を{}内に記述してある。
        //readystateの値は５段階ある。
        //readystarte 値で検索
        //statesの値もあり、検索
        //２００の場合は成功
        //最後にxhr.responseTextでデータを取得できる。
        
    
/*div.innerHTML = text2 + '<input type="text" id="text2"><button id="edit">編集</button><button id="del">削除</button>' ;
    del.addEventListener('click',function(){
        list.removeChild(div)
}
/*const json = {
    "name": "名無し",
    "age": 12,
    "family": {
        "dad": "Daddy",
        "mam": "Mammy"
    }
}
Object.keys(json).forEach(function (key) {
    console.log(json[key] );
    console.log("結合カンマ:", json[key]);
    console.log("結合プラス:" + json[key]);
  });*/


//https://randomuser.me/api/*/