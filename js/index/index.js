/**头部栏目切换***/
$(function () {
    $(".logo1").click(function () {
        $(".logo1").hide();
        $(".top ul li").animate({ left: '0px' });
        $(".top1").hide();
        $(".top2").animate({ right: '140px' });
        $(".top3").animate({ right: '140px' });
        $(".logo3").animate({ right: '30px' });
        $("body").removeAttr("style");
    });
    $(".logo2").click(function () {
        $(".top1").show();
        $(".logo1").show();
        $(".top ul li").animate({ left: '-340px' });
        $(".top2").animate({ right: '115px' });
        $(".top3").animate({ right: '115px' });
        $(".logo3").animate({ right: '390px' });
        $("body").css("overflow", "hidden");
    });

});
/**头部栏目切换***/


/**banner效果***/
//获得分辨率   可视区域高
function keshi_gao() {
    var h1 = document.documentElement.clientHeight;
    return h1;
}
//获得分辨率  屏幕分辨率高度
function body_gao() {
    var h
    if (!!(window.attachEvent && !window.opera))  //IE
    {
        h = document.documentElement.clientHeight + 20;
    } else { h = window.innerHeight; }
    return h;
}
//获得分辨率   可视区域宽
function keshi_kuan() {
    var w1 = document.documentElement.clientWidth;
    return w1;
}
//获得分辨率  body对象宽度
function body_kuan() {
    var w = document.body.clientWidth;
    return w;
}
//获取移动设备宽
function kuan_yiding() {
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    return width;
}


//PC端加载
function ladong() {
	$(".logo3").show();
	$(".logo4").show();
	
	$("#body_list").empty();
	for(var i=0;i<arrayImgBanner.length;i++){
		$("#body_list").append(arrayImgBanner[i]);
	}
	var s;
}
//PC端加载
window.onload = function () {
	ladong();
}
//PC端窗口上下拉动
window.onresize = function () {
    ladong();
    $(".top").each(function () {
        var tupian = $("#banner > ul > li:eq(0) > a > img"); var kuan = tupian.width(); var gao = tupian.height();
        var h1 = body_kuan() * gao / kuan
        if (h1 >= body_gao()) { h1 = body_gao(); }
        if (h1 == 0) {
            h1 = body_gao();
        }
        $(this).css("height", h1 * 1); $(this).css("overflow", "hidden");

    });
}
//手机端加载
function ladong1() {
    $(".top1").css("height", keshi_gao()*0.6);
    $(".top1").css("min-height", keshi_gao()*0.5);
    var tupian = $("#banner > ul > li:eq(0) > a > img");
    var kuan = tupian.width();
    var gao = tupian.height();
    var h1 = body_kuan() * gao / kuan
    if (h1 >= keshi_gao()) {
        h1 = keshi_gao();
    }
 
    $("#banner > ul > li > a > img").each(function () {
        $(this).css("height", h1);
        $(this).css("width", body_kuan());
    });
    $("#banner > ul > li").each(function () {
        $(this).css("height", h1);
        $(this).css("width", body_kuan());
    });
    $(".top").each(function () {
        $(this).css("height", h1);
        $(this).css("width", body_kuan());
    });
}

//监听手机查看是横屏还是竖屏 
function hengshuping() {
    if (window.orientation == 180 || window.orientation == 0) {
        //alert("竖屏状态")
        ladong1()
    }
    if (window.orientation == 90 || window.orientation == -90) {
        //alert("横屏状态")
        ladong()
    }
}
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);

//判断用户的浏览设备是移动设备还是PC
function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    //document.writeln("您的浏览设备为：");
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        //alert("phone");
        return "phone";
    } else {
        // alert("pc");
        return "pc";
    }
}
/**banner效果***/