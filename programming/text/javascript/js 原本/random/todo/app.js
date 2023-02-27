


let c=console.log;
c();
let text=document.getElementById("text")
let button=document.getElementById("button")
let list=document.getElementById("list")

const addtasks = (task) =>{
    const li = document.createElement("li");
    const show=list.appendChild(li);

    const p = document.createElement("p");
    const p2=li.appendChild(p);
        p2.innerHTML = task;//show  li要素

    const input = document.createElement("input");//新しいテキスト
    show.appendChild(input);
   
    const edit = document.createElement("button");//編集ボタン
    edit.innerHTML="編集";
    show.appendChild(edit);

    edit.addEventListener('click',evt => {//編集ボタン押すと新しいテキストに入れた文字が
        evt.preventDefault();
        const te= input.value;
        edittasks(te);
        
    })

    const del=document.createElement("button");//削除ボタン
    del.innerHTML="削除";
    show.appendChild(del);

    del.addEventListener('click',evt =>{//削除ボタン押して要素を消す
        evt.preventDefault();
        deleteTasks(del);
    });
    const edittasks = (te) => {//子要素の文字を変えたい
        p2.innerHTML=te;
    }
};


const deleteTasks = (del) => {//
    const chosenTask = del.closest('li');//closest  elementに指定した要素の直近に存在する祖先要素を取得できる。
    list.removeChild(chosenTask);
};
//c(deleteTasks());
button.addEventListener('click',evt =>{
    if(task === ""){
        return;
    }
    evt.preventDefault();
    const task = text.value;
    addtasks(task);
    text.value = '';
    
});
    
    /*const div2 = document.createElement("div");
    div2.innerHTML = '<input type="text" id="text2">'
    div.appendChild(div2);

   
    
    let edit=document.getElementById("edit");
    edit.addEventListener('click',function(){
        let text2=document.getElementById("text2").value;
    
        div.textContent = text2 ;
        /*del.addEventListener('click',function(){
            list.removeChild(div)
        })

    });*/


   
   


  

   


