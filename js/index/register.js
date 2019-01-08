
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