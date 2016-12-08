$("#activity-all").click(function(e){
	e.preventDefault()
	$(".item").show();
});

$("#activity-journal").click(function(){
	$(".item").hide();
	$(".item-journal").show();
});

$("#activity-event").click(function(){
	$(".item").hide();
	$(".item-event").show();
});

$("#activity-album").click(function(){
	$(".item").hide()
	$(".item-album").show();
});

$("#load-more").click(function(e){
	e.preventDefault();
	$(".item").show();
})

$(".btn-group button").click(function(){
	$(".btn-group button").removeClass('active');
	$(this).addClass('active');
});

$("#profile-tab").click(function(){
	$("#account").hide();
	$("#profile").show();
})

$("#account-tab").click(function(){
	$("#profile").hide();
	$("#account").show();
})

$("#nima_menu_trigger").click(function(e){
	e.preventDefault();
	$("#popover").toggle()
})

/* For JQuery Jump Links */
	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

$("#other").one('click', function(){
	var $textarea = $("<textarea></textarea>");
	$textarea.addClass('other-textarea');
	$textarea.prop('placeholder', 'Enter additional interests here, separated by commas');
	$("#interests_area").append($textarea);
});

$('#change-image').click(function(e){ 
	e.preventDefault(); 
	$('#upload').trigger('click'); 
});

 $(":file").change(function(){
    $("#change-pic").append("<p>"+$(":file").val()+"</p>")
  });

 $(".editors.btn-group").click(function(e){
 	e.preventDefault();
 	var id = e.target.id;
 	id = id.split("-")[2];
 	$(".form-group.editor").hide();
 	$(".form-group.editor."+id).show();

 })