$('.r1').click(function () {
    if (!$(this).data('status')) {
        $(this).html('<b><i>2010-2026</i></b>');
        $(this).data('status', true);
    }
    else {
        $(this).html('<b><i>MMX-MMXXVI</i></b>');
        $(this).data('status', false);
    }
});
