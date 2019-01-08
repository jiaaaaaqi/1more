
$(function () {
    /**头部栏目切换***/
    $(".logo1").click(function () {
        $(".logo1").hide();
        $(".bannerjob").animate({ left: '0px' });
        $(".top1").hide();
        $(".top2").animate({ right: '140px' });
        $(".top3").animate({ right: '140px' });
        $(".logo3").animate({ right: '30px' });
        $("body").removeAttr("style");
    });
    $(".logo2").click(function () {
        $(".top1").show();
        $(".logo1").show();
        $(".bannerjob").animate({ left: '-340px' });
        $(".top2").animate({ right: '115px' });
        $(".top3").animate({ right: '115px' });
        $(".logo3").animate({ right: '390px' });
        $("body").css("overflow", "hidden");
        $("body").css("width", "99%");
    });
    /**头部栏目切换***/


    /**注册页点击国家出现下拉条***/
    $(".content_register3_3").click(function () {
        $(".content_register3s .content_register3_5").toggle();
    });
    $(".content_register3_4").click(function () {
        $(".content_register3s .content_register3_5").toggle();
    });
    /**注册页点击国家出现下拉条***/

    /**注册页选择国家出现在文本框***/
    $(".content_register3_5_5").click(function () {
        var gj = $(this).find(".content_register3_5_6").text();
        var dh = $(this).find(".content_register3_5_6").attr("data-code")
        var zhi = gj + "(" + dh + ")"
        $(".content_register3s .content_register3_3").html(zhi);
        $(".content_register3s .content_register3_5").hide();
    });

    /**注册页选择国家出现在文本框***/


    /***其他登录鼠标放上去 ***/
    $(".content_login7 > .content_login7_2:eq(0) > a").hover(function () {
        $(this).find("img").attr("src", "/images/qtdl4_1.png");
    }, function () {
        $(this).find("img").attr("src", "/images/qtdl4.png");
    });
    $(".content_login7 > .content_login7_2:eq(1) > a").hover(function () {
        $(this).find("img").attr("src", "/images/qtdl3_1.png");
    }, function () {
        $(this).find("img").attr("src", "/images/qtdl3.png");
    });
    $(".content_login7 > .content_login7_2:eq(2) > a").hover(function () {
        $(this).find("img").attr("src", "/images/qtdl2_1.png");
    }, function () {
        $(this).find("img").attr("src", "/images/qtdl2.png");
    });
    $(".content_login7 > .content_login7_2:eq(3) > a").hover(function () {
        $(this).find("img").attr("src", "/images/qtdl1_1.png");
    }, function () {
        $(this).find("img").attr("src", "/images/qtdl1.png");
    });
    /***其他登录鼠标放上去***/
});

/**banner效果***/
function loading(h, w) {
    $(".top1").css("height", h);
}

window.onload = window.onresize = function () {
    if (!!(window.attachEvent && !window.opera))  //IE
    {
        h1 = document.documentElement.clientHeight;  //可视区域高
        h = document.documentElement.clientHeight + 20; //window.screen.height;  //屏幕分辨率高度
        w = document.body.clientWidth;  //body对象宽度
        w1 = document.documentElement.clientWidth;  //可视区域宽度
    } else {
        h1 = document.documentElement.clientHeight;  //可视区域高
        h = window.innerHeight;  //返回窗口的文档显示区的高度(IE不支持)
        w = document.body.clientWidth; //body对象宽度
        w1 = document.documentElement.clientWidth;  //可视区域宽度
    }
    loading(h, w)
}
/**banner效果***/


/**注册选项卡效果***/
function dianji1() {
    $("#zc1").attr("class", "content_register2_1");
    $("#zc2").attr("class", "content_register2_2");
    $(".content_register3:eq(0) input").attr("placeholder","手机号码")
}
function dianji2() {
    $("#zc1").attr("class", "content_register2_2");
    $("#zc2").attr("class", "content_register2_1");
    $(".content_register3:eq(0) input").attr("placeholder","邮箱")
}
/**注册选项卡效果***/