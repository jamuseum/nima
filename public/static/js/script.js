


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