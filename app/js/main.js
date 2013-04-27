$(function () {

    $('div.main').on('click', '.messenger', function () {
        $(this).slideUp('slow');
    });

    $('div.main').on('click', '.clicky', function () {

        if ($('div.comments i').hasClass('icon-arrow-down')) {
            $('div.the-comments span').slideUp('slow');
            $('div.comments i').text(' show')
                .removeClass('icon-arrow-down')
                .addClass('icon-arrow-up');
            $('div.comments').animate({
                height: '35px'
            },500).css({
                    overflow:'hidden'
                });
        } else {
            $('div.the-comments span').slideDown('slow');
            $('div.comments i').text(' hide')
                .removeClass('icon-arrow-up')
                .addClass('icon-arrow-down');
            $('div.comments').animate({
                height: '300px'
            },500).css({
                    overflow:'auto'
                });
        }
    });

});