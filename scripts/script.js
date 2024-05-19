$(document).ready(function(){
	$( "video" ).first().on( "click", function() {
		$( "#div1" ).first().fadeToggle( "slow", "swing" );
		$( "#div2" ).first().fadeToggle( "fast", "linear" );
	      $( "#vid" ).animate({left: '350px'});
	});
	 $("p.abs").hover(function(){
    		$(this).css("background-color", "#ffddf4");
	},
	 function(){
  		$(this).css("background-color", "");
	});
	 $("p.new").mouseleave(function(){
    		alert("You've reached the end of the page! Please come back!");
  	});
});

