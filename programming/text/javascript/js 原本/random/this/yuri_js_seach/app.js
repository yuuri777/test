function seach2(){
    let text ="むかし、むかし、ある所におじいさんとおばあさんが住んでいました。おじいさんは山へしば刈りに、おばあさんは川へ洗濯に行きました。おばあさんが川で洗濯をしていると大きな桃が流れてきました。"

    let seach = document.getElementById("seach1").value;
    result= text.indexOf(seach);
   
    
    if (result === -1){
        document.getElementById("sample1").innerHTML="結果：含まれていません。";
    }else{
        document.getElementById("sample1").innerHTML="結果：含まれています。";
    }
    console.log(seach);
    
}
