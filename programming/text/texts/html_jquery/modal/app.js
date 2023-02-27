$(function() {
    $(document).on('cancellation','remodal',function() {
        console.log('戻るボタンがクリックされたよ！');
    });
    $(document).on('confirmation','remodal',function() {
        console.log('OKボタンがクリックされたよ!');
    });
});