let c=console.log;
$(function () {
    $.ajax({
        url:'https://zipcloud.ibsnet.co.jp/api/search?zipcode=',
        type: 'GET',
    })
    .done(function (response) {
        console.log(response);
    })
    .fail(function (xhr) {
        alert("エラーが発生しました。");
    })
    .always(function (xhr, msg) {
        console.log(msg);
    });

$('#search').click(function(){
    let api = 'https://zipcloud.ibsnet.co.jp/api/search?zipcode=';
    let param = $("#input").value.replace("-","")
let url = param + api;
})

$.then((response)=>{
    $("#error").html("");
    return response.json();  
});
$.then((data)=>{
    if(data.status === 400){ //エラー時
        $("#error").html(data.message);
    }else if(data.results === null){
        $("#error").html("郵便番号から住所が見つかりませんでした。");
    } else {
        $("#address1").html(data.results[0].address1);
        $("#address2").html(data.results[0].address2);
        $("#address3").html(data.results[0].address3);
        
    }
}); 
$.chach((ex)=>{ //例外処理
    console.log(ex);
});
}, false);