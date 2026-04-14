const yrClick = document.querySelector('.r1');

yrClick.addEventListener('click', () => {
    if (yrClick.value === true) {
        yrClick.innerHTML = '<b><i>MMX-MMXXVI</i></b>';
        yrClick.value = false
    } else {
        yrClick.innerHTML = '<b><i>2010-2026</i></b>';
        yrClick.value = true
    }
})

// thats a jquery one
/*
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
*/