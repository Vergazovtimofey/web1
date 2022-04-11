$(function(){

    var header = $("#header"),
        introh = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop()


    /* fixed header*/
    checkScroll(scrollOffset)

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset)
    });

    function checkScroll(scrollOffset){
        if (scrollOffset > introh){
            header.addClass("fixed")
        }
        else {
            header.removeClass("fixed")
        }
    }


    /*smooth scroll*/
    $("[data-scroll]").on("click", function (event){
        event.preventDefault();

        var $this = $this,
            blockid = $(this).data("scroll"),
            blockOffset =  $(blockid).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset+1
        },500);

    });

    /*menu nav toggle*/
    $("#nav_toggle").on("click", function (event){
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");

    });

    $("#accordion").on("click", function (event){
        event.preventDefault();

        $("#accordion").toggleClass("active");
    });
    $("#accordion1").on("click", function (event){
        event.preventDefault();

        $("#accordion1").toggleClass("active");
    });
    $("#accordion2").on("click", function (event){
        event.preventDefault();

        $("#accordion2").toggleClass("active");
    });



});
