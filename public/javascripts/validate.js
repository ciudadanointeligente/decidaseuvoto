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
            console.log('hola!!');
            var message = $('#message');
            message.show();
            setTimeout(function() {
                $message.hide();
            }, 10000);
        }
        return response;
    });
});