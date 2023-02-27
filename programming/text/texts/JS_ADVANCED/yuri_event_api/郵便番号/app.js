let c=console.log;

let xhr=new XMLHttpRequest();

xhr.open("GET","https://zipcloud.ibsnet.co.jp/api/search?zipcode=")

xhr.send();

xhr.onreadystatechange = function() {
   if(xhr.readyState === 4 && xhr.status === 200) {
    let objectAddress = JSON.parse(xhr.responseText);
    console.log(objectAddress);
   }
}
let search = document.getElementById('search');
c(search);
search.addEventListener('click', ()=>{
    //クリックイベント
    let api = 'https://zipcloud.ibsnet.co.jp/api/search?zipcode=';
    //apiにURL
    let error = document.getElementById('error');
    //郵便番号が見つからなかった場合のエラー
    
    let input = document.getElementById('input');
    //テキスト入力欄
    let address1 = document.getElementById('address1');
    
    let address2 = document.getElementById('address2');
    let address3 = document.getElementById('address3');
    let param = input.value.replace("-",""); //入力された郵便番号から「-」を削除
    //input.valueでテキストに入った文字がreplaceの対象になるように
    //replaceで文字列の置き換え。
    let url = api + param;
    //今回のapi URLとテキスト内容を変数に
    
    fetchJsonp(url, {
        timeout: 10000, //タイムアウト時間
    })
    //変数urlの内容が１０秒後に無効になるように
    .then((response)=>{
        //.then 検索
        error.textContent = ''; 
        //HTML側のエラーメッセージ初期化
        return response.json();  
        //response.json()で検索
        //responseはインターフェイス
        //jsonは関数ではない
    })
    //fetchで検索
    .then((data)=>{
        if(data.status === 400){ //エラー時
            error.textContent = data.message;
        }else if(data.results === null){
            error.textContent = '郵便番号から住所が見つかりませんでした。';
        } else {
            address1.value = data.results[0].address1;
            address2.value = data.results[0].address2;
            address3.value = data.results[0].address3;
            
        }
        //オブジェクトとして出力させた時のdataが４００の時はオブジェクトの中のmessageに入っている文章が出る。
        //dataがnullの時はelse ifの文章が出る。
        //
    })
    .catch((ex)=>{ //例外処理
        console.log(ex);
    });
}, false);

