$(function () {
	$(".registerform").Validform({
    	btnSubmit:"#checkButton",
		tiptype:2,
		tipSweep:true,
		beforeSubmit:function(){
			if(!zhuche())
				return;
			saveUser();
			return false;
		}
	});
})
var tips = "<font style='color:#F63B21'>用户名至少6个字符,最多12个字符</font>";
function checkUserName(obj){
	var name = obj.value;
	var len = jmz.GetLength(rtrim(name));
	var first_chr = name.charAt(0);
	var patrn=/^[0-9]$/;
	 if(patrn.exec(first_chr)) 
		{	  
		$("#userspan").html("<font style='color:#F63B21'>用户名首字符不能为数字</font>");   
			  return false;
		}
	 else if(name == "" ||  len<6  || len > 12 ){
		$("#userspan").html(tips);
		$("#strLoginName").focus();
		return;
	}
	doAjax("/register/checkUserName.html?iddd="+Math.random()+"&name=" + encodeURIComponent(name), "",checkCallback);
}

function checkCallback(data) {
	//成功
	if (data == '0') {
		$("#userspan").html("<font style='color:#A5C11B'>恭喜你，可以使用该用户名！</font>");
	}
	//重名
	else if (data == "-1") {
		$("#userspan").html("<font style='color:#F63B21'>用户名已存在,请更换用户名!</font>");
	} else {
	}
}

var tipsa = "<font style='color:#F63B21'>手机号长度为11个字符</font>";
function checkPhone(obj){
	var phone = obj.value;
	var len = jmz.GetLength(rtrim(phone));
	if(phone == "" ||  len != 11  ){
		$("#phonespan").html(tipsa);
		$("#strMobilePhone").focus();
		return;
	}
	
	if(!checkMobilePhone(rtrim(phone))){
		$("#phonespan").html("<font style='color:#F63B21'>请输入合法的手机号码</font>");
		$("#strMobilePhone").focus();
		return;
	}
	
	doAjax("/register/checkPhone.html?iddd="+Math.random()+"&phone=" + encodeURIComponent(phone), "",checkCallback2);
}
function checkCallback2(data) {
	//成功
	if (data == '0') {
		$("#phonespan").html("<font style='color:#A5C11B'>恭喜你，可以使用该手机号！</font>");
	}
	//重名
	else if (data == "-1") {
		$("#phonespan").html("<font style='color:#F63B21'>手机号已存在,请更换手机号!</font>");
	} else {
	}
}

function ckPwd1(obj) { 
	var userpwd = obj.value;
	var len = jmz.GetLength(rtrim(userpwd)); 
    if(len<6 || len>16) {  
    	$("#passwordspan").html("<font style='color:#F63B21'>密码长度为6-16个字符，区分大小写</font>");  
        return false;  
    }else{  
    	$("#passwordspan").html("<font style='color:#A5C11B'>密码可用</font>");  
        return true;  
    }  
}

function ckPwd2(obj) {
	var userpwd = $('#userpwd').val();
	var userrpwd = $('#userrpwd').val();
	var len = jmz.GetLength(rtrim(userrpwd));
    if(len<6 || len>16) {  
    	$("#passwordspan2").html("<font style='color:#F63B21'>密码长度为6-16个字符，区分大小写</font>");   
        return false;  
    }else if(userpwd != userrpwd) {  
    	$("#passwordspan2").html("<font style='color:#F63B21' >密码不一致，请重新输入</font>");  
        return false;  
    }else{  
    	$("#passwordspan2").html("<font style='color:#A5C11B'>密码一致，请继续</font>");  
        return true;  
    }  
} 


function checkMobilePhone(phone){
	//var dl = /(^[1][0-9]\d{9}$)/;
	var dl = /^1[3|4|5|7|8|9]\d{9}$/;  
	var strMobilePhone = phone;
	var length = strMobilePhone.length
	//大陆手机号码
	if(length == 11){
		if(!dl.exec(strMobilePhone)){
			return false;
		}
	}else{
		return false;
	}
	return true;
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

function refreshImage(img){
    var imageUrl = '/register/getddddValidImage.do';
    img.src = imageUrl + '?id=' + Math.random();
}

function checkReg(){
	return false;
}