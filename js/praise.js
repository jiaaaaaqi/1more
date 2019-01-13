var nProductId1;

function addPrise(nProductId, nPraise) {
	nProductId1 = nProductId;

	if (nProductId1 == '') {
		jBox.tip('请选择一个商品');
		return;
	}
	doAjax("/addPrise.html?iddd="+Math.random()+"&nProductId=" + nProductId, "",addPriseCallback);
}

function addPriseCallback(data) {
	data = eval('(' + data + ')');
	if (data.code == 0) {
		//jBox.tip('你已点赞！');
		var priseNum = parseInt($('#Praise_' + nProductId1).text());
		
		if(!isNaN(priseNum)){
			$('#Praise_' + nProductId1).text(priseNum + 1);
		}
		
	} else if (data.code == 1) {
		jBox.tip('请选择一个商品！');
	} 
	 else if (data.code == 3) {
		 jBox.tip('Sorry,您已赞过！');
	} else if (data.code == -3) {
		//jBox.tip("请先登录");
		jBox.prompt('请先登录', '提示', 'info', { closed: function () { window.location.href = '/login/index.html?callback='+String(window.location); } });
		//window.location.href = '/login/index.html?callback=http://www.1more.com/showswf/index.html';
		
	}else {
		jBox.tip("网络错误！");
	}
}