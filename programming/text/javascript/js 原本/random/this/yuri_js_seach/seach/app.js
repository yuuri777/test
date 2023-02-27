/*function butotnClick(){
  
  msg.innerText = 'お名前は' + nameText.value + 'さんですね';
  console.log(nameText);
}

let nameText = document.getElementById('nameText');
nameText.value = '名前';
let msg = document.getElementById('msg');

let checkButton = document.getElementById('checkButton');
checkButton.addEventListener('click', butotnClick);
*/
function seach2(){
    let text ="むかし、むかし、ある所におじいさんとおばあさんが住んでいました。おじいさんは山へしば刈りに、おばあさんは川へ洗濯に行きました。おばあさんが川で洗濯をしていると大きな桃が流れてきました。"

    let seach = document.getElementById("seach1").value;
    result= text.indexOf(seach);
      //indexofとhtmlのidを繋げるためにはどうしたらいいか。
     //getbyidを使って。
     //seachと===で繋げると
    
     
    //document.getElementById("sample1").innerHTML=result
        
      if (result === -1){
        //id取得.innerhtmlでHTML上に表示できる。
        document.getElementById("sample1").innerHTML="結果：含まれていません。";
    }else{
        document.getElementById("sample1").innerHTML="結果：含まれています。";
    }
    console.log(seach);
}
