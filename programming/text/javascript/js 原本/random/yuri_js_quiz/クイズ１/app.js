let arr=[["key1","value1","hhh"],["key2","value2","jah"]]
//console.log(arr);



const tb = document.getElementById("tbody");
//console.log(tb);

arr.forEach((x)=>{
    //配列名.forEach　　　xは変数。
    //配列の中身を順番に出すためのものをxという変数に入れましたという意味。
    //foreachで配列を一つずつ出力。
    const tr = document.createElement("td");
    tb.appendChild(tr);
  
    for (let i = 0; i < arr.length; ++i) {
            //for文で順番に出力してくれる。
        //console.log("i");
        //iを４回出力。
        console.log(i);
        //配列番号を出力。０１０１
        //console.log("x[i]");
        //x[i]を４回出力。
        console.log(x[i]);
        //xは引数
        //配列内容を出力。
        console.log(x);
        //配列１、２が交互に２回ずつ出力される。
        tdi = `td${i}`
        //tdの後に配列番号が入っている。
        //テンプレートリテラルを使い、その値を変数に入れる。
        console.log(tdi);
        tdi = document.createElement("button")
        //tdのタグを作ってtdiに入れる。
        tdi.textContent=x[i]
        tr.appendChild(tdi)
        //appendchildでtdiという変数をtrというタグの一番下の子要素に入れることができる。
        //createElementとappendchildはセットで使われる。
    }
})