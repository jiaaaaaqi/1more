var goodId;
   
function checkBuyerFcode(nProductId){
	var strFcode = $('#strFcode').val();
	if(strFcode ==''){
		jBox.tip('F码不能为空');
		return false;    
	}    
	$.get('/checkBuyFcode.html?strFcode='+strFcode+'&nProductId='+nProductId,function(data){
		data = eval('('+data+')');
		if(data.code ==0){
			addShopping(nProductId)
		}else if(data.code ==1){
			jBox.tip('F码不能为空');
		}else if(data.code ==2){
			jBox.tip('F码不存在或已过期');
		}else if(data.code ==3){
			jBox.tip('此F码不能购买此商品');
		}else{
			jBox.tip('系统错误');
		}
	});
}

function fcodeShow(){
	$("#strFcode").val('');
   $.get('/toFcodeShow.html',function(data){
   	 if(data == '0'){
   	 	showDialog(1);
   	 }else{
   	 	redirect('/login/index.html?callback='+window.location.href);
   	 }
   });
	
}
//list
function listfcodeShow(nProductId){
    $('#nProductId').val(nProductId);
	 $.get('/toFcodeShow.html',function(data){
   	 if(data == '0'){
   	 	listshowDialog(1);
   	 }else{
   	 	redirect('/login/index.html?callback='+window.location.href);
   	 }
   });
}
//list
function listcheckBuyerFcode(){
   var nProductId = $('#nProductId').val();
	var strFcode = $('#strFcode').val();
	if(strFcode ==''){
		jBox.tip('F码不能为空');
		return false;
	}
	$.get('/checkBuyFcode.html?strFcode='+strFcode+'&nProductId='+nProductId,function(data){
		data = eval('('+data+')');
		if(data.code ==0){
			listaddShopping(nProductId)
		}else if(data.code ==1){
			jBox.tip('F码不能为空');
		}else if(data.code ==2){
			jBox.tip('F码不存在或已过期');
		}else if(data.code ==3){
			jBox.tip('此F码不能购买此商品');
		}else{
			jBox.tip('系统错误');
		}
	});
}
//list
function listshowDialog(num){
	if(num ==1){
		closeDialog(2);
		closeDialog(3);
	}
	if(num ==2){
		//把积分和现金赋值
		var nProductId = $('#nProductId').val();
		var price = $('#price_'+nProductId).val();
		var mark =  $('#nIntegralPrice_'+nProductId).val();
		$('#buybutton').val(price);
		$('#jfbuybutton').val(mark);
		
		closeDialog(1);
		closeDialog(3);
	}
	if(num ==3){
		closeDialog(1);
		closeDialog(2);
	}
	var box =300;
	var th= $(window).scrollTop()+$(window).height()/1.6-box;
	var h =document.body.clientHeight;
	var rw =$(window).width()/2-box;
	
	$(".showbox"+num).animate({top:th,opacity:'show',width:500,height:240,right:rw},0);
	$("#zhezhao").css({
		display:"block",height:$(document).height()
	});
	return false;
}
//list
function listaddShopping(id){
	 $('#nProductId').val(id);
	goodId = id;
	//判断商品是否积分，0现金，1现金+积分，2两种方式都有
	var payType = 10;
	$.post("/getProductPayType.do", {
        id: id,
        iddd: Math.random()
    },function(data) {
    	payType = data;
    	if(payType==-1){
    		jBox.prompt('请先登录', '提示', 'info', { closed: function () { window.location.href = '/login/index.html?callback='+String(window.location); } });
    	}else if(payType==0 || payType==1){
    		sendShopping(id,payType);
    	}else if(payType==2){
    		listshowDialog(2);
    	}else{
    		jBox.tip('网络错误，请重新提交。','提示');
    	}
    });
}
//list
function listsendShopping(payType){
    var id = $('#nProductId').val();
    
	$.post("/addshopping.do", {
        id: id,
        p:1,
        cid : payType,
        iddd: Math.random()
    },
    function(data) {
    	if(data==0){
    		redirect("/cart.html");
    	}else if(data == -2){
    		if($("#max_sales").length ==0){
    			jBox.tip("本商品购物车中最大数量不能超过"+$("#max-"+goodId).val()+"件");
    		}else{
    			jBox.tip("本商品购物车中最大数量不能超过"+$("#max_sales").val()+"件");
    		}
    	}else if(data == -3){
    		jBox.tip("库存不足");
    	}else if(data == -4){
    		jBox.tip("对不起，您的积分不足。");
    	}else if(data == -5){
    		jBox.tip("您已超出此商品的最大购买数量。");
    	}else if(data == -6){
    		jBox.tip("F码不存在或已过期");
    	}else if(data == -7){
    		jBox.tip("F码不能购买此商品");
    	}else if(data == -8){
    		jBox.tip("F码对应的商品只能一次只能买一个");
    	}else if(data == -9){
    		jBox.tip("F码商品已无F码销售库存");
    	}else if(data == -10){
    		jBox.tip("兑换商品库存不足");
    	}else if(data == -11){
    		jBox.tip("魔豆不足，无法兑换此商品");
    	}else{
    		jBox.tip("网络异常。");
    	}
    });
}



