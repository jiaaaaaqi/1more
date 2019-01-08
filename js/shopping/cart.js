function selected(){
	if($(".kuaidi_hide").css("display") == "none")	{
		$(".kuaidi_hide").css({"display":"block"});
	}else{
		$(".kuaidi_hide").css({"display":"none"});
	}

}
function get_xy_wz(id){
	$('#kuaidi_1').html($(".kuaidi_hide ul li dd:eq("+id+")"+" a").html());
	$(".kuaidi_hide").fadeOut();
	$("#kuaidifei").html("30.0");
}

function tag_onclick(id){
	for(var i=0;i<2 ;i++)	{
		$("#store_shop2_tit li")[i].className="othertag";
		if(id-1 == i)		{
			$("#store_shop2_tit li")[i].className="firsttag";
		}
	}	
	for(var j = 1;j<4;j++)	{
		$("#shop_detailed" + j).hide();
	}
	$("#shop_detailed" + id).show(); 
}

$(function(){
	$(".cut").click(function(){
		var val = $(this).parent().find('.num input').val();
		val--;
		if(val <= 1){
			val = 1;
		}
		$(this).parent().find('.num input').val(val);
	});
	$(".add").click(function(){
		var val = $(this).parent().find('.num input').val();
		val++;
		$(this).parent().find('.num input').val(val);
	});
	var left = 0;
	$(".scrlPrev").click(function(){
		left = left-76;
		if(left < -228)	{
			left = -228;
			return false;
		}
		$(".listInner ul").css("left",""+left+"px");
	});
	$(".scrlNext").click(function(){
		left = left+76;
		if(left >0)	{
			left =0;
			return false;
		}
		$(".listInner ul").css("left",""+left+"px");
	});
});

function delShopping(id,type,strFcode){
	var submit = function (v, h, f) {
	    if (v == 'ok'){
	    	$.post("/delshopping.html", {
	            id: id,
	            type:type,
	            strFcode:strFcode,
	            iddd: Math.random()
	        },function(data) {
	            if (data == 0) {
	                window.location="/cart.html";
	            }
	        });
	    }
	    return true; //close
	};

	jBox.confirm("确定要删除该商品吗？", "提示", submit);	
    
}

function changeSum(id,v,type,strFcode){
    if(isNaN(v)){
    	jBox.tip("请输入正确的数量");
        $("#cartNum_"+type+"_"+id).focus();
        return false;
    }
    if(parseInt(v)<0){
    	jBox.tip("请输入正确的数量");
        $("#cartNum_"+type+"_"+id).focus();
        return false;
    }
    if(parseInt(v)==0){
    	delShopping(id,type,strFcode);
        
        return false;
    }
    $.get("/editshopping.html", {
            id: id,
            strFcode:strFcode,
            p:parseInt(v),
            type:type,
            iddd: Math.random()
        },
        function(data) {
            if (data == "0") {
            	window.location="/cart.html";
            }else if(data == "-2"){
            	$("#cartNum_"+type+"_"+id).val($("#cartNum_"+type+"_"+id).val()-1);
            	 //alert("最大数量不能超过" + $("#cartNum_"+type+"_"+id).attr("max-size") + "件");
            	 //jBox.alert('Hello jBox', 'jBox');
            	 jBox.prompt("最大数量不能超过" + $("#cartNum_"+type+"_"+id).attr("max-size") + "件", '提示', 'info', { closed: function () { window.location="/cart.html"; } });

            }else if(data == "-3"){
            	$("#cartNum_"+type+"_"+id).val($("#cartNum_"+type+"_"+id).val()-1);
            	jBox.prompt("库存不足", '提示', 'info', { closed: function () { window.location="/cart.html"; } });
            }else if(data == "-4"){
            	jBox.prompt("对不起，您的积分不足", '提示', 'info', { closed: function () { window.location="/cart.html"; } });
            }else if(data == "-5"){
            	jBox.prompt("F码只能购买一个对应的商品", '提示', 'info', { closed: function () { window.location="/cart.html"; } });
            	$("#cartNum_"+type+"_"+id).val(1);
            }else if(data == -9){
    			jBox.prompt("抱歉，此F码商品已无F码销售库存", '提示', 'info', { closed: function () { window.location="/cart.html"; } });
    		}
            //window.location="/cart.html";
        });
}

