$(function(){
	$(".small-box").mouseenter(function(){
		var smboxleft = $(this).offset().left;
		var smboxtop = $(this).offset().top;
		var smboxW = $(this).width();
		var smboxH = $(this).height();
		$("#midbox .tool").show();
		$(".bigbox").show();
		$(".small-box").mousemove(function(e){
			var mtop = $(window).scrollTop();
			var toolW = $("#midbox .tool").width();
			var toolH = $("#midbox .tool").height();
			var x = e.clientX - smboxleft - toolW/2;
			var y = e.clientY - smboxtop - toolH/2 + mtop;
			var toolx = Math.max(Math.min(x,smboxW-toolW),0);
			var tooly = Math.max(Math.min(y,smboxH-toolH),0);
			$("#midbox .tool").css({
				"left":toolx,
				"top":tooly
			})
			$(".bigbox img").css({
				"left":-3*toolx,
				"top":-3*tooly
			})
	        
		})
	
	});	
		
	$(".small-box").mouseleave(function(){
		$(".bigbox").hide();
	})
	
	
})
