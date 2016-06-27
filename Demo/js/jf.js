$(document).ready(function(){
	
	var aInit = "<a id='a1' href='#' data-toggle='modal' data-target='#myModal'> ";
	var aInside ="<img class ='img-responsive'  src='http://www.sospersonalshopper.com/wp-content/uploads/2015/07/noticias_moda_portada.jpg' alt=''>";
	
	var divInit ="<div id='myModal' class='modal fade' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'>";
	var divInitSecondary =" <div id='div1-1' class='modal-dialog'>";
	var divInitThird ="  <div id='div2-1'class='modal-content'>";
	var divInitFour ="<div id='div3-1' class='modal-body'>";
	var divImage ="<img src='http://www.sospersonalshopper.com/wp-content/uploads/2015/07/noticias_moda_portada.jpg' class='img-responsive'>";
	
	
	$.getJSON( "data.json", function( data ) {
  	var items = [];
  	$.each( data.Images, function( i, image ) {
	//		alert(image.image);
		});
		
	});
 

	$("#cell1").append(aInit);
	$("#a1").append(aInside);
	 
	$("#cell1").append(divInit);
	$("#myModal").append(divInitSecondary );
	$("#div1-1").append(divInitThird);
	$("#div2-1").append(divInitFour);	
	$("#div3-1").append(divImage);
	
  function centerModal() {
            $(this).css('display', 'block');
            var $dialog = $(this).find(".modal-dialog");
            var offset = ($(window).height() - $dialog.height()) / 2;
            // Center modal vertically in window
            $dialog.css("margin-top", offset);
        }

        $('.modal').on('show.bs.modal', centerModal);
        $(window).on("resize", function () {
            $('.modal:visible').each(centerModal);
        });
  
	
	}); 