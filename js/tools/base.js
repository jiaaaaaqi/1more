//图片服务
var imgServer = "https://img1.1more.com";
var siteUrl = "http://www.1more.com";

//登录地址
var loginUrl = "/login/index.html";

var homeUrl = "http://www.1more.com";

//js 获取URL参数
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

function isnull(str){
    if(str == null){
        return false;
    }else{
        if(trim(str) == ''){
            return false;
        }else{
            return true;
        }
    }
}

//刷新页面
function redirect(url){
    url=encodeURI(url);
    location.href=url;
}

function getCurrentURL(){
    return window.location;
}


//jquery  ajax 封装
function doAjax(url,data,callBack){
    $.ajax({
        type:"POST",
        url: url,
        data: data+"&iddd="+Math.random(),
        dataType: "html",
        success: function(data){
            callBack(data);
        }
    });
}


function doJsonAjax(url,data,callBack){
    $.ajax({
        type:"POST",
        url: url,
        data: data+"&iddd="+Math.random(),
        dataType: "json",
        success: function(data){
            callBack(data);
        },
        error: function (data){

        }
    });
}

//验证表单提示
function showmsg(msg){
    alert(msg);
};


function closeDialog(id){
    hideOverlay();
    $("#"+id).hide();
}

function showDialog(obj){
    showOverlay();

    $(obj).show();

    $(window).scroll(function(){
        center(obj);
    });
    $(window).resize(function(){
        center(obj);
    });
    center(obj);
    center(obj);
}

function center(obj){
    var windowWidth = document.documentElement.clientWidth;
    var windowHeight = document.documentElement.clientHeight;
    var popupHeight = $(obj).height();
    var popupWidth = $(obj).width();
    $(obj).css({
        "position": "absolute",
        "top": (windowHeight-popupHeight)/2+$(document).scrollTop(),
        "left": (windowWidth-popupWidth)/2
    });
}

/* 显示遮罩�?*/
function showOverlay() {
    $("#overlay").height(pageHeight());
    $("#overlay").width(pageWidth());

    $("#overlay").fadeTo(200, 0.5);
}

/* 隐藏覆盖�?*/
function hideOverlay() {
    $("#overlay").fadeOut(200);
}

/* 当前页面高度 */
function pageHeight() {
    return document.body.scrollHeight;
}

/* 当前页面宽度 */
function pageWidth() {
    return document.body.scrollWidth;
}

function rtrim(s) {
    return s.replace(/(\s*$)/, "");
}

var jmz = {};
jmz.GetLength = function(str) {
    ///<summary>获得字符串实际长度，中文2，英�?</summary>
    ///<param name="str">要获得长度的字符�?/param>
    var realLength = 0, len = str.length, charCode = -1;
    for (var i = 0; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128) realLength += 1;
        else realLength += 2;
    }
    return realLength;
};

/*
 *
 * 限制货币输入
 * 用法
 * <input onkeyup='checkDecimal(this)'>
 */
var record={
    num:""
};
var checkDecimal=function(n){
    var decimalReg=/^\d{0,8}\.{0,1}(\d{1,2})?$/;
    if(n.value!=""&&decimalReg.test(n.value)){
        record.num=n.value;
    }else{
        if(n.value!=""){
            n.value= record.num;
        }
    }
};

//格式化时间字符，�?
function formatSecond(s){
    s = s.toString();
    if(s.length == 1){
        s = "0" + s.toString();
    }
    return s;
}

//定义乘法（订单的数量变化，价格变化）
formatCurrency= function (floatvar){
    var f_x = parseFloat(floatvar);
    if (isNaN(f_x))	{
        return false;
    }
    var f_x = Math.round(f_x*100)/100;
    var s_x = f_x.toString();
    var pos_decimal = s_x.indexOf('.');
    if (pos_decimal < 0){
        pos_decimal = s_x.length;
        s_x += '.';
    }
    while (s_x.length <= pos_decimal + 2){
        s_x += '0';
    }
    return s_x;
}



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
//	}else if(length == 10){//台湾手机号码
//		if(!tw.exec(strMobilePhone)){
//			return false;
//		}
    }else{
        return false;
    }
    return true;
}

//验证正则
var REG_MOBILE = /^1\d{10}$/;
var REG_URL =  /(http[s]?|ftp):\/\/[^\/\.]+?\..+\w$/i;
var REG_EMAIL = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;

