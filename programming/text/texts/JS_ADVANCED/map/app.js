const arrayname=["山田","小林","佐藤","鈴木","小田"];

const arrayresult =  arrayname.map((name,index) =>{
    //map関数の()の中は仮引数とアロー関数か無名関数をかく。
    //関数は任意の名前をつけた引数を取ることができて、その引数に配列の値が一つひとつ入っていく。
    
    const message = `私の名前は${index +1}です。`
    return message;
});

console.log(arrayresult);