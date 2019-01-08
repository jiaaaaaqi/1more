
//手机号码的验证
function isCellPhoneNum(phone){
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

function makeCallThis(phone) {
    var flag = false;
    var reg0 = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/;   //判断 固话
    if (reg0.test(phone)) flag = true;
    return flag;
}

function rtrim(s) {
    return s.replace(/(\s*$)/, "");
}

function isEmail(obj) {
    if (obj.indexOf("@") > -1) return true;
    else return false;
}



function updatePass() {

    var str_pass = window.document.getElementById("txtps").value;
    var str_passnew = window.document.getElementById("txtpsnew").value;
    var str_passnew1 = window.document.getElementById("txtpsnew1").value;

    if (rtrim(str_pass) == "") {
        jBox.tip("请输入原密码!");
        $("#txtps").focus();
        return;
    }

    if (rtrim(str_passnew) == "") {
        jBox.tip("请输入新密码!");
        $("#txtpsnew").focus();
        return;
    }
    if (str_passnew.length < 8 || str_passnew.length > 16) {
        jBox.tip("密码长度为8-16个字符，区分大小写!");
        $("#txtpsnew").focus();
        return;
    }


    if (rtrim(str_passnew1) == "") {
        jBox.tip("请输入确认密码!");
        $("#txtpsnew1").focus();
        return;
    }
    if (str_passnew1 != str_passnew) {
        jBox.tip("两次输入的密码不一致!");
        $("#txtpsnew").focus();
        return;
    }

}




function zhuche() {
    var str_phone = window.document.getElementById("strMobilePhone").value;
    var str_code = window.document.getElementById("strMPValidCode").value;
    var str_pass = window.document.getElementById("userpwd").value;
    var str_pass1 = window.document.getElementById("userrpwd").value;
    var yzcode = window.document.getElementById("strCode").value;

    // var strLoginName = window.document.getElementById("strLoginName").value;
    // if (rtrim(strLoginName) == "") {
    //  jBox.tip("请输入您的用户名!");
    //  $("#strLoginName").focus();
    //  return false;
    // }
    //  var len = jmz.GetLength(rtrim(strLoginName));
    // if(len < 6 || len > 12){
    //	jBox.tip("用户名至少6个字符,最多12个字符!");
    //   $("#strLoginName").focus();
    //   return false;
    //  }


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
    if (rtrim(str_code) == "") {
        jBox.tip("请输入验证码!");
        $("#strMPValidCode").focus();
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


function wjpass() {

    var str_passnew = window.document.getElementById("txtnewpass").value;
    var str_passnew1 = window.document.getElementById("txtnewpass1").value;


    if (rtrim(str_passnew) == "") {
        jBox.tip("请输入新密码!");
        $("#txtnewpass").focus();
        return false;
    }
    if (str_passnew.length < 8 || str_passnew.length > 16) {
        jBox.tip("密码长度为6-16个字符，区分大小写!");
        $("#txtnewpass").focus();
        return false;
    }


    if (rtrim(str_passnew1) == "") {
        jBox.tip("请输入确认密码!");
        $("#txtnewpass1").focus();
        return false;
    }
    if (str_passnew != str_passnew1) {
        jBox.tip("两次输入的密码不一致!");
        $("#txtnewpass").focus();
        return false;
    }

}