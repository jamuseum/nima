function initMap() {
	var city = {lat: 34.05, lng: -118.24};
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 8,
	  scrollwheel:false,
	  zoomControl:false,
	  scaleControl:false,
	  streetViewControl:false,
	  mapTypeControl:false,
	  draggable:false,
	  center: city
	});
	var marker = new google.maps.Marker({
	  position: city,
	  map: map
	});
}

$("#activity-all, #load-more").click(function(e){
	e.preventDefault()
	$("#events tr").show();
	$("#load-more").hide()
});

$("#activity-journal").click(function(){
	$("#events tr").not('.spacer.first').hide();
	$(".item-journal").show();
});

$("#activity-event").click(function(){
	$("#events tr").not('.spacer.first').hide();
	$(".item-event").show();
});

$("#activity-album").click(function(){
	$("#events tr").not('.spacer.first').hide();
	$(".item-album").show();
});

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