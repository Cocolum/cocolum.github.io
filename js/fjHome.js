$(document).ready(function(){
	
	$(".bio").hide();
	
	$("#sobreMi").click(function(){
			$(".images").fadeOut("slow", function(){
				$(".bio").fadeIn("slow");		
				});							
			});
	
	$("#inicio").click(function(){
			$(".bio").fadeOut("slow", function(){
				$(".images").fadeIn("slow");		
				});							
			});
	
	
		
			});
	
	
});