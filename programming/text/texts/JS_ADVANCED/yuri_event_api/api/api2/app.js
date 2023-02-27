
var paramsString = "q=URLUtils.searchParams&topic=api";
var searchParams = new URLSearchParams(paramsString);

// 検索パラメーターを列挙する
for (let p of searchParams) {
  console.log(p);
}

searchParams.has("topic") === true; // true
searchParams.get("topic") === "api"; // true
searchParams.getAll("topic"); // ["api"]
searchParams.get("foo") === null; // true
let s=searchParams.append("topic", "webdev");
console.log(s);
let p=searchParams.toString(); // "q=URLUtils.searchParams&topic=api&topic=webdev"
console.log(p);
searchParams.set("topic", "More webdev");
searchParams.toString(); // "q=URLUtils.searchParams&topic=More+webdev"
//searchParams.delete("topic");
//searchParams.toString(); // "q=URLUtils.searchParams"

/*let url = "http:www.example.com?lib=jquery&ver=3(window.location.href);
var urlParam = location.search.substring(1);
if(urlParam) {
  // 「&」が含まれている場合は「&」で分割
  var param = urlParam.split('&');
  // パラメータを格納する用の配列を用意
  var paramArray = [];
  // 用意した配列にパラメータを格納
  for (i = 0; i < param.length; i++) {
    var paramItem = param[i].split('=');
    paramArray[paramItem[0]] = paramItem[1];
  }  // パラメータidがosakaかどうかを判断する
  if (paramArray.id == 'osaka') {
    $('.pram').append('<p>大阪です</p>');
  } else {
    $('.pram').append('<p>大阪ではありません</p>');
  }
}*/

