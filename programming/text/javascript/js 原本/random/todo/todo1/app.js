//function kkk() {
    const p = document.createElement("p");
    p.innerText = "konn";
    document.body.appendChild(p);

    var elem = document.createElement("div");
    //divタグ作成
    elem.id= "child";
    //divタグのidをchildに
    elem.classname = "cls";
    //divタグのクラス名を作成。
    elem.innerHTML = "子要素";
    //divタグに子要素という文字列を入れてhtml内に出力する
    var parent = document.getElementById("parent");
    
    parent.appendChild(elem);
/*console.log(kkk());
let aa="<p>jjjj</p>";

innerHTML="a";
textContent="aa";*/
//createでタグ付け
/*function kkk(){
let tb=document.getElementById("tb")
p=document.createElement("p");
p.innertext="konn"
document.tb.appendChild(p);
}
//tb.innerHTML="a";
console.log(kkk());*/