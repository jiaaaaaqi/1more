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

/**banner效果***/