function addShopping(id){ 
	
	$.post("/checkProductSku.do", {
        id: id,
        iddd: Math.random()
    },function(data) {
    	var data = eval('('+data+')');
    	if(data.code==-1){
    		redirect('/login/index.do?callback='+window.location.href);
    	}else if(data.code==0){
    		var cdosProductSku = data.cdosProductSku;
    		if(cdosProductSku.length==0){
    			jBox.tip("该商品已下架，请购买其他产品");
    			return;
    		}
    		//只有一款sku
    		if(cdosProductSku.length==1){
    			checkPay(cdosProductSku[0].nProductId);
    		}else{
    		
    		
    			$(".matter_left div").remove();
    			$(".tab li").remove();
    			var str = "";
    			var d = "";  
    			$.each(cdosProductSku, function(index,i) {
    						if(index==0){
    						str += "<li class='active'>"+i.strSku+"</li>";
    						d +="<div class='on'><img src='http://img.1more.com/product/200x200/"+i.strLogoURL+"' alt='' ></div>";
							if((cdosProductSku[0].nWmsStock-cdosProductSku[0].nLockStock)<=0){
								$("#gray").addClass("gray");
								$("#gray").attr("onclick","");
							}else{
								$("#gray").removeClass("gray");
								$("#gray").attr("onclick","addshop()");
							}
    						}else{
    						str += "<li>"+i.strSku+"</li>";
    						d +="<div><img src='http://img.1more.com/product/200x200/"+i.strLogoURL+"' alt=''></div>";
    						}
							});
    			$("#sku").append(str);
    			$("#picList").append(d);
    			$("#productId").val(cdosProductSku[0].nProductId);
    			$(".tab li").click(function () {
					$(".tab li").eq($(this).index()).addClass("active").siblings().removeClass('active');
					$(".matter_left div").hide().eq($(this).index()).show();
					$("#productId").val(cdosProductSku[$(this).index()].nProductId);
					if((cdosProductSku[$(this).index()].nWmsStock-cdosProductSku[$(this).index()].nLockStock)<=0){
					$("#gray").addClass("gray");
						$("#gray").attr("onclick","");
						$("#gray").attr("title","暂时缺货")
					}else{
					$("#gray").removeClass("gray");
					$("#gray").attr("onclick","addshop()");
					$("#gray").attr("title","");
					}
					
			});
			$(".shop-wrap").show();
    		}
    		
    	}else{
    		jBox.tip('网络错误，请重新提交。','提示');
    	}
    });
}

function addshop(){
	var productId = $("#productId").val();
	checkPay(productId);
}

function checkPay(id){
	goodId = id;
	//判断商品是否积分，0现金，1现金+积分，2两种方式都有
	var payType = 10;
	$.post("/getProductPayType.do", {
        id: id,
        iddd: Math.random()
    },function(data) {
    	payType = data;
    	if(payType==-1){
    		redirect('/login/index.html?callback='+window.location.href);
    	}else if(payType==0 || payType==1){
    		sendShopping(id,payType);
    	}else if(payType==2 || payType==3){
    		showDialog(payType);
    	}else{
    		jBox.tip('网络错误，请重新提交。','提示');
    	}
    });
}


