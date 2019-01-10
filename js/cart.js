$(function(){	
	getCart();
});


function getCart(){
    $.get("/getcart.html", {
            iddd: Math.random()
        },
        function(data) {
            $(".xbtb1_5").html(data);
            
            /***会员登录成功后鼠标放到购物车***/          
            $(".xbtb1_5").hover(function () {
                $(".top1_10N").show();
            }, function () {
                $(".top1_10N").hide();
            });
            
            if($("#_unlogin").length > 0){
            	$("#shopNum").empty();
            }
        });
}


function removeProduct(id,nType,strFcode){
    var nowUrls=String(window.location);
    $.post("/delshopping.html", {
            id: id,
            type:nType,
            strFcode:strFcode,
            iddd: Math.random()
        },
        function(data) {
            if (data == 0) {
                if(nowUrls.indexOf("/cart.html")!=-1){
                	window.location=nowUrls;
                }else{
                    $("#shopp_"+nType+"_"+id).remove();
                    getCart();
                }
            }
        });
}