let xhr = new XMLHttpRequest();
xhr.open("GET",'https://zip-cloud.appspot.com/api/search?zipcode=1070062');
//get,urlでどんな方法でどのサーバーを取得するか決める。
xhr.send();
//この表記で通信を開始。
xhr.onreadystatechange =function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
        //関数でサーバーから受け取るための記述を{}内に記述してある。
        //readystateの値は５段階ある。
        //readystarte 値で検索
        //statesの値もあり、検索
        //２００の場合は成功
        //最後にxhr.responseTextでデータを取得できる。
        
    }
}