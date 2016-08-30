/**
 * Created by dmitry on 30.08.2016.
 */
$(function () {
    //Attach click event handler to your menu
    $('.nav li').click(function () {
        if (this.className.indexOf("dropdown") === -1) {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            console.log(this.className);
            console.log("del here")
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
});
