function openPopupForm() {
    $('#auth-link').popover({
        placement: 'bottom',
        title: 'Вход на сайт',
        html: true,
        content: $('#auth').html()
    })
}


function openRegForm() {
    $('#auth-form').hide();
    $('#forgot-form').hide();
    $('#reg-form').show();
}

function openAuthForm() {
    $('#reg-form').hide();
    $('#forgot-form').hide();
    $('#auth-form').show();
}

function openLostPassForm() {
    $('#auth-form').hide();
    $('#reg-form').hide();
    $('#forgot-form').show();
}



$('body').on('click', function(e) {
    $('[data-toggle=popover]').each(function() {
        // hide any open popovers when the anywhere else in the body is clicked
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
            $(this).popover('hide');
        }
    });
});