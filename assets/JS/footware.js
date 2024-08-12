document.querySelector(".all").classList.add("click");


function all_brand() {

    document.querySelector(".all").classList.add("click");
    document.querySelector(".onnike").classList.remove("click");
    document.querySelector(".onadidas").classList.remove("click");
    document.querySelector(".onpuma").classList.remove("click");
    document.querySelector(".onreebok").classList.remove("click");

    document.querySelector(".all-main-con").style.display = "block";
    document.querySelector(".nike-main-con").style.display = "none";
    document.querySelector(".adidas-main-con").style.display = "none";
    document.querySelector(".puma-main-con").style.display = "none";
    document.querySelector(".reebok-main-con").style.display = "none";

}   
function nike() {
    document.querySelector(".onnike").classList.add("click");
    document.querySelector(".all").classList.remove("click");
    document.querySelector(".onadidas").classList.remove("click");
    document.querySelector(".onpuma").classList.remove("click");
    document.querySelector(".onreebok").classList.remove("click");

    document.querySelector(".nike-main-con").style.display = "block";
    document.querySelector(".all-main-con").style.display = "none";
    document.querySelector(".adidas-main-con").style.display = "none";
    document.querySelector(".puma-main-con").style.display = "none";
    document.querySelector(".reebok-main-con").style.display = "none";

}
function adidas() {

    document.querySelector(".onadidas").classList.add("click");
    document.querySelector(".all").classList.remove("click");
    document.querySelector(".onnike").classList.remove("click");
    document.querySelector(".onpuma").classList.remove("click");
    document.querySelector(".onreebok").classList.remove("click");

    document.querySelector(".adidas-main-con").style.display = "block";
    document.querySelector(".all-main-con").style.display = "none";
    document.querySelector(".nike-main-con").style.display = "none";
    document.querySelector(".puma-main-con").style.display = "none";
    document.querySelector(".reebok-main-con").style.display = "none";

}
function puma() {

    document.querySelector(".onpuma").classList.add("click");
    document.querySelector(".all").classList.remove("click");
    document.querySelector(".onnike").classList.remove("click");
    document.querySelector(".onadidas").classList.remove("click");
    document.querySelector(".onreebok").classList.remove("click");

    document.querySelector(".puma-main-con").style.display = "block";
    document.querySelector(".all-main-con").style.display = "none";
    document.querySelector(".nike-main-con").style.display = "none";
    document.querySelector(".adidas-main-con").style.display = "none";
    document.querySelector(".reebok-main-con").style.display = "none";

}
function reebok() {

    document.querySelector(".onreebok").classList.add("click");
    document.querySelector(".all").classList.remove("click");
    document.querySelector(".onnike").classList.remove("click");
    document.querySelector(".onadidas").classList.remove("click");
    document.querySelector(".onpuma").classList.remove("click");

    document.querySelector(".reebok-main-con").style.display = "block";
    document.querySelector(".all-main-con").style.display = "none";
    document.querySelector(".nike-main-con").style.display = "none";
    document.querySelector(".adidas-main-con").style.display = "none";
    document.querySelector(".puma-main-con").style.display = "none";

}

