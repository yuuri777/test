//appendchildを使う
//removechild
//createelement
//textcontent

function todo() {
    let text=document.getElementById("text").value;
    console.log(text);

    const div = document.createElement("div");
    
        div.innerHTML = text+'<input type="text" id="text2"><button id="edit">編集</button><button id="del">削除</button>';
    list.appendChild(div);
    let del=document.getElementById("del")
    del.addEventListener('click',function(){
        list.removeChild(div)
    })
    
    let edit=document.getElementById("edit");
    edit.addEventListener('click',function(){
        let text2=document.getElementById("text2").value;
    
        div.innerHTML = text2 + '<input type="text" id="text2"><button id="edit">編集</button><button id="del">削除</button>' ;
        del.addEventListener('click',function(){
            list.removeChild(div)
        })

    });
    
    
   
   


  

   


}

//appendchildを使う
//removechild
//createelement
//textcontent

/*function todo() {
    let text=document.getElementById("text").value;
    console.log(text);

    const div = document.createElement("div");
        //let dd = document.createElement("button");
    //div.innerText = "編集";

        div.innerHTML = text+'<input id="text2><button id="edit">編集</button><button id="del">削除</button>';
    list.appendChild(div);
    let del=document.getElementById("del")
    del.addEventListener('click',function(){
        list.removeChild(div)
    })
    let text2=document.getElementById("text2").value;
    
    let edit=document.getElementById("edit");
    edit.addEventListener('click',function(){
        console.log(text2);
    })
        //let sss=document.getElementById("sss")
    /*list.appendChild(div);
    let input = document.createElement("p");
    input.innerHTML = "<p></p><button>編集</button><button>削除</button>;
    div.appendChild(input);

    /*let button = document.createElement("button");
    button.innerText = "編集";
    input.appendChild(button);

    const delet = document.createElement("button");
    delet.innerText = "削除";
    button.appendChild(delet);

    /*const div = document.createElement("div");
        //let dd = document.createElement("button");
    //dd.innerText = "編集";
        div.innerText = text;
    //let sss=document.getElementById("sss")
    list.appendChild(div);
    let input = document.createElement("text");
    input.innerText = "";
    let button = document.createElement("button");
    button.innerText = "編集";
    const delet = document.createElement("button");
    delet.innerText = "削除";
    
    
   /* console.log(j);d
    let k=input + button + delet;
    console.log(k);
    //div.appendChild(document.createTextNode("k"));
    div.appendChild(k);*/

   


  

    //sss.appendChild(div)にdocument.をつけてしまうとhtmlのbodyタグでしか出力できなくなる。
    //逆にdocumentをつけないとhtmlにつけたid名で使えるようになる。
    //bodyが親要素だからappendchildに子要素を指定しても出ない。

   
    



