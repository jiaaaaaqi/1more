var jmz = {};
jmz.GetLength = function(str) {
    var realLength = 0, len = str.length, charCode = -1;
    for (var i = 0; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128) realLength += 1;
        else realLength += 2;
    }
    return realLength;
};

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
	else{
		$("#userspan").html("<font style='color:#A5C11B'>恭喜你，可以使用该用户名！</font>");
	}

}


// function checkCallback(data) {
// 	//成功
// 	if (data == '0') {
// 		$("#userspan").html("<font style='color:#A5C11B'>恭喜你，可以使用该用户名！</font>");
// 	}
// 	//重名
// 	else if (data == "-1") {
// 		$("#userspan").html("<font style='color:#F63B21'>用户名已存在,请更换用户名!</font>");
// 	} else {
// 	}
// }

var tipsa = "<font style='color:#F63B21'>手机号长度为11个字符</font>";
function checkPhone(obj){
	var phone = obj.value;
	var len = jmz.GetLength(rtrim(phone));
	if(phone == "" ||  len != 11  ){
		$("#phonespan").html(tipsa);
		$("#strMobilePhone").focus();
		return;
	}else{
		$("#phonespan").html("<font style='color:#A5C11B'>恭喜你，可以使用该手机号！</font>");
	}
	
	if(!checkMobilePhone(rtrim(phone))){
		$("#phonespan").html("<font style='color:#F63B21'>请输入合法的手机号码</font>");
		$("#strMobilePhone").focus();
		return;
	}
	
	//doAjax("/register/checkPhone.html?iddd="+Math.random()+"&phone=" + encodeURIComponent(phone), "",checkCallback2);
}
// function checkCallback2(data) {
// 	//成功
// 	if (data == '0') {
// 		$("#phonespan").html("<font style='color:#A5C11B'>恭喜你，可以使用该手机号！</font>");
// 	}
// 	//重名
// 	else if (data == "-1") {
// 		$("#phonespan").html("<font style='color:#F63B21'>手机号已存在,请更换手机号!</font>");
// 	} else {
// 	}
// }

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

function saveUser(){
	$("#strLoginName").blur(function(){
		$.get(
			"checkUser.php",
			{
				"username":$("#strLoginName").val()	
			},
			function(data){
				if(data=="1"){
					$("#userspan").html("<font style='color:#A5C11B'>恭喜你，可以使用该用户名！</font>");						
				}else{
					$("#userspan").html("<font style='color:#F63B21'>用户名已存在,请更换用户名!</font>");
				}
			}				
		);
		
	});
	$("#submitbutton").click(function() {	
		$.post(
			"../../php/register.php",
			{
				"username":$("#strLoginName").val(),
				"password":$("#userpwd").val(),
				"phone":$("#strMobilePhone").val()
			},
			
			function(data){					
				location.href="../../html/login/login.html";
			}
		);
		// if(object.ret=="success"){
		// 	jBox.prompt('注册成功', '提示', 'info', { closed: function () 
        //         { if(object.callback == ""){
    	// 			redirect("../../index.html");
    	// 		}
    	// 		else{
    	// 			redirect(object.callback);
    	// 		}} });
			
		// }else{
		// 	$("#reg_token").val(object.token);
		// 	jBox.tip(object.info);
		// }
    });
}	


function checkMobilePhone(phone){
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


function refreshImage(img){
    var imageUrl = '/register/getddddValidImage.do';
    img.src = imageUrl + '?id=' + Math.random();
}

function checkReg(){
	return false;
}