
	$(function(){
		$("#submitbutton").click(function(){
			//1、
			$.post(
				"register.php",
				{
					"userId":$(".userId").val(),
					"userPass":$(".userPass").val(),
					"phoneNum":$(".phoneNum").val()
				},
				function(data){					
					
				}
			);
		});
	});


// function sencondDown(){
//     var time = $("#sencond").text();
//     $("#sencond").text(time - 1);
//     if (time == 1) {
//         clearTimeout(sencondDown);
//         $("#yzcode").html("<a href='javascript:void(0);' onclick='sendValidCode();'>点击获取验证码</a>");
//         $("#yzcode").show();
//         $("#sencondDown").hide();
//     } else {
//         setTimeout(sencondDown, 1000);
//     }
// }
