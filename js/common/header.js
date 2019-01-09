$(document).ready(function () {
    var url = encodeURI(document.URL);
    var callback = getQueryString("callback");
    if(callback==null){
        callback = url;
    }
    if(callback == "../../html/login/login.html" || callback == "../../html/register/toRegister.html"){
        callback = "../../index.html";
    }
});



//获取参数
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

var timeout         = 0;
var closetimer		= 0;
var ddmenuitem      = 0;

function jsddm_open(){
    jsddm_canceltimer();
    jsddm_close();
    ddmenuitem = $(this).find('ul').eq(0).css('visibility', 'visible');
}

function jsddm_close(){
    if(ddmenuitem) ddmenuitem.css('visibility', 'hidden');
}

function jsddm_timer(){
    closetimer = window.setTimeout(jsddm_close, timeout);
}

function jsddm_canceltimer(){
    if(closetimer){
        window.clearTimeout(closetimer);
        closetimer = null;
    }
}

document.onclick = jsddm_close;