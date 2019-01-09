<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>万魔声学-注册</title>
<link href="css/index.css" rel="stylesheet" type="text/css" />
<link href="css/login.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="js/lib/jquery-1.8.1.min.js"></script>
<script type="text/javascript" src="js/lib/Validform_v5.1_min.js?v=20181231"></script>
<script type="text/javascript" src="js/lib/jquery.form.js"></script>
<script type="text/javascript" src="js/common/header.js"></script>
<script type="text/javascript" src="js/index/top.js"></script>
<script type="text/javascript" src="js/reg.js"></script>
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
			<form id="form1" class="registerform" >
				<div class="content_register2">
				<input id="strLoginName" name="strLoginName" maxlength="12" type="text" placeholder="用户名" onkeyup="checkUserName(this)" /> <!--  onkeyup="checkUserName(this)" -->
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
				<input name="" type="button" value="注&nbsp;册" class="loginBtn" id="submitbutton"  onclick="saveUser()"/>
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
$(function(){
	$("#submitbutton").click(function(){
		$.post(
			"saveuser.php",
			{
				"username":$(".strLoginName").val(),
				"password":$(".userpwd").val(),
				"phone":$(".strMobilePhone").val()
			},
			function(data){					
				
			}
		);
	});
});
</script>