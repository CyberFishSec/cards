$card = $('.card');

$card.on('click', function() {
    $card.removeClass('isActive');
    $(this).addClass('isActive');    
});
