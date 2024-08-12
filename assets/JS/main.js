$(document).ready(function () {

    // --------------------
    //         navbar
    // --------------------
    $(".categories").hover(function () {
        $(".categories-main-con").fadeToggle("fast");
    })
    $(".women-categories").hover(function () {
        $(".women").fadeToggle("fast");
    })
    $(".men-categories").hover(function () {
        $(".men-main-con").fadeToggle("fast");
    })
    $(".perfume-categories").hover(function () {
        $(".perfume").fadeToggle("fast");
    })
    $(".footware-categories").hover(function () {
        $(".footware").fadeToggle("fast");
    })


    // --------------------
    //     product-show
    // --------------------


    $(".like-2").hide()
    $(".like-1").click(function () {
        $(".like-1").hide()
        $(".like-2").show()
        $(".like-2").addClass("like-ani")
    })
    $(".like-2").click(function () {
        $(".like-2").hide()
        $(".like-1").show()
        $(".like-2").removeClass("loike-ani")
    })



    // --------------------
    //     sidebar-con
    // --------------------

    $(".fa-minus").hide()
    $(".cate-con-1").click(function () {
        $(".cate-data-1").slideToggle()
        $(".cate-data-2").slideUp();
        $(".cate-data-3").slideUp();
        $(".cate-data-4").slideUp();
        $(".cate-data-5").slideUp();
        $(".cate-data-6").slideUp();
        $(".cate-data-7").slideUp();

    })
    $(".cate-con-2").click(function () {
        $(".cate-data-2").slideToggle()
        $(".cate-data-1").slideUp();
        $(".cate-data-3").slideUp();
        $(".cate-data-4").slideUp();
        $(".cate-data-5").slideUp();
        $(".cate-data-6").slideUp();
        $(".cate-data-7").slideUp();
    })
    $(".cate-con-3").click(function () {
        $(".cate-data-3").slideToggle()
        $(".cate-data-1").slideUp();
        $(".cate-data-2").slideUp();
        $(".cate-data-4").slideUp();
        $(".cate-data-5").slideUp();
        $(".cate-data-6").slideUp();
        $(".cate-data-7").slideUp();
    })
    $(".cate-con-4").click(function () {
        $(".cate-data-4").slideToggle()
        $(".cate-data-1").slideUp();
        $(".cate-data-2").slideUp();
        $(".cate-data-3").slideUp();
        $(".cate-data-5").slideUp();
        $(".cate-data-6").slideUp();
        $(".cate-data-7").slideUp();
    })
    $(".cate-con-5").click(function () {
        $(".cate-data-5").slideToggle()
        $(".cate-data-1").slideUp();
        $(".cate-data-2").slideUp();
        $(".cate-data-3").slideUp();
        $(".cate-data-4").slideUp();
        $(".cate-data-6").slideUp();
        $(".cate-data-7").slideUp();
    })
    $(".cate-con-6").click(function () {
        $(".cate-data-6").slideToggle()
        $(".cate-data-1").slideUp();
        $(".cate-data-2").slideUp();
        $(".cate-data-3").slideUp();
        $(".cate-data-4").slideUp();
        $(".cate-data-5").slideUp();
        $(".cate-data-7").slideUp();
    })
    $(".cate-con-7").click(function () {
        $(".cate-data-7").slideToggle()
        $(".cate-data-1").slideUp();
        $(".cate-data-2").slideUp();
        $(".cate-data-3").slideUp();
        $(".cate-data-4").slideUp();
        $(".cate-data-5").slideUp();
        $(".cate-data-6").slideUp();
    })
    //--------------------------------
    //    navbar
    //----------------------------------
    $(".toggle-button").click(function(){
        $(".desktop-nav-menu").animate({"width":"300px"});
        $(".desktop-nav-menu").css({"display":"block"});
        $(".nav-con").css({"display":"block"});
        $("body").addClass(".sidebar-effects")
    })      

    $(".close").click(function(){
        $(".desktop-nav-menu").animate({"width":"0px"});
        $(".nav-con").css({"display":"none"});
        
    })
    // $(".cate-con-1").click(function(){
    //     $(".cate-data-1").slideUp()
    //     $(".fa-minus-1").hide()
    //     $(".fa-plus-1").show()
    // })
})

// ***********************
//     countdown
// ***********************

var dest = new Date("feb 23,2024 24:00:00").getTime();

var count = setInterval(function () {
    var now = new Date().getTime();
    var dif = dest - now;

    var days = Math.floor(dif / (1000 * 60 * 60 * 24));

    var hours = Math.floor((dif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    var min = Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60));

    var sec = Math.floor((dif % (1000 * 60)) / 1000);

    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;

    document.getElementById("day-2").innerHTML = days;
    document.getElementById("hour-2").innerHTML = hours;
    document.getElementById("min-2").innerHTML = min;
    document.getElementById("sec-2").innerHTML = sec;
}, 1000);