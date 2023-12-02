$(document).ready(function () {
    $(".slider").slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000
    })

    $(function popup() {
        $(".popup").click(function () {
            $(".popup__content").toggleClass("popup__content-hidden");
            $(".popup__play").toggleClass("popup__play-hidden");
        })
    })

    $(function dropdown() {
        $(".dropdown__item").each(function () {
            $(this).click(function () {
                $(this).toggleClass("dropdown__item-hidden");
                $(this).$(".dropdown__icon");
            })
        })
    })
})