function reg_test(str,re){
    if(re.test(str)){
        return true;
    }else{
        return false;
    }
}

var Wi = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1 ];    // 加权因子
var ValideCode = [ 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 ];            // 身份证验证位值.10代表X
function IdCardValidate(idCard) {
    idCard = trim(idCard.replace(/ /g, ""));               //去掉字符串头尾空格
    if (idCard.length == 15) {
        return isValidityBrithBy15IdCard(idCard);       //进行15位身份证的验证
    } else if (idCard.length == 18) {
        var a_idCard = idCard.split("");                // 得到身份证数组
        if(isValidityBrithBy18IdCard(idCard)&&isTrueValidateCodeBy18IdCard(a_idCard)){   //进行18位身份证的基本验证和第18位的验证
            return true;
        }else {
            return false;
        }
    } else {
        return false;
    }
}
/**
 * 判断身份证号码为18位时最后的验证位是否正确
 * @param a_idCard 身份证号码数组
 * @return
 */
function isTrueValidateCodeBy18IdCard(a_idCard) {
    var sum = 0;                             // 声明加权求和变量
    if (a_idCard[17].toLowerCase() == 'x') {
        a_idCard[17] = 10;                    // 将最后位为x的验证码替换为10方便后续操作
    }
    for ( var i = 0; i < 17; i++) {
        sum += Wi[i] * a_idCard[i];            // 加权求和
    }
    valCodePosition = sum % 11;                // 得到验证码所位置
    if (a_idCard[17] == ValideCode[valCodePosition]) {
        return true;
    } else {
        return false;
    }
}
/**
 * 验证18位数身份证号码中的生日是否是有效生日
 * @param idCard 18位书身份证字符串
 * @return
 */
function isValidityBrithBy18IdCard(idCard18){
    var year =  idCard18.substring(6,10);
    var month = idCard18.substring(10,12);
    var day = idCard18.substring(12,14);
    var temp_date = new Date(year,parseFloat(month)-1,parseFloat(day));
    // 这里用getFullYear()获取年份，避免千年虫问题
    if(temp_date.getFullYear()!=parseFloat(year)
        ||temp_date.getMonth()!=parseFloat(month)-1
        ||temp_date.getDate()!=parseFloat(day)){
        return false;
    }else{
        return true;
    }
}
/**
 * 验证15位数身份证号码中的生日是否是有效生日
 * @param idCard15 15位书身份证字符串
 * @return
 */
function isValidityBrithBy15IdCard(idCard15){
    var year =  idCard15.substring(6,8);
    var month = idCard15.substring(8,10);
    var day = idCard15.substring(10,12);
    var temp_date = new Date(year,parseFloat(month)-1,parseFloat(day));
    // 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法
    if(temp_date.getYear()!=parseFloat(year)
        ||temp_date.getMonth()!=parseFloat(month)-1
        ||temp_date.getDate()!=parseFloat(day)){
        return false;
    }else{
        return true;
    }
}
//去掉字符串头尾空格
function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

//验证营业执照号
function isValidBusCode(busCode){
    var ret=false;
    if(busCode.length==15){
        var sum=0;
        var s=[];
        var p=[];
        var a=[];
        var m=10;
        p[0]=m;
        for(var i=0;i<busCode.length;i++){
            a[i]=parseInt(busCode.substring(i,i+1),m);
            s[i]=(p[i]%(m+1))+a[i];
            if(0==s[i]%m){
                p[i+1]=10*2;
            }else{
                p[i+1]=(s[i]%m)*2;
            }
        }
        if(1==(s[14]%m)){
            ret=true;
        }else{
            ret=false;
        }
    }else if(""==busCode){
        ret=false;
    }else{
        ret=false;
    }
    return ret;
}
function isEngOrChinese(value){
    //return /^[\u0391-\uFFE5]+$/i.test(value) | /^\w+[\w\s]+\w+$/i.test(value);
    var REG1 = /^[\u0391-\uFFE5]+$/i;
    var REG2 = /^\w+[\w\s]+\w+$/i;
    if(REG1.test(value)){
        return true;
    }
    if(REG2.test(value)){
        return true;
    }
    return false;
}


function isNum(value){
    return /^[0-9]*$/.test(value);
}