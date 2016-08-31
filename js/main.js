/**
 * Created by dmitry on 30.08.2016.
 */
$(function () {
    //Attach click event handler to your menu
    $('.nav li').click(function () {
        if (this.className.indexOf("dropdown") === -1) {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        }

        if (this.className.indexOf("open") > 0) {
            var images, selectedLang, alternativeLang, tmp;
            images = $(this).find('img');
            selectedLang = images[0];
            alternativeLang = images[2];
            tmp = selectedLang.src;
            selectedLang.src = alternativeLang.src;
            alternativeLang.src = tmp;
        }
    });

    $('.top-block-el .clickable tbody tr').click(function () {
        console.log($(this));
            $(this).siblings().removeClass('top-block-el-active');
            $(this).addClass('top-block-el-active');
            $(this).siblings().find('img').removeClass('filter_white');
            $(this).find('img').addClass('filter_white');
            $(this).siblings().find('.top-col2-info').text("");
            $(this).find('.top-col2-info').text("не хватает?");
    });
});

function windowSize(){
    if ($(window).width() <= '974' && $(window).width() >= '751')
    {
        $('#top-col2').detach().insertAfter('#top-col3');
    }
    else
    {
        $('#top-col3').detach().insertAfter('#top-col2');
    }
}
$(window).load(windowSize);
$(window).resize(windowSize);
