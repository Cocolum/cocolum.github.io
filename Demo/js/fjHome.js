$(document).ready(function(){
	
	$("#wrap").hide();
	$('footer').hide();
	$("#logoIntro").fadeOut(3000, function () {
		$("#wrap").show();
		$('footer').show();
     });
	
	
	$(".modal-wide").on("show.bs.modal", function() {
  var height = $(window).height() - 200;
  $(this).find(".modal-body").css("max-height", height);
});
	
	
	$( "#tooltip" ).tooltip();
	
	});
