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
	
	$(".modal-wide").on("show.bs.modal", function() {
  var height = $(window).height() - 200;
  $(this).find(".modal-body").css("max-height", height);
});
	
	
	$( "#tooltip" ).tooltip();
	
	});
