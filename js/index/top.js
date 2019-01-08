
$(function () {


    $(".top5 > ul > li:eq(0) > a").hover(function (){
        $(this).find("img").attr("src","/images/tt1.png");
    }, function () {
        $(this).find("img").attr("src","/images/hoe7_2_03.jpg");
    });
    $(".top5 > ul > li:eq(1) > a").hover(function (){
        $(this).find("img").attr("src","/images/tt2.png");
    }, function () {
        $(this).find("img").attr("src","/images/ho7_2.jpg");
    });
    $(".top5 > ul > li:eq(2) > a").hover(function (){
        $(this).find("img").attr("src","/images/tt3.png");
    }, function () {
        $(this).find("img").attr("src","/images/home7_2_03-19.jpg");
    });
    $(".top5 > ul > li:eq(3) > a").hover(function (){
        $(this).find("img").attr("src","/images/tt4.png");
    }, function () {
        $(this).find("img").attr("src","/images/home7_2_03-21.jpg");
    });



    $(".foot2_1").hover(function () {
        $(".foot2s_1").show();
    }, function () {
        $(".foot2s_1").hide();
    });


    $(".top1_16").hover(function () {
        $(".top1_10").show();
    }, function () {
        $(".top1_10").hide();
    });

    $(".top1_8").hover(function () {
        $(".top1_17").show();
    }, function () {
        $(".top1_17").hide();
    });

    $(".xbtb1_5").hover(function () {
        $(".top1_10N").show();
    }, function () {
        $(".top1_10N").hide();
    });
});

