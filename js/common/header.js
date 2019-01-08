$(document).ready(function () {
    var url = encodeURI(document.URL);
    var callback = getQueryString("callback");
    if(callback==null){
        callback = url;
    }
    if(callback == "http://www.1more.com/login/index.html" || callback == "http://www.1more.com/register/toRegister.html"){
        callback = "http://www.1more.com/index.html";
    }

    $.get("/getlogin.html?callBack="+callback, {
        iddd: Math.random()
    },function(data) {

        if($(".xbtb1_2").length > 0){
            $(".xbtb1_2").remove();
        }

        $(".xbtb1_1").after(data);

        $(".top1_8").hover(function () {
            $(".top1_17").show();
        }, function () {
            $(".top1_17").hide();
        });
    });

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

function showuserbg(){
    $('#u').css("background","#f4f4f4");
}

function closeuserbg(){
    $('#u').css("background","");
}
document.onclick = jsddm_close;