$(function () {
    $.ajax({
        url: 'https://zipcloud.ibsnet.co.jp/api/search?zipcode=1070062',
        type: 'GET',
        //URLを取得
        dataType: 'json',
        //オブジェクト型にするためのコード
    })
        .done(function (response) {
         //通信成功時
            console.log(response);
            console.log(response.results[0]);
            console.log(response.results[0].address1)
            console.log(response.results[0].address2)
            console.log(response.results[0].address3)
        })
        .fail(function (xhr){
           //通信失敗時
            alert("エラーが発生しました。");
        })
        .always(function (xhr,msg) {
         //通信完了時　　通信が成功しても失敗しても実行される。
            console.log(msg);
        });
});