function sendShopping(id,payType){
	var p = 1;
	if($("#max_sales").length>0){
		p=$("#cartNum").val();
	}
	$.post("/addshopping.do", {
        id: id,
        p:p,
        cid : payType,
        iddd: Math.random()
    },
    function(data) {
    	if(data==0){
    		redirect("/cart.html");
    	}else if(data == -2){
    		if($("#max_sales").length ==0){
    			jBox.tip("本商品购物车中最大数量不能超过"+$("#max-"+goodId).val()+"件");
    		}else{
    			jBox.tip("本商品购物车中最大数量不能超过"+$("#max_sales").val()+"件");
    		}
    	}else if(data == -3){
    		jBox.tip("库存不足");
    	}else if(data == -4){
    		jBox.tip("对不起，您的积分不足。");
    	}else if(data == -5){
    		jBox.tip("您已超出此商品的最大购买数量。");
    	}else if(data == -6){
    		jBox.tip("F码不存在或已过期");
    	}else if(data == -7){
    		jBox.tip("F码不能购买此商品");
    	}else if(data == -8){
    		jBox.tip("F码对应的商品只能一次只能买一个");
    	}else if(data == -9){
    		jBox.tip("F码商品已无F码销售库存");
    	}else{
    		jBox.tip("网络异常。");
    	}
    });
}
//
//function addShopping(id){
//	var val=$('input:radio[name="'+dom+'"]:checked').val();
//	var val= 0;
//    $.post("/addshopping.html", {
//            id: id,
//            p:1,
//            cid : val,
//            iddd: Math.random()
//        },
//        function(data) {
//        	if(data==0){
//        		getCart();
//        		showDialog();
//        	}
//        	else if(data == -2){
//        		alert("最大数量不能超过"+$("#max-"+id).val()+"件");
//        	}else if(data == -3){
//        		alert("库存不足");
//        	}else if(data == -4){
//        		 alert("对不起，您的积分不足。");
//        	}else if(data == -5){
//        		 alert("对不起，你的购买数超过此商品的单用户最大购买数");
//        	}
//    });
//}
//
//function addBuy(id){
//	//var val=$('input:radio[name="pr"]:checked').val();
//	var val= 0;
//    $.post("/addshopping.html", {
//            id: id,
//            cid : val,
//            p:$("#cartNum").val(),
//            iddd: Math.random()
//        },
//        function(data) {
//        	if(data==0){
//        		getCart();
//        		showDialog();
//        	}else if(data == -3){
//        		alert("库存不足");
//        	}else if(data == -2){
//        		 alert("最大数量不能超过"+$("#cartNum").attr("max-size")+"件");
//        	}else if(data == -4){
//        		 alert("对不起，您的积分不足。");
//        	}else if(data == -5){
//        		 alert("对不起，你的购买数超过此商品的单用户最大购买数");
//        	}
//    });
//}

function closeDialog(num){
//	$(".showbox"+num).animate({top:0,opacity: 'hide',width:0,height:0,right:0},0);
	$(".showbox"+num).hide();
	$("#zhezhao").css("display","none");
}
function showDialog(num){
	if(num ==1){
		closeDialog(2);
		closeDialog(3);
	}
	if(num ==2){
		closeDialog(1);
		closeDialog(3);
	}
	if(num ==3){
		closeDialog(1);
		closeDialog(2);
	}
	/*var box =300;
	var th= $(window).scrollTop()+$(window).height()/1.6-box;
	var h =widocument.body.clientHeight;
	var rw =$(ndow).width()/2-box;
	
	$(".showbox"+num).animate({top:th,opacity:'show',width:500,height:240,right:rw},0);
	*/
	
	$(".showbox"+num).show();
	$("#zhezhao").css({
		display:"block",height:$(document).height()
	});
	return false;
}

function toshoppinglist(){
	window.location.href='/cart.html';
}


var top = window.screen.height / 2 - 250;
var left = window.screen.width / 2 - 300;

/*title是标题，rLink链接，summary内容，site分享来源，pic分享图片路径,分享到新浪微博*/
function shareTSina(img,url,title) {
	var title = title;
  	var pic = img;
    var	rLink = url;
    window.open("http://service.weibo.com/share/share.php?pic=" +encodeURIComponent(pic) +"&title=" +
	    encodeURIComponent(title.replace(/&nbsp;/g, " ").replace(/<br \/>/g, " "))+ "&url=" + encodeURIComponent(rLink),
	    "分享至新浪微博",
	    "height=500,width=600,top=" + top + ",left=" + left + ",toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no");
}

function closeyzm(){
	closezhezhao();
}

function refreshCheckImage(){
     	var nProductId = $('#nProductId').val();
	    var imageUrl = '/getShoppingValidImage.do'; 
	    document.getElementById('imgidc').src = imageUrl + '?idd=' + Math.random()+"&nProductId="+nProductId;
}

function toAddActivityOrder(nProductId){
	//首先弹出验证码
	$('#nProductId').val(nProductId);
	refreshCheckImage();
	if( document.getElementById('imgidc').src ==''){
		return;
	}
	displayzhezhao();
}

function addActivityOrder(){
	
	var nProductId = $('#nProductId').val();
	var yzm = $('#yzm').val();
    if(yzm ==''){
    	alert('验证码不能为空');
    	return;
    }
	location.href='/activityOrder.html?nProductId='+nProductId+"&yzm="+yzm;
}


function displayzhezhao(){
	        var box =300;
			var th= $(window).scrollTop()+$(window).height()/1.5-box;
			var h =document.body.clientHeight;
			var rw =$(window).width()/2-box;
			$(".showbox1").animate({top:th,opacity:'show',width:500,height:170,right:rw},0);
			$("#zhezhao").css({
				display:"block",height:$(document).height()
			});

}
function closezhezhao(){
	$(".showbox1").parents(".showbox1").animate({top:0,opacity: 'hide',width:0,height:0,right:0},0);
	$("#yzmdiv").css("display","none");
	$("#zhezhao").css("display","none");
}

