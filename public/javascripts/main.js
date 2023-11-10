const alertPlaceholder = $('#alert-placeholder');

$('document').ready(function(){
    $('#form')[0].addEventListener('submit', function(event){
        console.log('#form');
        event.preventDefault();
        $('.wrapper').show();
        form.classList.add('was-validated');
        if(!form.checkValidity()) {
            event.stopPropagation();
            $('.wrapper').hide();
            return;
        }
        $.post('/addUser', {
            user_name: $('#username').val(),
            user_age: $('#age').val(),
            user_city: $('#city').val(),
            user_phone: $('#phone')

        })
    })
})