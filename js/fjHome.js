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
	
	$("#falda1").click(function(){
		  
		if( $("#falda1").hasClass('selected') )
		{
			$(".falda1A").remove()
			$("#falda1").removeClass('selected');
		
		}
		else
			{
			$("#falda1").addClass('selected');
		    $("#falda1").after('<div class="falda1A" ><a> <img class="img img-responsive" src="images/falda1A.png"></a> </div>');	
			$("#falda1").after('<div class="falda1A"><a> <img class="img img-responsive" src="images/falda1C.png"></a> </div>');
				$("#falda1").after('<div class="falda1A"><a> <img class="img img-responsive" src="images/falda1D.png"></a> </div>');
			$(".falda1A").addClass("col-md-3 col-xs-6");
		}
		
			});
	
});