$(document).ready(function () {
    $(".left-con").hover(function () {
        $(".pro-img-main").css({ "display": "block" });
        $(".pro-img-1").css({ "display": "none" });
        $(".pro-img-2").css({ "display": "none" });
        $(".pro-img-3").css({ "display": "none" });
        $(".pro-img-4").css({ "display": "none" });
        $(".pro-img-5").css({ "display": "none" });
        $(".pro-img-6").css({ "display": "none" });
        $(".pro-img-7").css({ "display": "none" });
        $(".pro-img-8").css({ "display": "none" });
    })
    $(".pro-1").hover(function () {
        $(".pro-img-main").css({ "display": "none" });
        $(".pro-img-1").css({ "display": "block" });
        $(".pro-img-2").css({ "display": "none" });
        $(".pro-img-3").css({ "display": "none" });
        $(".pro-img-4").css({ "display": "none" });
        $(".pro-img-5").css({ "display": "none" });
        $(".pro-img-6").css({ "display": "none" });
        $(".pro-img-7").css({ "display": "none" });
        $(".pro-img-8").css({ "display": "none" });
    })
    $(".pro-2").hover(function () {
        $(".pro-img-main").css({ "display": "none" });
        $(".pro-img-1").css({ "display": "none" });
        $(".pro-img-2").css({ "display": "block" });
        $(".pro-img-3").css({ "display": "none" });
        $(".pro-img-4").css({ "display": "none" });
        $(".pro-img-5").css({ "display": "none" });
        $(".pro-img-6").css({ "display": "none" });
        $(".pro-img-7").css({ "display": "none" });
        $(".pro-img-8").css({ "display": "none" });
    })
    $(".pro-3").hover(function () {
        $(".pro-img-main").css({ "display": "none" });
        $(".pro-img-1").css({ "display": "none" });
        $(".pro-img-2").css({ "display": "none" });
        $(".pro-img-3").css({ "display": "block" });
        $(".pro-img-4").css({ "display": "none" });
        $(".pro-img-5").css({ "display": "none" });
        $(".pro-img-6").css({ "display": "none" });
        $(".pro-img-7").css({ "display": "none" });
        $(".pro-img-8").css({ "display": "none" });
    })
    $(".pro-4").hover(function () {
        $(".pro-img-main").css({ "display": "none" });
        $(".pro-img-1").css({ "display": "none" });
        $(".pro-img-2").css({ "display": "none" });
        $(".pro-img-3").css({ "display": "none" });
        $(".pro-img-4").css({ "display": "block" });
        $(".pro-img-5").css({ "display": "none" });
        $(".pro-img-6").css({ "display": "none" });
        $(".pro-img-7").css({ "display": "none" });
        $(".pro-img-8").css({ "display": "none" });
    })
    $(".pro-5").hover(function () {
        $(".pro-img-main").css({ "display": "none" });
        $(".pro-img-1").css({ "display": "none" });
        $(".pro-img-2").css({ "display": "none" });
        $(".pro-img-3").css({ "display": "none" });
        $(".pro-img-4").css({ "display": "none" });
        $(".pro-img-5").css({ "display": "block" });
        $(".pro-img-6").css({ "display": "none" });
        $(".pro-img-7").css({ "display": "none" });
        $(".pro-img-8").css({ "display": "none" });
    })
    $(".pro-6").hover(function () {
        $(".pro-img-main").css({ "display": "none" });
        $(".pro-img-1").css({ "display": "none" });
        $(".pro-img-2").css({ "display": "none" });
        $(".pro-img-3").css({ "display": "none" });
        $(".pro-img-4").css({ "display": "none" });
        $(".pro-img-5").css({ "display": "none" });
        $(".pro-img-6").css({ "display": "block" });
        $(".pro-img-7").css({ "display": "none" });
        $(".pro-img-8").css({ "display": "none" });
    })
    $(".pro-7").hover(function () {
        $(".pro-img-main").css({ "display": "none" });
        $(".pro-img-1").css({ "display": "none" });
        $(".pro-img-2").css({ "display": "none" });
        $(".pro-img-3").css({ "display": "none" });
        $(".pro-img-4").css({ "display": "none" });
        $(".pro-img-5").css({ "display": "none" });
        $(".pro-img-6").css({ "display": "none" });
        $(".pro-img-7").css({ "display": "block" });
        $(".pro-img-8").css({ "display": "none" });
    })
    $(".pro-8").hover(function () {
        $(".pro-img-main").css({ "display": "none" });
        $(".pro-img-1").css({ "display": "none" });
        $(".pro-img-2").css({ "display": "none" });
        $(".pro-img-3").css({ "display": "none" });
        $(".pro-img-4").css({ "display": "none" });
        $(".pro-img-5").css({ "display": "none" });
        $(".pro-img-6").css({ "display": "none" });
        $(".pro-img-7").css({ "display": "none" });
        $(".pro-img-8").css({ "display": "block" });
    })

function Final_price() {
    let p_price = ["ad1-p-price", "ad2-p-price",
        "ad3-p-price", "ad4-p-price", "ad5-p-price", "pm1-p-price",
        "pm2-p-price", "pm3-p-price", "pm4-p-price", "rb1-p-price",
        "rb2-p-price", "rb3-p-price", "rb4-p-price", "nk1-p-price", "nk2-p-price", "nk3-p-price",
        "nk4-p-price", "nk5-p-price", "nk6-p-price", "al1-p-price",
        "al2-p-price", "al3-p-price", "al4-p-price", "al5-p-price",
        "al6-p-price", "al7-p-price", "al8-p-price", "al9-p-price",
        "al10-p-price", "al11-p-price"];

    let o_price = ["ad1-del-price", "ad2-del-price",
        "ad3-del-price", "ad4-del-price", "ad5-del-price", "pm1-del-price",
        "pm2-del-price", "pm3-del-price", "pm4-del-price", "rb1-del-price",
        "rb2-del-price", "rb3-del-price", "rb4-del-price", "nk1-del-price", "nk2-del-price", "nk3-del-price",
        "nk4-del-price", "nk5-del-price", "nk6-del-price", "al1-del-price",
        "al2-del-price", "al3-del-price", "al4-del-price", "al5-del-price",
        "al6-del-price", "al7-del-price", "al8-del-price", "al9-del-price",
        "al10-del-price", "al11-del-price",];

    let s_per = ["ad1-d", "ad2-d", "ad3-d", "ad4-d", "ad5-d", "pm1-d",
        "pm2-d", "pm3-d", "pm4-d", "rb1-d", "rb2-d", "rb3-d", "rb4-d", "nk1-d", "nk2-d", "nk3-d", "nk4-d", "nk5-d", "nk6-d", "al1-d",
        "al2-d", "al3-d", "al4-d", "al5-d", "al6-d", "al7-d", "al8-d", "al9-d",
        "al10-d", "al11-d",];

    for (let i = 0; i <= s_per.length; i++) {

        let per = document.getElementById(s_per[i]).innerHTML;
        let original_price = document.getElementById(o_price[i]).innerHTML;
        let price = document.getElementById(p_price[i]);
        per = per.replace("-", "");
        per = per.replace("%", "");
        original_price = original_price.replace("$", "");

        let total_price = (original_price - (original_price * per / 100));

        price.innerHTML = "$" + total_price.toFixed(2);
    }
}
Final_price()
})

