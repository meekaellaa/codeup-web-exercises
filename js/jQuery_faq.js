$(#btn-2).on('click', function () {
        $('ul').each(function () {
           $(this).find('li').last()add.class('yellow-bg');
        });
});
//.find method can go deeper nd specify which element
// instead of .find method the .children method can be used.

$('h3').on('click', function () {
    $(this).next().children().css("font-weight", "bold");
});

$('li').on('click', function () {
    $(this).parent().children().first().addClass('enbluened');
});