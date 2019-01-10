$(function () {
    /**技术支持页面点击出现答案***/
    $(".content_service_right3  ul li").each(function (a, b) {
        $(b).find(".content_service_right3_7").find("a").click(function () {
			$(".content_service_right3 > ul > li > .content_service_right3_1 > .content_service_right3_7").show();
			$(".content_service_right3 > ul > li > .content_service_right3_4").hide();

            $(b).find(".content_service_right3_7").hide();
			$(b).find(".content_service_right3_8").show();
			$(b).find(".content_service_right3_4").show();
        });
		
		 $(b).find(".content_service_right3_8").find("a").click(function () {
			 
			var a = $(b).find(".content_service_right3_4").css("display");
			 
			if(a=="block")
			{
			   $(b).find(".content_service_right3_8").hide();
			   $(b).find(".content_service_right3_7").show();
			   $(b).find(".content_service_right3_4").hide();
			}else{
				$(".content_service_right3 > ul > li > .content_service_right3_1 > .content_service_right3_7").hide();
			    $(".content_service_right3 > ul > li > .content_service_right3_4").show();
               $(b).find(".content_service_right3_8").hide();
			   $(b).find(".content_service_right3_7").show();
			   $(b).find(".content_service_right3_4").hide();
			}
        });
    });
    /**技术支持页面点击出现答案***/



    /**服务首页图片滚动***/
    if($('#mycarousel').length > 0){
    	$('#mycarousel').jcarousel({
            scroll: 1,   //每次滚动切换的元素数量 默认为3
            //start: 1, //开始的元素编号 默认为1
            //wrap: 'null',  //表示是否将第一个和最后一个元素实现连接效果。选项值可以是"first" , "last" 或者 "both" 。如果设置为null ，默认关闭连接效果。你也可以设置"circular"选项实现循环效果。
            //vertical: 'true',   //图片滚动方向 ture是垂直方向 默认是水平方向
            auto: 5,  //图片滚动时间间隔
            wrap: 'circular',
            initCallback: mycarousel_initCallback   //设计图片自动滚动
        });
    }
    

    function mycarousel_initCallback(carousel) {
        // Disable autoscrolling if the user clicks the prev or next button.
        carousel.buttonNext.bind('click', function () {
            carousel.startAuto(0);
        });

        carousel.buttonPrev.bind('click', function () {
            carousel.startAuto(0);
        });

        // Pause autoscrolling if the user moves with the cursor over the clip.
        carousel.clip.hover(function () {
            carousel.stopAuto();
        }, function () {
            carousel.startAuto();
        });
    };
    /**服务首页图片滚动***/



    /**自助服务效果***/
    $(".content_service3 ul li:eq(0)").hover(function () {
        $(this).find("a").find("img").attr("src", "/images/zzfw1_1.png")
    }, function () {
        $(this).find("a").find("img").attr("src", "/images/zzfw1.png")
    });
    $(".content_service3 ul li:eq(1)").hover(function () {
        $(this).find("a").find("img").attr("src", "/images/zzfw2_1.png")
    }, function () {
        $(this).find("a").find("img").attr("src", "/images/zzfw2.png")
    });
    $(".content_service3 ul li:eq(2)").hover(function () {
        $(this).find("a").find("img").attr("src", "/images/zzfw3_1.png")
    }, function () {
        $(this).find("a").find("img").attr("src", "/images/zzfw3.png")
    });
    $(".content_service3 ul li:eq(3)").hover(function () {
        $(this).find("a").find("img").attr("src", "/images/zzfw4_1.png")
    }, function () {
        $(this).find("a").find("img").attr("src", "/images/zzfw4.png")
    });
    /**自助服务效果  end***/
});
 