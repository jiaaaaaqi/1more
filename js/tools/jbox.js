//用jbox打开页面
//url:网页地址
//jbox_id:jbox窗口ID
//title:标题
//width:宽度
//height:高度
function jbox_open(url, jbox_id, title, width, height) {
    var max_width = $(window).width() - 100;
    var max_height = $(window).height() - 0.2 * $(window).height();
    if (width > max_width) {
        width = max_width;
    }
    if (height > max_height) {
        height = max_height;
    }
    $.jBox("iframe:" + url, {
        id: jbox_id,
        title: title,
        width: width,
        height: height,
        buttons: null
    });
}

//关闭jbox打开的页面
function close_jbox() {
    location.replace(location);
}

//打开上传窗口
//dir:位置
//type:文件类型
//width:宽度
//height:高度
//obj:获取上传后文件名的控件
//old:待修改的文件名
function toUpFile(dir, type, width, height, obj) {
    var url = "../UpFile/Default.aspx?d=" + dir + "&t=" + type;
    var message = "图片";

    if (width > 0) { url += "&w=" + width; }
    if (height > 0) { url += "&h=" + height; }
    if ($("#" + obj).val().length > 0) { url += "&f=" + encodeURI($("#" + obj).val()); }
    switch (type) {
        case 2:
            message = "文件";
            break;
        default: //图片
            break;
    }
    $.jBox("iframe:" + url, {
        id: "UpFile",
        title: "上传" + message,
        width: 483,
        height: 166,
        buttons: { "关闭上传窗口": true },
        showClose: false,
        submit: function(v, h, f) {
            var fileName = $("#" + $.jBox.getIframe("UpFile").id).contents().find("#hidFile").val();
            $("#" + obj).val(fileName);
            $.jBox.close("UpFile");
        }
    });
}

//上传图片预览(父窗口打开)
function openPreview(dir, obj) {
    if ($("#" + obj).val().length <= 0) {//没有上传文件
        $.jBox.tip("请上传后再预览");
        return;
    }
    var url = "../Uploadfile/" + dir + $("#" + obj).val();
    loadImage(url, function() {
        if (typeof (this.src) == "undefined") {
            $.jBox.tip("图片地址错误或已被删除！");
            return;
        }
        var width = "auto";
        var height = "auto";
        var max_width = $(parent.window).width() - 100;
        var max_height = $(parent.window).height() - 0.2 * $(parent.window).height();
        var html = "<div style='padding:10px;'><img src='" + this.src + "' style=\"max-width:" + max_width + "px; max-height:" + max_height + "px;\" /></div>";
        parent.$.jBox(html, { title: "图片预览", width: width, height: height, persistent: false, buttons: null });
    });
}

//二级窗口上传图片预览(父窗口打开)
function parent_openPreview(dir, obj) {
    if ($("#" + obj).val().length <= 0) {//没有上传文件
        $.jBox.tip("请上传后再预览");
        return;
    }
    var url = "../Uploadfile/" + dir + $("#" + obj).val();
    loadImage(url, function() {
        if (typeof (this.src) == "undefined") {
            $.jBox.tip("图片地址错误或已被删除！");
            return;
        }
        var width = "auto";
        var height = "auto";
        var max_width = $(parent.parent.window).width() - 100;
        var max_height = $(parent.parent.window).height() - 0.2 * $(parent.parent.window).height();
        var html = "<div style='padding:10px;'><img src='" + this.src + "' style=\"max-width:" + max_width + "px; max-height:" + max_height + "px;\" /></div>";
        parent.parent.$.jBox(html, { title: "图片预览", width: width, height: height, persistent: false, buttons: null });
    });
}

function openPreview(obj) {

    if (obj.length <= 0) {//没有上传文件
        $.jBox.tip("请上传后再预览");
        return;
    }
    var url = "../../" + obj;

    loadImage(url, function() {
        if (typeof (this.src) == "undefined") {
            $.jBox.tip("图片地址错误或已被删除！");

            return;
        }
        var width = "auto";
        var height = "auto";
        var max_width = $(window).width() - 100;
        var max_height = $(window).height() - 0.2 * $(window).height();
        var html = "<div style='padding:10px;'><img src='" + url + "' style=\"max-width:" + max_width + "px; max-height:" + max_height + "px;\" /></div>";
        $.jBox(html, { title: "图片预览", width: width, height: height, persistent: false, buttons: null });
    });
}
//图片预加载
function loadImage(url, callback) {
    var img = new Image(); //创建一个Image对象，实现图片的预下载
    img.src = url;
    if (img.complete) { // 如果图片已经存在于浏览器缓存，直接调用回调函数
        callback.call(img);
        return; // 直接返回，不用再处理onload事件
    }
    img.onload = function() { //图片下载完毕时异步调用callback函数。
        callback.call(img); //将回调函数的this替换为Image对象
    };
    img.onerror = function() { //图片不存在
        img = null;            //通过typeof (this.src) == "undefined"判断图片是否存在
        callback.call(img);
    };
}