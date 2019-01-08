/*	
function refreshImage(img){
    var imageUrl = '/register/getValidImage.do';  
    img.src = imageUrl + '?idd=' + Math.random();
}

function checkImageCode(){
	var strImageCode = $('#strImageCode').val();
	if(strImageCode == null || strImageCode== ''){
		alert('验证码不能为空');
		return;
	}
	$.get('/register/checkImageCode.do',
	{strImageCode:strImageCode,idd:Math.random()},
	function(data){
		data = eval("("+data+")");
		if(data.code != 0){
			alert('验证码错误');
			refreshImage(document.getElementById('validateimg'));
		}
	});
}

function login(){
	var strLoginName = $('#strLoginName').val();
	var strPassword = $('#strPassword').val();
	var strImageCode = $('#strImageCode').val();
	if(!isnull(strLoginName) || !isnull(strPassword)||!isnull(strImageCode)){
		alert('用户名、密码、验证码不能为空');
		return;
	}
	$('#loginForm').submit();
}
*/


$(function(){
	$("#strLoginName").val("").focus();
	
	$("#mobileLoginBtn").click(function(){
    	$("#mobileLogin").show();
    	$("#normalLogin").hide();
    	$("#type").val(1);
    });
    $("#normalLoginBtn").click(function(){
    	$("#normalLogin").show();
    	$("#mobileLogin").hide();
    	$("#type").val(0);
    });
})


function sendValidCode(){
	//验证手机号码
	var strMobilePhone = $("#strMobile").val();
	if(strMobilePhone == "" || typeof strMobilePhone == "undefined"){
		jBox.tip("请输入您的手机号码!");
        $("#strMobile").focus();
        return false;
	}
	if(checkMobilePhone(strMobilePhone)){
		//发送验证码
		var url = "/login/sendMobileCode.html";
		var date = "strMobilePhone=" + strMobilePhone + "&uuid=" + $("#uuid").val();
		doAjax(url , date , sendSuccess);
	}else{
		jBox.tip("手机格式不正确!");
	}
}

function sendSuccess(data){
	if(data == "success"){
		$("#sencondDown").show();
		$("#sencond").text(59);
		$("#yzcode").hide();
		setTimeout(sencondDown, 1000);
		return false;
	}else{
		jBox.tip(data);
		$("#yzcode").html("<a href='javascript:void(0);' onclick='sendValidCode();'>点击获取验证码</a>");
		return false;
	}
}

function sencondDown(){
	var time = $("#sencond").text();
	$("#sencond").text(time - 1);
	if (time == 1) {
		clearTimeout(sencondDown);
		
		$("#yzcode").html("<a href='javascript:void(0);' onclick='sendValidCode();'>点击获取验证码</a>");
		$("#yzcode").show();
		$("#sencondDown").hide();
	} else {
		setTimeout(sencondDown, 1000);
	}
}

function subclick() {
	var type = $("#type").val();
	if(type == 0){
		normalLogin();
	}else{
		mobileLogin();
	}
	return false;
}

function normalLogin() {
    var strLoginName = $.trim($("#strLoginName").val());
	if(strLoginName == "" || strLoginName == null){
		jBox.tip("用户名不能为空");
		return false;
	}
	
	var strPassword = $.trim($("#strPassword").val());
	if(strPassword == "" || strPassword == null){
		jBox.tip("密码不能为空");
		return false;
	}
    $('.submitForm').ajaxSubmit(function(data) {
    	var strary = data.split(";");
    
		if(strary[0]=="0" || strary[0] == "100" || strary[0] == "99" || strary[0] == "200"){
			if(callback=='' || callback=='null'){
				if(strary[0] == "100")
					jBox.prompt('恭喜您获得一张30元优惠券，有效期7天！', '提示', 'info', { closed: function () { location.href='/index.html'; } }); 
				else if(strary[0] == "99") 
					jBox.prompt('恭喜您获得一张20元优惠券，有效期7天！', '提示', 'info', { closed: function () { location.href='/index.html'; } }); 
				else
					location.href='/index.html';	
			}else{
				  var cookieValue = strary[4];
				    if(callback.indexOf("?")!=-1){
				    	callback=callback+"&spm="+cookieValue;
				    }else{
				    	callback=callback+"?spm="+cookieValue;
				    }
				if(strary[0] == "100") 
					jBox.prompt('恭喜您获得一张30元优惠券，有效期7天！', '提示', 'info', { closed: function () { location.href=callback; } }); 
				else if(strary[0] == "99") 
					jBox.prompt('恭喜您获得一张20元优惠券，有效期7天！', '提示', 'info', { closed: function () { location.href=callback; } }); 
				else{
					location.href=callback;
				}
					
			}
	       	
		}
		else if(strary[0]=="1"){
			jBox.tip("账号、密码不能为空！");
		}
		else if(strary[0]=="-1"){
			jBox.tip("账号、密码错误！");
		}else if(strary[0]=="-2"){
			jBox.tip("对不起，您的邮箱还未验证！");
		}else if(strary[0]=="-10"){
			jBox.tip("对不起，您的账号已绑定过其他微博！");
		}
	});
	return false;
}


function mobileLogin(){
	var strMobile= $("#strMobile").val();
    var strPassM = $("#strPassM").val();
    var strMobile = $.trim(strMobile);
	if(strMobile == "" || strMobile == null) {
        jBox.tip("请输入手机号码!");
        $("#strMobile").focus();
        return false;
    }
	var strPassM = $.trim(strPassM);
	if(strPassM == "" || strPassM == null) {
        jBox.tip("请输入动态密码!");
        $("#strPassM").focus();
        return false;
    }
	/*
	$.ajax({
		type: "GET", 
		dataType: 'jsonp', 
		url: 'http://www.1more.com/login/mobileLogin.html?jsoncallback=?',
		data: {'strMobile':strMobile,'strPassM':strPassM,'uuid':$("#uuid").val()},
		jsonp: 'jsoncallback',
		timeout: 5000,
		success: mobileLoginSuccess
	});*/
	$.getJSON("/login/mobileLogin.html?strMobile="+strMobile+"&strPassM="+strPassM+"&uuid="+$("#uuid").val()+"&jsoncallback=?");
}


function jsonpcallback(data){
	var code = data.code;
	if(code==-1){
		jBox.tip("非法请求!");
	}else if(code==-2){
		jBox.tip("手机号码、验证码不能为空!");
	}else if(code==-3){
		jBox.tip("验证码不正确!");
	}else if(code==-4){
		jBox.tip("验证码不正确!");
	}else if(code==-5){
		jBox.tip("手机号码、验证码不能为空!");
	}else if(code==-6){
		jBox.tip("验证码请求太频繁，请半个小时后再试!");
	}else if(code==-10){
		jBox.tip("对不起，该账号已绑定过其他微博！");
	}else if(code==0){
		//登录成功
		if(callback && callback !='' && callback!='null'){
			location.href=callback;
		} else {
			redirect('/index.html');
		}
	}
	return false;
}

function toRegister(){
	if(callback != null && callback !=""){
		location.href="/register/toRegister.html?callback="+callback;
	}else{
		location.href="/register/toRegister.html";
	}
}