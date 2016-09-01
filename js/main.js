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

    $('.partners_arrow_right').click(function () {
        if ($(window).width() <= 974 && $(window).width() >= 750) {
            if ($(this).parent().parent().find("#wtb").attr("class").indexOf("hidden-sm") === -1) {
                $(this).parent().parent().find("#wtb").addClass("hidden-sm");
                $(this).parent().parent().find("#ego").removeClass("hidden-sm");
            }
        }
        else if ($(window).width() <= 750) {
            if ($(this).parent().parent().find("#wtb").attr("class").indexOf("hidden-xs") === -1) {
                $(this).parent().parent().find("#wtb").addClass("hidden-xs");
                $(this).parent().parent().find("#pp").removeClass("hidden-xs");
            }
            else if ($(this).parent().parent().find("#ab").attr("class").indexOf("hidden-xs") === -1) {
                $(this).parent().parent().find("#ab").addClass("hidden-xs");
                $(this).parent().parent().find("#ego").removeClass("hidden-xs");
            }
        }
    });

    $('.partners_arrow_left').click(function () {
        if ($(window).width() <= 974 && $(window).width() >= 750) {
            if ($(this).parent().parent().find("#ego").attr("class").indexOf("hidden-sm") === -1) {
                $(this).parent().parent().find("#ego").addClass("hidden-sm");
                $(this).parent().parent().find("#wtb").removeClass("hidden-sm");
            }
        }
        else if ($(window).width() <= 750) {
            if ($(this).parent().parent().find("#ab").attr("class").indexOf("hidden-xs") > 0) {
                $(this).parent().parent().find("#ego").addClass("hidden-xs");
                $(this).parent().parent().find("#ab").removeClass("hidden-xs");
            }
            else if ($(this).parent().parent().find("#wtb").attr("class").indexOf("hidden-xs") > 0 ) {
                $(this).parent().parent().find("#pp").addClass("hidden-xs");
                $(this).parent().parent().find("#wtb").removeClass("hidden-xs");
            }
        }
    });


});

function windowSize() {
    if ($(window).width() <= '974' && $(window).width() >= '751') {
        $('#top-col2').detach().insertAfter('#top-col3');
    }
    else {
        $('#top-col3').detach().insertAfter('#top-col2');
    }
}
$(window).load(windowSize);
$(window).resize(windowSize);
