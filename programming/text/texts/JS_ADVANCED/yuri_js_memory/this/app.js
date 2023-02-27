let c= console.log;


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        c(this);
    }
    
}

var person = new Person('太郎', 22);
 
console.log( person.name );
console.log( person.age )


/*function Person(name, age) {
    this.name = name;
    this.age = age;
    c(this)
  }//２つnewで関数を作ったから２回でる。this.nameをだすと関数２つ作られているからそれぞれの実引数が出る。この関数は最後に読まれているからthisのみの出力で２つのオブジェクトが出る

  var person1 = new Person('太郎', 22);
var person2 = new Person('次郎', 31);
c(person1);
 
console.log( person1.name );
console.log( person1.age );
 
console.log( person2.name );
console.log( person2.age );
const obj = {
    value:5,
    method1: function(){
        this.value = this.value * 2;
        return this;
    },
    method2: function(){
        this.value = this.value * 3;
        return this;
    },
    method3: function(){
        this.value = this.value * 3;
        return this.value;
    },

      // このメソッドは期待通りの動作をしません
    method4: () => {
        this.value = this.value * 4;
        return this.value;
    },
    
};
const result = obj.method1().method2().method3();
    c(result);
c(obj);
var items = [1,2,3,4,5];
 
var result = items.map(function( value ) {
 
    //配列の各要素を2倍にする
    return value * 2;
 
});
 c(items);
console.log( result );

let obj = {
    test:function() { return this },
    alert: function(msg) {console.log(msg)}
    }

    let test = obj.test;
    obj.test().alert("hello");
    test().alert("hello");

    const kvArray = [
        { key: 1, value: 10 },
        { key: 2, value: 20 },
        { key: 3, value: 30 },
      ];
      
      const reformattedArray = kvArray.map(({ key, value}) => ({ [key]: value }));
      //c(kvArray[key]);

      c(kvArray);
      console.log(reformattedArray);*/