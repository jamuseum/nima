function initMap() {
	var city = {lat: 34.05, lng: -118.24};
	var city2 = {lat: 33.95, lng: -117.396};
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
            icon: 'http://localhost:1337/media/cache/susan-tiny.jpg',
            map: map
          });

	 var marker = new google.maps.Marker({
            position: city2,
            icon: 'http://localhost:1337/media/cache/edward.jpg',
            map: map
          });
}

$(function(){
	$.get('/test/users.json', function(data){
		console.log(data[0].profile.picture.regular);
	})
})


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