/*indexof配列　const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf('bison', 2));
// Expected output: 4

console.log(beasts.indexOf('giraffe'));*/
/*//url出力
//var url = location.search;

//var url = location.href;
//document.getElementById("urlparam").textContent = url;
//console.log(url);
var param = location.search;
document.getElementById("inputparam").value = param;
console.log(param)*/
/*クイズ
const quiz = [
  {
      question:"ゲーム市場、最も売れたゲーム機は次の内どれ？",
      answer:[
      'スーパーファミコン',
      'プレイステーション２',
      'ニンテンドースイッチ',
      'ニンテンドーDS'
  ],
  correct:'ニンテンドーDS'
  },{
      question:'日本で初めてノーベル賞を取った人は誰でしょう？',
      answer:[
      '川端康成',
      '湯川秀樹',
      '湯川秀樹',
      '福沢諭吉'
  ],
  correct:'湯川秀樹'
  },{
      question:"日本で一番高い山は?",
      answer:[
      '富士山',
      '北岳',
      '奥穂高岳',
      '高尾山'
  ],
  correct:'富士山'
  }
]
const quizlength = quiz.length;
let quizindex=0;
let c=console.log;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonlength = $button.length;

const setupquiz = () => {//問題切り替え
  document.getElementById('js-question').textContent = quiz[quizindex].question;//問題文切り替え
  let buttonindex = 0;
  //let buttonlength = $button.length;
  while(buttonindex < buttonlength){
  $button[buttonindex].textContent = quiz[quizindex].answer[buttonindex];
  buttonindex++;
}
}
setupquiz();

const clickhandler = (e) => {//正解かどうかのアラート
  if(quiz[quizindex].correct === e.target.textContent){
      window.alert("正解");
      score++;
  }else{
      window.alert("不正解");
  }
  quizindex++;
  if(quizindex < quizlength){//4問とも終わった際の結果発表
      setupquiz();
  }else {
      window.alert("終了!");
      if(score === 0){
          window.alert("残念!");
      }else if(score === 1) {
          window.alert("まだまだ!");
      }else if(score === 2) {
          window.alert("おしい!");
      }else if(score === 3) {
          window.alert("素晴らしい!")
      }
  }
}

let handlerindex =0;

while(handlerindex < buttonlength){//buttonlengthの４になるまでボタンが押されるたびにclickhandler関数が発生
  $button[handlerindex].addEventListener('click',(e) => {
  clickhandler(e);
  });
  handlerindex++;
}*/
/* 課題下書きlet c=console.log;
c();
let button=document.getElementById("button");
let text = document.getElementById("text").value;
button.addEventListener('click',function(){//クリックイベント
let xhr = new XMLHttpRequest();
xhr.open("get","https://api.doorkeeper.jp/events?q")//URL取得
//xhr.open("get","https://api.doorkeeper.jp/groups/:group/events")//
xhr.send();//リクエストをサーバーに送信
xhr.onreadystatechange = function () {
    if(xhr.readyState ===4 && xhr.status === 200) {
           const indices = [];
          //検索パラメータを使う。使う場所をどうするか。テキスト内容をs=の後にしたとして。s==urlとしたとして。
        let xhre=xhr.responseText;
        let result=xhre.indexOf(text);
        let objectAddress = JSON.parse(xhr.responseText);
          c(objectAddress);
          let $p = document.getElementsByTagName("p");
         let $plength = $p.length;
         let pindex = 0;
         while(pindex < $plength){
            $p[pindex].innerHTML=("<a id='a1' href='"+objectAddress[pindex].event.public_url+"';>"+ objectAddress[pindex].event.title+"</a>");//ピックアップされて出力される。
            console.log(objectAddress[pindex].event.public_url);
            pindex++;
         }
         let a=document.getElementsByTagName("a")
         c(a);
           //テキスト入力するとURL文を出す。
         // c(objectAddress[0].event.banner);
      while (result !== -1 && result !== 0){//＆＆はresultが−１と０じゃなければ実行する。||はresultが−１か０じゃなければ実行する。ということは０の場合はー１ではないから実行される。
        indices.push(result);
        result = xhre.indexOf(text,result + 1);
    }
        if(indices <= 0 ){
            console.log("検索されませんでした。");
        }
        else {
           console.log(indices);
        }
    } 
}});*/
/*var elem1, elem2;

// document.forms は HTMLCollection

elem1 = document.forms[0];
elem2 = document.forms.item(0);

alert(elem1 === elem2); // 表示: "true"

elem1 = document.forms.myForm;
elem2 = document.forms.namedItem("myForm");

alert(elem1 === elem2); // 表示: "true"

elem1 = document.forms["named.item.with.periods"];*/
/*モーダル表示window.addEventListener("DOMContentLoaded", () => {

    // 現在のURLを取得して整形
    var href = location.href;
    var ary = href.split('/');
var str = ary[ary.length - 1];
var url = href.replace(str, '');
// URLを部分一致で検索する文字列
var searchword = 'javascript';
  console.log(url);
  console.log(searchword);
var indextext = url.indexOf(searchword);
  //console.log(indextext);

  // 部分一致で条件分岐
  if (url.indexOf(searchword) > -1) {
    // 「javascript」の文字がURLに含まれる場合の処理

  // モーダル 
  var popup = document.getElementById('firstTimeModal');
  if(!popup) return;
  popup.classList.add('is-show');

  var blackBg = document.getElementById('js-black-bg');
  var closeBtn = document.getElementById('modalCloseCloss');

  closePopUp(blackBg);
  closePopUp(closeBtn);

  function closePopUp(elem) {
    if(!elem) return;
    elem.addEventListener('click', function() {
      popup.classList.remove('is-show');
    })
  }
}
 
});*/
/*課題テストlet c=console.log;
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
        //p.innerHTML=(xhr.responseText); //idまで指定すると出力される。
        const indices = [];//検索ヒットした文字の場所をからの配列に
        let text = document.getElementById("text").value;//テキスト内の文字を取得
        let xhre=xhr.responseText;
        let result=xhre.indexOf(text);
        //検索内容をsrcのみを対象にする。
     c(result);
     while (result !== -1 && result !== 0){//＆＆はresultが−１と０じゃなければ実行する。||はresultが−１か０じゃなければ実行する。ということは０の場合はー１ではないから実行される。
        indices.push(result);
        result = xhre.indexOf(text,result + 1);
    }
    //空白を出力することでwhile文を始められないからエラーが起こる
    
        if(indices <= 0 ){
            console.log("jjjj");
        }
        else {
           p.innerHTML=indices;
         }
        
        
        //console.log(text)
        console.log(indices);
        
        
    } 
}});
//textが未記入の場合は
//let objectAddress = JSON.parse(xhr.responseText);
      
//p.innerHTML=(objectAddress[0].event.id);//idまで指定すると出力される。
       //console.log(xhr.responseText);
        //console.log(objectAddress[0].event.title);//ピックアップされて出力される。
        //console.log(objectAddress);//全体のオブジェクトを取得。
       */
