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

//去掉字符串头尾空格
function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}
//去除字符串右空格
function rtrim(s) {
    return s.replace(/(\s*$)/, "");
}
// 获得字符串实际长度
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
}


function checkCallback(data) {
	//成功
	if (data == '1') {
		$("#userspan").html("<font style='color:#A5C11B'>恭喜你，可以使用该用户名！</font>");
	}
	//重名
	else if (data == "0") {
		$("#userspan").html("<font style='color:#F63B21'>用户名已存在,请更换用户名!</font>");
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
	}else{
		$("#phonespan").html("<font style='color:#A5C11B'>恭喜你，可以使用该手机号！</font>");
	}
	
	if(!checkMobilePhone(rtrim(phone))){
		$("#phonespan").html("<font style='color:#F63B21'>请输入合法的手机号码</font>");
		$("#strMobilePhone").focus();
		return;
	}
	
	ajax('../php/checkPhone.php','post','','html',checkCallback2);
}
function checkCallback2(data) {
	//成功
	if (data == '1') {
		$("#phonespan").html("<font style='color:#A5C11B'>恭喜你，可以使用该手机号！</font>");
	}
	//重名
	else if (data == "0") {
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

function zhuche() {
    var str_phone = window.document.getElementById("strMobilePhone").value;

    var str_pass = window.document.getElementById("userpwd").value;
    var str_pass1 = window.document.getElementById("userrpwd").value;
    var yzcode = window.document.getElementById("strCode").value;
   
    if (rtrim(str_phone) == "") {
        jBox.tip("请输入您的手机!");
        $("#strMobilePhone").focus();
        return false;
    }
    if (!isCellPhoneNum(str_phone)) {
        jBox.tip("请填写正确的手机!");
        $("#strMobilePhone").focus();
        return false;
    }


    if (rtrim(str_pass) == "") {
        jBox.tip("请输入您的密码!");
        $("#userpwd").focus();
        return false;
    }
    
    if (str_pass.length < 6 || str_pass.length > 16) {
        jBox.tip("密码长度为6-16个字符，区分大小写!");
        $("#userrpwd").focus();
        return false;
    }


    if (rtrim(str_pass1) == "") {
        jBox.tip("请输入您的确认密码!");
        $("#userrpwd").focus();
        return false;
    }
    if (str_pass1 != str_pass) {
        jBox.tip("两次输入的密码不一致!");
        $("#userpwd").focus();
        return false;
    }

    if (rtrim(yzcode) == "") {
        jBox.tip("请输入验证码!");
        $("#strCode").focus();
        return false;
    }
    return true;
}

function saveUser(){
	$("#form1").ajaxSubmit(function(data) {
		var object = eval("("+data+")");
		if(object.ret=="success"){
			jBox.prompt('注册成功', '提示', 'info', { closed: function () 
                { if(object.callback == ""){
    				redirect("../index.php");
    			}
    			else{
    				redirect(object.callback);
    			}} });
			
		}else{
			$("#reg_token").val(object.token);
			jBox.tip(object.info);
		}
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


// function refreshImage(img){
//     var imageUrl = '/register/getddddValidImage.do';
//     img.src = imageUrl + '?id=' + Math.random();
// }

function checkReg(){
	return false;
}