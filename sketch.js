$(document).ready(function() {
	$(".page").hide();
	$("#page-0").show();
	//page-0
	$("#page-0").click(function(){
		$("#page-0 .text").show();
		$("#page-0 .name").show();
		$("#BgSound")[0].load();
		$("#BgSound")[0].play();
		$("#page-0 .text").typed({
			strings: ["The Little prince"],
			typeSpeed: 80,
			callback: function(){
				$("#page-0 .name").typed({
					strings: ["0947704_강동길, 1240197_이미솔"],
					typeSpeed: 80,
					callback: function(){
						$("#page-0").fadeOut(3000);
						$("#page-1").fadeIn(3000);
					}
				});
			}
		});
	
	
	});