$(document).ready(function(){

    $("p.readmore").click(function(){
        $("#show-this-on-click").slideDown(300);
        $("p.readless").slideDown(300);
    });

    $("p.readmore").click(function(){
        $(".readmore").hide();
    });

    $("p.readless").click(function(){
    	$("#show-this-on-click").slideUp(300);
    	$("p.readless").slideUp(300);
    });

    $("p.readless").click(function(){
    	$("p.readmore").show();
    });


      $("a.learnmore").click(function(){
        $(".learnmore").hide();
 
    });

    $("span, p").click(function(){
        $("#learnmoretext").show();
    });

    $( "button" ).click(function( event ) {
      event.preventDefault();
    });
});

console.log('BUILD FEAR 16')