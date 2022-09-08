$('.r1').click(function(){
    if (!$(this).data('status')) {
    $(this).html('<b><i>2010-2020-2⑨22</i></b>');
    $(this).data('status', true);
    }
    else {
    $(this).html('<b><i>MMX-MMXX-MMCMXXII</i></b>');
    $(this).data('status', false);
    }
});