function changeNum(id,type){
	var num = $("#cartNum_"+type+"_"+id).val();
	if(num > 5){
		jBox.prompt("最大数量不能超过"+maxProduct+"件", '提示', 'info', { closed: function () {$("#cartNum_"+type+"_"+id).attr("value","5"); window.location="/cart.html"; } });
	}
}

function changeType(cartId,id,v,type){
	if(isNaN(v)){
        jBox.tip("请输入正确的数量");
        $("#cartNum_"+type+"_"+id).focus();
        return false;
    }
    if(parseInt(v)<0){
    	jBox.tip("请输入正确的数量");
        $("#cartNum_"+type+"_"+id).focus();
        return false;
    }
    if(parseInt(v)==0){
        
            delShopping(id,type,strFcode);
        
        return false;
    }
    $.get("/changePayType.html", {
            id: id,
            p:parseInt(v),
            type:type,
            cartId:cartId,
            iddd: Math.random()
        },
        function(data) {
            if (data == 0) {
            	 window.location="/cart.html";
            }else if(data == -4){            	
            	jBox.prompt("对不起，您的积分不足", '提示', 'info', { closed: function () { window.location="/cart.html"; } });
            }else{                
                jBox.prompt("网络繁忙", '提示', 'info', { closed: function () { window.location="/cart.html"; } });
            }
           
        });
}


$(document).keydown(function(event) {
	if (event.keyCode == 13) {
		$('form').each(function() {
			event.preventDefault();
		});
	}
});
	
function doOrder(){
    var textfield = document.getElementsByName("view");
    var bo = true;

    for(var i=0;i<textfield.length;i++){
        if(textfield[i].checked){
            bo=false;
        }
    }
    if(bo){
        jBox.tip("请至少选择一个商品!");
        return false;
    }
   
    
    $.get("/checkshopping.html?iddd="+Math.random(),
        $("#cartForm").serialize(),
        function(data) {
            if(data=="2"){
                $('#cartForm').submit();
            }else if(data=="0"){               
                jBox.prompt("您尚未登录，请先登录!", '提示', 'info', { closed: function () { window.location="/login/index.html?callback="+String(window.location); } });
            }else if(data=="1"){
                jBox.tip("您的购物车有库存不足的商品，请修改数量!");
            }else if(data=="3"){
                jBox.tip("请至少选择一个商品!");
            }else if(data=="4"){
                jBox.tip("系统异常，请联系管理员或稍后再提交订单!");
            }else if(data=="5"){
                jBox.tip("F码商品已无F码销售库存");
            }else if(data=="6"){
                jBox.tip("F码只能购买一个相对应的商品");
            }
        });
}

function checkV(id,type,strFcode){
	var obj = $("#cartNum_"+type+"_"+id);
	var pre_value = obj.attr("pre_value");
	var maxCount = obj.attr("data-max");
	
    var v = obj.val();
    
    if(isNaN(v)){
        jBox.tip("请输入正确的数量");
        obj.val(pre_value);
        obj.focus();
        return false;
    }
    if(parseInt(v)<0){
        jBox.tip("请输入正确的数量");
        obj.val(pre_value);
        obj.focus();
        return false;
    }
    if(parseInt(v) > maxCount){
    	jBox.tip("最大数量不能超过"+maxCount+"件");
    	obj.val(pre_value);
    	obj.focus();
        return false;
    }
    
    if(parseInt(v)==0){
        
            delShopping(id,type,strFcode);
        
        return false;
    }
    
    $.get("/editshopping.html", {
            id: id,
            p:parseInt(v),
            type:type,
            strFcode:strFcode,
            iddd: Math.random()
        },
        function(data) {
            if (data == 0) {
                window.location="/cart.html";
            }else if(data == -2){
            	obj.val(pre_value);
            	jBox.tip("最大数量不能超过"+$("#cartNum_"+type+"_"+id).attr("max-size")+"件");
            }else if(data == -3){
            	obj.val(pre_value);
            	 jBox.tip("库存不足");
            }else if(data==-4){
            	obj.val(pre_value);
                jBox.tip("对不起，您的积分不足!");
            }else if(data == "-5"){
            	jBox.tip("F码只能购买一个对应的商品");
            }else if(data == -9){
    			jBox.tip("抱歉，此F码商品已无F码销售库存");
    		}else{
            	obj.val(pre_value);
                jBox.tip("网络繁忙");
            }
        });
}