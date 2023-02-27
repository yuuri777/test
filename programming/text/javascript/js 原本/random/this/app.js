/*function getFunc(id){
    console.log(id);
}
const test={
    name:"taro",
    getname: function(){
        return this.name;
    }
}
console.log(this);
console.log(test.getname);

const saythis = function (){
     console.log(this);
    }
const obj = {name:'taro'};
obj.saythis = saythis;

saythis();
obj.saythis();*/

const kk = function(name){
    this.name=name;
}


const taro = new kk("taro");
kk("test");

function person(name,age){
    this.name1 = name;
    this.age1 = age;
}
//personという関数を作る、引数はname,ageの２つ
//右が引数でthis.name1とすることでname1という変数に代入する
//上の引数に設定したものは仮引数。

let person1 = new person("taro",22);
//newを使ってコピー、生成している。生成したものを変数に入れている。
//こちらで生成したものは実引数。
let person2 = new person("zirou",32);
console.log(person1.name1);
console.log(person2.name1);
console.log(person1.age1);
console.log(person2.age1);
console.log(person.this);
//person.thisで出力しようとした場合はundifindがでる。
//変数に=で関数を作れる。
//オブジェクトを変数に入れて、obj.新しい変数=関数を入れた変数で出力できる。
//関数からのthis呼び出しても上のthisの中には何も入っていないためwindowが出力される。


/*let myobj=new Object();

myobj.name="太郎";
myobj.age="30"

console.log(myobj);


let sample = {
    name:"taro",
    age:32
}
//連想配列を使っている。
/*function show(){
    console.log(this);
}

/*function show(num1,num2){
    console.log(num1 + num2);
}
show.call(sample,5,10);
show.apply(sample,[5,10]);
let myobj={
    name:"太郎",
    myfunc: function(){
        console.log(this);
    }
}
myobj.myfunc();

function Human(name,age){
    this.name = name;
    this.age =age;
}
let taro= new Human("太郎",30);
console.log(taro);
g=new Date().getDate();
console.log(g);

let today = new Date();
let day = today.getDate();
let time = today.getMinutes();
console.log(day);
console.log(time);
/*console.log(this);
this.sample = "こんにちは";
console.log(window.sample);

function sample(){
    console.log(this);
}

sample();*/
