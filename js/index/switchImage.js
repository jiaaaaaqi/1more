 var isok = true;
(function () {
    /**
    * 切换图片
    */	
    if (typeof switchImage == 'undefined') switchImage = {};
    switchImage = function () { }
    switchImage.prototype = {
        t: '',
        n: '0',
        number: 1, 					//初始显示第几张图片
        banner: 'banner', 			//外围容器id
        title_id: 'bannerbar', 		//标题按钮列表id
        body_id: 'body_list', 		//图片内容列表id
        current_class: 'barh', 		//标题按钮当前选中标题样式
        normal_class: '', 		//标题按钮普通状态标题样式
        init: function () {

            //初始化数据
            var supper = this, i = 0;
            supper.number--;
            supper.n = supper.number;
            $("#" + supper.title_id).css({ "z-index": "999" });
            $("#" + supper.body_id).children().eq(supper.number).fadeIn(2000).siblings().hide();
            $("#" + supper.title_id).children().eq(supper.number).removeClass(supper.normal_class).addClass(supper.current_class).siblings().removeClass(supper.current_class).addClass(supper.normal_class);

            $("#" + supper.title_id).children().each(function () {
                $(this).attr("num", i);
                $(this).unbind().bind('click', function () {
                    var num = $(this).attr("num");
                    supper.n = num;
                    $(this).removeClass(supper.normal_class).addClass(supper.current_class).siblings().removeClass(supper.current_class).addClass(supper.normal_class);
                    $("#" + supper.body_id).children().filter(":visible").fadeOut(0).parent().children().eq(num).fadeIn(0);
                });
                i++;
            });
						
		    $(".logo3").click(function () {
				
                 var num = $("#bannerbar").find("a[class='barh']").attr("num");
				 var num1= parseInt(num)+1;
				 var n = $("#title_list > a").length 
				
				 if(num>=n-1)
				 {
				    num1=0;	 
				 }
				 
				 $("#title_list a").removeClass();
				 $("#title_list a:eq("+num1+")").addClass(supper.current_class);
			     $("#" + supper.body_id).children().filter(":visible").fadeOut(0).parent().children().eq(num1).fadeIn(0);
                
            });
		   $(".logo4").click(function () {
				
                 var num = $("#bannerbar").find("a[class='barh']").attr("num");
				 var num1= parseInt(num)-1;
				 var n = $("#title_list > a").length 
				
				 if(num==0)
				 {
				    num1=n-1;	 
				 }
				 
				 $("#title_list a").removeClass();
				 $("#title_list a:eq("+num1+")").addClass(supper.current_class);
			     $("#" + supper.body_id).children().filter(":visible").fadeOut(0).parent().children().eq(num1).fadeIn(0);
                
            });
			 
            supper.t = setInterval(function () { supper.showAuto(); }, 7000);
            $("#" + supper.banner).hover(function () { clearInterval(supper.t); }, function () { supper.t = setInterval(function () { supper.showAuto() }, 6000); });


        },
        showAuto: function () {
            if (isok) {
                this.n = this.n >= ($("#" + this.title_id).children().length - 1) ? 0 : ++this.n;
                $("#" + this.title_id).children().eq(this.n).trigger('click');
            }
        },
        reboot: function () {
            this.number--;
            this.n = this.number;
            $("#" + this.body_id).children().eq(this.number).fadeIn(2000).siblings().hide();
            $("#" + this.title_id).children().eq(this.number).removeClass(this.normal_class).addClass(this.current_class).siblings().removeClass(this.current_class).addClass(this.normal_class);
        }
    };
	
})();