/*マップ検索function initAutocomplete() {  
    //マップの初期設定です。
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -33.8688, lng: 151.2195 },
      zoom: 13,
      mapTypeId: "roadmap",
    });
    const input = document.getElementById("pac-input");
    const searchBox = new google.maps.places.SearchBox(input);
   ////"SearchBoxクラス"はPlacesライブラリのメソッド。引数はinput(ドキュメント上ではinputFieldとある)。
   ////[https://developers.google.com/maps/documentation/javascript/reference/places-widget#SearchBox]
  
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    ////"ControlPosition"クラスはコントローラーの位置を定める。
    ////https://lab.syncer.jp/Web/API/Google_Maps/JavaScript/ControlPosition/
    ////https://developers.google.com/maps/documentation/javascript/examples/control-positioning
  
    map.addListener("bounds_changed", () => {
      searchBox.setBounds(map.getBounds());
    });
    ////"bound_changed"イベントは(見えてる範囲の地図･ビューポートに変化があったときに発火)
    ////https://lab.syncer.jp/Web/API/Google_Maps/JavaScript/Map/bounds_changed/ 
    ////"getBounds"メソッドはビューポートの境界を取得。Mapクラスのメソッド。
    ////https://lab.syncer.jp/Web/API/Google_Maps/JavaScript/Map/getBounds/
  
    let markers = [];
    searchBox.addListener("places_changed", () => {
    ////"place_chaged"イベントはAutoCompleteクラスのイベント.
    ////https://developers.google.com/maps/documentation/javascript/reference/places-widget#Autocomplete.place_changed
  
      const places = searchBox.getPlaces();
      ////"getPlaces"メソッドはクエリ(検索キーワード)を配列(PlaceResult)で返す。
      ////https://developers.google.com/maps/documentation/javascript/reference/places-widget#Autocomplete.place_changed
  
      if (places.length == 0) {
        return;
      }
      // Clear out the old markers.
      markers.forEach((marker) => {
        //"forEach"メソッドは引数にある関数へ、Mapオブジェクトのキー/値を順に代入･関数の実行をする。
          //Mapオブジェクト:
            //https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Map
        marker.setMap(null);
        ////setMapメソッドはMarker(Polyline,Circleなど)クラスのメソッド。Markerを指定した位置に配置する。引数nullにすると地図から取り除く。
      });
      markers = [];
      // For each place, get the icon, name and location.
      const bounds = new google.maps.LatLngBounds();
      ////"LatLngBounds"クラスは境界を作るインスンタンスを作成。引数は左下、右上の座標。
      ////https://lab.syncer.jp/Web/API/Google_Maps/JavaScript/LatLngBounds/#:~:text=LatLngBounds%E3%82%AF%E3%83%A9%E3%82%B9%E3%81%AF%E5%A2%83%E7%95%8C(Bounding,%E4%BD%9C%E3%82%8B%E3%81%93%E3%81%A8%E3%82%82%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82
      places.forEach((place) => {
        if (!place.geometry) {
          ////"geometry"はplaceライブラリのメソッド。
  
          console.log("Returned place contains no geometry");
          return;
        }
        const icon = {
          url: place.icon,
          ////"icon"はアイコンを表すオブジェクト。マーカーをオリジナル画像にしたいときなど。
          ////https://lab.syncer.jp/Web/API/Google_Maps/JavaScript/Icon/
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          ////"Point"クラスはマーカーのラベルなどの位置を決めるインスタンスメソッド。
          ////https://lab.syncer.jp/Web/API/Google_Maps/JavaScript/Point/
  
          scaledSize: new google.maps.Size(25, 25),
        };
        // Create a marker for each place.
        markers.push(
          new google.maps.Marker({
            map,
            icon,
            title: place.name,
            position: place.geometry.location,
          })
        );
  
        if (place.geometry.viewport) {
          ////viewport"メソッド
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
          ////"union"メソッドはLatLngBoundsクラスのメソッド。自身の境界に指定した境界を取り込んで合成する。
          ////https://lab.syncer.jp/Web/API/Google_Maps/JavaScript/LatLngBounds/union/
        } else {
          bounds.extend(place.geometry.location);
          ////"extend"メソッドはLatLngBoundsクラスのメソッド。自身の境界に新しく位置座標を追加する。
          ////https://lab.syncer.jp/Web/API/Google_Maps/JavaScript/LatLngBounds/extend/
        }
      });
      map.fitBounds(bounds);
      ////"fitBounds"メソッドはmapクラスのメソッド。指定した境界を見えやすい位置にビューポートを変更する。
      ////https://lab.syncer.jp/Web/API/Google_Maps/JavaScript/Map/fitBounds/#:~:text=Map.fitBounds()%E3%81%AFMap,%E5%A4%89%E6%9B%B4%E3%81%97%E3%81%A6%E3%81%8F%E3%82%8C%E3%81%BE%E3%81%99%E3%80%82
  
    });
  }*/