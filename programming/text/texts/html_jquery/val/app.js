$(function() {
    $('#btn').on('click',function() {
        $('#tasks').append('<p>' + $('#task').val() + '</p>');
        $('#task').val('');
    });
});