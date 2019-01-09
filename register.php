<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>万魔声学-注册</title>
<link href="css/index.css" rel="stylesheet" type="text/css" />
<link href="css/login.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="js/lib/jquery-1.8.1.min.js"></script>
<script type="text/javascript" src="js/lib/Validform_v5.1_min.js"></script>
<script type="text/javascript" src="js/lib/jquery.form.js"></script>
<script type="text/javascript" src="js/common/header.js"></script>
<script type="text/javascript" src="js/index/top.js"></script>
<script type="text/javascript" src="js/lib/ajax.js"></script>
<!-- <script type="text/javascript" src="js/reg.js"></script> -->
<script type="text/javascript" src="js/tools/jbox.js"></script>
</head>
<style>
.loginBtn {
  width:367px; height:55px; background:#F63B21;
  text-align:center; line-height:55px;
  font-size:18px; color:#fff; outline:none;border:none;
  cursor:pointer;font-family:'Microsoft Yahei';
 }
</style>
<body>
	<?php
        include "html/header.html"
    ?>
	<section>
		<div class="content_register1">
			<form id="form1" class="registerform">
				<div class="content_register2">
				<input id="strLoginName" name="strLoginName" maxlength="12" type="text" placeholder="用户名" onkeyup="checkUserName(this)" />
					<span id="userspan">用户名至少6个字符,最多12个字符</span>
				</div>
				
				<div class="content_register2">
					<input id="strMobilePhone" maxlength="11" name="strMobilePhone" type="text" placeholder="手机号码" onkeyup="checkPhone(this)"/>
					<span id="phonespan">手机号长度为11个字符</span>
				</div>
				<div class="content_register2">
					<input id="userpwd" name="userpwd" type="password" maxlength="16" minlength="6" placeholder="密码" onkeyup="ckPwd1(this)"/>
					<span id="passwordspan"> 长度为6-16个字符，区分大小写</span>
				</div>
				<div class="content_register2">
					<input id="userrpwd" name="userrpwd" type="password" maxlength="16" minlength="6" placeholder="确认密码" onkeyup="ckPwd2(this)"/>
					<span id="passwordspan2"> 长度为6-16个字符，区分大小写</span>
				</div>
				<div class="content_register2">	           	
				<input name="strCode" id="strCode" type="text"  maxlength="6"  style="width:68%" placeholder="验证码"/>      
				<!-- <a href="#" class="exchange" onclick="refreshImage(document.getElementById('validateimg'));return false;"> -->
					<!-- <img height="26" width="66" id="validateimg" onclick="refreshImage(this);return false;" src="" title="看不清楚?请点击刷新验证码" /> -->
				</a><br/>  
				<span id="codespan"><!--  请输入您的验证码 --></span>
				</div>
				<div class="content_register4">
				<input name="" type="button" value="注&nbsp;册" class="loginBtn" id="submitbutton"/>
				</div>
				<span id="checkButton"></span>
				<input type="hidden" id="callback" name="callback" value="" />
				<input type="hidden" id="isLogin" name="isLogin" value="" />
				<input type="hidden" id="uuid" name = "uuid" value="" />
				<input type="hidden" id="reg_token" name = "reg_token" value="" />
				<div class="content_register23">
					点击“注册”，即表示您同意并愿意遵守1MORE <a href="userAgreement.html" target="_blank">用户协议</a><!-- 和 <a href="/register/privacyPolicy.html" target="_blank">隐私政策</a>-->
				</div>
			</form>		
			<div class="content_register5">
				<div class="content_register5_1">
				<a href="../../html/login/login.html">立即登录</a>
				</div>
				<div class="content_register5_2">
					已有1More帐号？
				</div>
			</div>
		</div>  
  	</section>
	<?php
		include "html/footer.html"
	?>
</body>
</html>
<script>
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
//验证是否为手机号
function checkMobilePhone(phone){
	var dl = /(^[1][0-9]\d{9}$)/;
	var tw = /(^[9]\d{9}$)/
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


//验证用户名
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
		checkuser(name);
}
function checkuser(name){
	let xhr = new XMLHttpRequest();		
	//2、设置请求参数
	xhr.open('get','php/checkUser.php?username='+name,true);
	//3、设置回调函数
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			//console.log(xhr.resopnseText);
				if(xhr.responseText=='1'){
					$("#userspan").html("<font style='color:#A5C11B'>恭喜你，可以使用该用户名！</font>");
				}else{
					$("#userspan").html("<font style='color:#F63B21'>用户名已存在,请更换用户名!</font>");
				}
			}
		}
	xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
	//4、发送
	xhr.send();
}


//验证手机号
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
	checkPhoneNumber(phone);
}
function checkPhoneNumber(phone){
	let xhr = new XMLHttpRequest();		
	//2、设置请求参数
	xhr.open('get','php/checkPhone.php?phone='+phone,true);
	//3、设置回调函数
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			console.log(xhr.resopnseText);
				if(xhr.responseText=='1'){
					$("#phonespan").html("<font style='color:#A5C11B'>恭喜你，可以使用该手机号！</font>");
				}else{
					$("#phonespan").html("<font style='color:#F63B21'>手机号已存在,请更换手机号!</font>");
				}
			}
		}
	xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
	//4、发送
	xhr.send();
}


//验证密码
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
//验证确认密码
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

$(function(){
		$("#submitbutton").click(function(){
			$.post(
				"php/saveuser.php",
				{
					"username":$("#strLoginName").val(),
					"password":$("#userpwd").val(),
					"phone":$("#strMobilePhone").val()
				},
				function(data){					
					location.href="login.php";
				}
			);
		});
	});
</script>