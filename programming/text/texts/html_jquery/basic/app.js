$(function() {
    $('#btn').on({
        'click':function() {
        console.log('クリックされました。');
    },
    'dblclick' : function(){
        console.log("ダブルクリックされました。")
    }
    });
});
//.onでappendメソッドで追加された要素も操作できる。

