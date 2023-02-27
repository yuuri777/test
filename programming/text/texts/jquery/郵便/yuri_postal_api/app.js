$(function () {
    $("#zipcode").on('blur', function () {
      // ajax通信開始
      $.ajax({
        url: "http://zipcloud.ibsnet.co.jp/api/search?zipcode=" + $('#zipcode').val(),
        // 現在のドメインと、データ取得先のドメインが異なるため 'jsonp' を指定
        dataType: 'jsonp',
      }).then(
        // 通信成功時の処理
        function (data) {
          if (data.results) {
            // 住所情報を取得
            var result = data.results[0];
            // フォーム入力欄の「都道府県」「市区町村」「住所」に値をセット
            $('#prefecture').val(result.address1);
            $('#municipality').val(result.address2);
            $('#address').val(result.address3);
            $("#zipcode").val("")
          } else {
            alert('住所が見つかりません');
            $("#zipcode").val("")
            $('#address').val("");
            $('#municipality').val("");
            $('#prefecture').val("");
          }
        },
        // 通信失敗時の処理
        function () {
          alert("読み込み失敗");
        }
      );
    });
  });
  //https://qiita.com/akk_suzuki/items/3e8ae08b31344a7b12d4