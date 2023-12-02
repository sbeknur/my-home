$(document).ready(function () {
    $(".slider").slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000
    });

    $(function dropdown() {
        $(".dropdown__item").each(function () {
            $(this).click(function () {
                $(this).toggleClass("dropdown__item-hidden");
                $(this).$(".dropdown__icon")
            })
        })
    })
})