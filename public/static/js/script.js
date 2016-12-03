function initMap() {

	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 8,
	  // scrollwheel:false,
	  // zoomControl:false,
	  scaleControl:false,
	  streetViewControl:false,
	  mapTypeControl:false,
	  // draggable:false,
	  center: {lat:34.05, lng:-118.24}
	});

	$.get('/test/users.json', function(data){

		for(var i=0; i<data.length; i++)(function(i){
			var icon = data[i].profile.picture.thumbnail;
			var user = data[i].profile.firstname;

			

			var geocoder =  new google.maps.Geocoder();
    		geocoder.geocode( { 'address': data[i].profile.current_city}, function(results, status) {
	          if (status == google.maps.GeocoderStatus.OK) {
	            console.log("location : " + results[0].geometry.location.lat() + " " +results[0].geometry.location.lng()); 
	           
	            var city = {lat:results[0].geometry.location.lat(), lng:results[0].geometry.location.lng() };
				console.log(user, icon)
				var marker = new google.maps.Marker({
		            position: city,
		            icon: icon,
		            map: map,
		            content:"<div class='map-icon'></div>"
		        });

	          } else {
	            console.log("Something got wrong " + status);
	          }
	        });
		})(i);	
		
	});
}


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

$("#load-more").click(function(){
	
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