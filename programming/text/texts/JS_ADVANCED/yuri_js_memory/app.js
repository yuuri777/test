let c=console.log;
"use strict";
document.addEventListener("DOMContentLoaded",()=>{
    class Card{
        constructor(suit,num){
            this.suit=suit;
            this.num=num;
            //this.front = `${suit}${num<10 ? "0":""}${num}.png`;//このif文により10より少ない数字の時は一桁目に0を置いてくれる。this.frontで５２個の文字列を順番に出し、写真が出るような仕組みになっている。
            this.front = `${suit}${num}.png`;
            //c(this.front);
        }
    }
const cards =[];
const kinds = ["d","s","h","c"];//kinds[i]   kindsの４つの配列を１３回ずつ出す。kinds[i],jで配列全てと１３までが順番に出る
for(let i=0; i<kinds.length; i++){
    for(let j=1; j<=13; j++){
        let card=new Card(kinds[i],j);
        cards.push(card);
        //c(kinds[i],j);
    }
}
let firstCard=null;
c(firstCard);
let secondCard=null;
const flip=(eve)=>{
    let div=eve.target;
    c(div);
    //div.classList.toggle("back");//toggleで対象にクラスがあったら削除、なかったら削除を繰り返すプロパティ
if(!div.classList.contains("back")|| secondCard !== null){//backというクラスがない(表面のカードをクリック)、もしくはsecondCardがnull(3枚目のカードをクリック時)ではない場合return
    return;
}
div.classList.remove("back");///表面にするクラスbackを削除して
if(firstCard === null){//もしそれが１枚目ならfirstCardという変数に変数div(新しく作った写真URL付き、cardというクラス名付きのdiv要素)を代入。
    firstCard=div;
}else{//firstCardにdivを代入したからnullが入っていない状態になり、elseが実行される
    secondCard=div;// secondCardにdivを代入
    if(firstCard.num===secondCard.num){//それぞれの数字が一致していたらfadeoutクラスを付け足す
        firstCard.classList.add("fadeout");//cssのfadeoutを実行して２つの変数を消す
        secondCard.classList.add("fadeout");
        [firstCard,secondCard]=[null,null];//このコードがないとひとくみ合わさってから２回目のカード合わせが出来なくなる。
        firstCard=null;//上と同じこと
        secondCard=null;
    }else{
        setTimeout(()=>{
          firstCard.classList.add("back");
            secondCard.classList.add("back");
            [firstCard,secondCard]=[null,null];
        },1200)
    }
}


}
const cardgrid=document.getElementById("cardgrid");

const initgrid=()=>{
    cardgrid.textContent=null;//この一行でcardgridに入っている要素を全て削除
    for(let i=0;i<kinds.length;i++){
        for(let j=0;j<13;j++){
            let div=document.createElement("div");//for文で繰り返しながらdiv要素を作り、appendで出す。
            let card=cards[i*13+j];//+と,%どちらも同じように機能する。
            //div.textContent=card.suit+":"+card.num;//最初のクラスにつけた引数を使用。
            div.style.backgroundImage=`url(${card.front})`;
           
            div.classList.add("card","back");//class名の追加
            div.onclick=flip;
            div.num=card.num;
            cardgrid.append(div);
        }
    }
};
const shuffle=()=>{
    let i=cards.length;
  
    while(i){
        let index= Math.floor(Math.random()*i--);
        [cards[index],cards[i]]=[cards[i],cards[index]]
    }
}
const startBt=document.getElementById("startBt");
startBt.addEventListener("click",()=>{
        shuffle();
        initgrid();
    
})
});
//https://joytas.net/programming/website/js_flip-2





