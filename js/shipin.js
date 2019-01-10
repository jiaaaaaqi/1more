/**视频页效果***/
$(function () {
    $(".news4 > ul > li").each(function (a, b) {
        $(b).children(".news4_1s").find("a").hover(function () {
            $(b).children(".news4_1").find("a").find("img").attr("src", "/images/sds1.png"); 
        }, function () {
            $(b).children(".news4_1").find("a").find("img").attr("src", "/images/sds.png");
        });
        $(b).children(".news4_1").find("a").mousemove(function () {
            $(b).children(".news4_1").find("img").attr("src", "/images/sds1.png");
        });
    });
});
/**视频页效果***/



/**显示视频***/
function Show(a) {
    if (a == "1") {
        $.jBox.open("iframe:http://player.youku.com/embed/XOTIxNjI5NzIw", "视频播放", 520, 515, { buttons: {} });
    }
    else if (a == "2") {
        $.jBox.open("iframe:http://player.youku.com/embed/XODg0MTM2MjA4", "视频播放", 520, 515, { buttons: {} });
    }
    else if (a == "3") {
        $.jBox.open("iframe:http://player.youku.com/embed/XODgxMzY1MzY4", "视频播放", 520, 515, { buttons: {} });
    }
    else if (a == "4") {
        $.jBox.open("iframe:http://player.youku.com/embed/XODgxMzYwMzYw", "视频播放", 520, 515, { buttons: {} });
    }
    else if (a == "5") {
        $.jBox.open("iframe:http://player.youku.com/embed/XODcyNTAyNzg0", "视频播放", 520, 515, { buttons: {} });
    }
    else if (a == "6") {
        $.jBox.open("iframe:http://player.youku.com/embed/XODY4MzA0NTQ4", "视频播放", 520, 515, { buttons: {} });
    }
    else if (a == "7") {
        $.jBox.open("iframe:http://player.youku.com/embed/XODY1NTY3Mjk2", "视频播放", 520, 515, { buttons: {} });
    }
    else if (a == "8") {
        $.jBox.open("iframe:http://player.youku.com/embed/XODY1NTY2MjQ4", "视频播放", 520, 515, { buttons: {} });
    }
}
/**显示视频***/