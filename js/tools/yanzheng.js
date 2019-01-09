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

//用户名的验证
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
	//doAjax();
}


//手机号码的验证
function isCellPhoneNum(phone){
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

function rtrim(s) {
    return s.replace(/(\s*$)/, "");
}

function isEmail(obj) {
    if (obj.indexOf("@") > -1) return true;
    else return false;
}


function zhuche() {
    var str_phone = window.document.getElementById("strMobilePhone").value;
    var str_pass = window.document.getElementById("userpwd").value;
    var str_pass1 = window.document.getElementById("userrpwd").value;

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

    return true;
}