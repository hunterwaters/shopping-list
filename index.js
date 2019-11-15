$(function() {
    $('#js-shopping-list-form').on('submit', function(event) {
        event.preventDefault();
        var shoppingItemAdd = $('#shopping-list-entry').val()
        $('ul').append('<li><span class="shopping-item">'+shoppingItemAdd +'</span><div class="shopping-item-controls"><button class="shopping-item-toggle"> <span class="button-label">check</span></button> <button class="shopping-item-delete"> <span class="button-label">delete</span> </button> </div></li>');
    });
    $(document).on('click', '.shopping-item-toggle', function(){
        $(this).closest('li').find('span.shopping-item').eq(0).toggleClass('shopping-item__checked');
    });
    $(document).on('click', '.shopping-item-delete', function(){
        $(this).closest('li').remove();
    })
});
