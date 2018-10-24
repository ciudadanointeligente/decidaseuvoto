$(function(){
    $('#formulario_perguntas').submit(function(evt){
        var response = false;
        $('#formulario_perguntas input[type="radio"]:checked').each(function(el, r){
            var el = $(r);
            if(!isNaN(el.val())){
                response = true;
            }
        });
        if(!response){
            var message = $('#message-marcar-ao-menos-uma');
            message.show();
            setTimeout(function() {
                message.hide();
            }, 10000);
        }
        return response;
    });
});