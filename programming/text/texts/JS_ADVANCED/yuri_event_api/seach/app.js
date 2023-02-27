
const indices = [];
const array = ["a","b","a","c","a","d"]
const element = "a";
let idx = array.indexOf(element);
while(idx !== -1) {
  indices.push(idx);
  idx = array.indexOf(element,idx +1);
}
let p = document.getElementById("sample1");

p.innerHTML=indices;


/*et url="hh"
fetchJsonp(url, {
  console.log("ii")
})
fetchJsonp();
//console.log(fetchJsonp());


let seach2=document.getElementById("seach2")
seach2.addEventListener("click",function(){
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
        document.getElementById("sample1").innerHTML=seach;
    }
    console.log(seach);
    console.log(result);
});
*/