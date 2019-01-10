$(function () {
    /**头部栏目切换   start***/
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
    });
    /**头部栏目切换   end***/


    /**地址管理页面点击使用新地址***/
    $(".content_member_right12").click(function () {
        $(".content_member_right16").toggle();
        $(".content_member_right17").toggle();
        clearInput();
        $(".content_member_right16_1").html("新增收货地址");
     

        $("#txtshoujianren").val("");
        $("#txtphone").val("");
        $("#txtdizhi").val("");
    });

    $(".content_member_right12z").click(function () {
        $(".content_member_right16").toggle();
        $(".content_member_right17").toggle();
        clearInput();
        $(".content_member_right16_1").html("新增收货地址");
     

        $("#txtshoujianren").val("");
        $("#txtphone").val("");
        $("#txtdizhi").val("");
    });
    /**地址管理页面点击使用新地址***/



    /**收货地址点击后状态***/
    $(".content_member_right11  ul li").each(function (a, b) {
        $(b).click(function () {
            if (a != 0) {
                $(".content_member_right11  ul li").removeClass();
                $(".content_member_right11  ul li").css("border", "1px solid #eee");
               
            }
        });
    });
    $(".content_member_right11z  ul li").each(function (a, b) {
        $(b).click(function () {
            if (a != 0) {
                $(".content_member_right11z  ul li").removeClass();
                $(".content_member_right11z  ul li").css("border", "1px solid #eee");
                $(b).attr("class", "hover");
                $(b).css("border", "1px solid #FD4C00");
            }
        });
    });
    /**收货地址点击后状态***/


    /**送货时间和发票信息  效果***/
    $("#logistics>div").click(function(){
    	$("#logistics>div").each(function(i){
    		if(i > 0){
    			$(this).removeClass("logisticsdiv-active").addClass("logisticsdiv");
    		}
    	})
    	$(this).removeClass("logisticsdiv").addClass("logisticsdiv-active");
    	
		if($.trim($(this).text()).indexOf("顺丰") >=0){
    		$("#nTPLId").val(1);
    		$("#postFee").val(10);
    	}else{
    		$("#nTPLId").val(0);
    		$("#postFee").val(0);
    	}
    	
    	orderList($("#pp").val(),$("#oo").val(),$("#cid").val(),$("#nTPLId").val(),$("#postFee").val());
    	
    })
    
    
    $("#shsj .content_car11_4").each(function (a, b) {
        $(b).find("a").click(function () {
            $("#shsj .content_car11_4 a").removeClass();
            $(b).find("a").attr("class", "hover");
            $("#strDeliveryTime").val(a+1);
        });

    });
    $("#fpxx .content_car11_5_4").each(function (a, b) {
        $(b).find("a").click(function () {
            $("#fpxx .content_car11_5_4 a").removeClass();
            $(b).find("a").attr("class", "hover");
	        $("#sfps").attr("checked","checked");    
        });

    });

    $("#fpxx .content_car11_5_4:eq(1)").click(function () {
        $(".content_car11_5_5").show();
    });
    $("#fpxx .content_car11_5_4:eq(0)").click(function () {
        $(".content_car11_5_5").hide();
    });
    /**送货时间和发票信息  效果***/


    /**编辑收货地址***/
    $(".content_member_right11 li").each(function (a, b) {
        $(b).find(".content_member_right15_1").find("a").click(function () {
            $(".content_member_right16").show();
            $(".content_member_right17").show();
            $(".content_member_right16_1").html("编辑收货地址");
            var name = $(b).find("#name").html()
            var phone = $(b).find("#dianhua").html()
            var dizhi = $(b).find("#dizhi").html()

            $("#txtshoujianren").val($.trim(name));
            $("#txtphone").val($.trim(phone));
            $("#txtdizhi").val($.trim(dizhi));

        });

    });
    $(".content_member_right11z li").each(function (a, b) {
        $(b).find(".content_member_right15z_1").find("a").click(function () {
        	var txt = $(this).text();
        	if($.trim(txt) == '删除')
        		return true;
            $(".content_member_right16").show();
            $(".content_member_right17").show();
            $(".content_member_right16_1").html("编辑收货地址");
            var name = $(b).find("#name").html()
            var phone = $(b).find("#dianhua").html()
            var dizhi = $(b).find("#dizhi").html()

            $("#txtshoujianren").val($.trim(name));
            $("#txtphone").val($.trim(phone));
            $("#txtdizhi").val($.trim(dizhi));

        });

    });
    /**编辑收货地址***/


    /**弹出窗***/
    $(".content_car24_1_1").click(function () {
        $(".content_car24").hide();
    });
    $(".content_car24_2_6").click(function () {
        $(".content_car24").hide();
    });
    /**弹出窗***/

    /**点击索要发票***/
    $(".content_car11_6_1 input").click(function () {
        var c = $(".content_car11_6_1 input").attr("checked");

        if (c == "checked") {
            $("#fpxx .content_car11_5_4:eq(0) a").addClass("hover");
            $("#fpxx .content_car11_5_4:eq(1) a").removeClass("hover");
            $(".content_car11_5_5").hide();
        } else {
            $("#fpxx .content_car11_5_4:eq(0) a").removeClass("hover");
           
        }
    });
    /**点击索要发票***/
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