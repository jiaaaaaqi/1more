$(function () {
 /**瀑布流***/
    $(".content_pro > .grid > .content_pro1").each(function (a, b) {
        $(b).children(".content_pro1_1").find("a").hover(function () {
            $(b).children(".content_pro1_fx").show();

        }, function () {
            $(b).children(".content_pro1_fx").hide();
        });
        $(b).children(".content_pro1_fx").mousemove(function () {
            $(this).show();
        });
    });

    //blocksit define
    $(window).load(function () {
        $('#container').BlocksIt({
            numOfCol: 3,
            offsetX: 8,
            offsetY: 8
        });
    });

    //window resize
    var currentWidth = 1263;
    $(window).resize(function () {
        var winWidth = $(window).width();
        var conWidth;
        if (winWidth < 842) {
            conWidth = 421;
            col = 1
        }
        else if (winWidth < 1263) {
            conWidth = 842;
            col = 2
        } else if (winWidth < 1684) {
            conWidth = 1263;
            col = 3
        } else if (winWidth < 2105) {
            conWidth = 1684;
            col = 4;
        }

        if (conWidth != currentWidth) {
            currentWidth = conWidth;
            $('#container').width(conWidth);
            $('#container').BlocksIt({
                numOfCol: col,
                offsetX: 8,
                offsetY: 8
            });
        }
    });
    /**瀑布流***/
});
	
	 
 
	