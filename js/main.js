
jQuery(document).ready(function($){
	var secondaryNav = $('.header'),
	fix = $('.header-fix'),
	secondaryNavTopPosition = secondaryNav.offset().top;
 
	$(window).on('scroll', function(){
		
		if($(window).scrollTop() > secondaryNavTopPosition ) {
			secondaryNav.addClass('is-fixed');
			fix.addClass('fix');	
			// setTimeout(function() {
			// 	secondaryNav.addClass('animate-children');
			// 	$('#cd-logo').addClass('slide-in');
			// 	$('.cd-btn').addClass('slide-in');
			// }, 50);
		} else {
			secondaryNav.removeClass('is-fixed');
			fix.removeClass('fix');
			// setTimeout(function() {
			// 	secondaryNav.removeClass('animate-children');
			// 	$('#cd-logo').removeClass('slide-in');
			// 	$('.cd-btn').removeClass('slide-in');
			// }, 50);
		}
	});
});
function initMap() {
    var uluru = {lat: 50.409507, lng: 30.604092};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: uluru,
      styles:[
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ebe3cd"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#523735"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f1e6"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#c9b2a6"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#dcd2be"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#ae9e90"
            }
          ]
        },
        {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#93817c"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#a5b076"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#447530"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f1e6"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#fdfcf8"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f8c967"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#e9bc62"
            }
          ]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e98d58"
            }
          ]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#db8555"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#806b63"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#8f7d77"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#ebe3cd"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#b9d3c2"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#92998d"
            }
          ]
        }
      ]
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
}

// Ok, the CSS is complete. Now we need to hide the input and make it appear on clicking the icon.
// Now, we have a small problem. Click
//ing on search butotn doesnt perform any search and the input element hides. To make search button work, we'll use a flag

// Perfect! This thing is cross browser compatible and works even in IE8! You can use the same technique to create some other cool effects like on http://www.apple.com/ and http://developer.android.com/index.html

$(".icon").click(function() {
	var icon = $(this),
			input = icon.parent().find("#search"),
			submit = icon.parent().find(".submit"),
			is_submit_clicked = false;
	
	// Animate the input field
	input.animate({
		"width": "165px",
		"padding": "10px",
		"opacity": 1
	}, 300, function() {
		input.focus();
	});
	
	submit.mousedown(function() {
		is_submit_clicked = true;
	});
	
	// Now, we need to hide the icon too
	icon.fadeOut(300);
	
	// Looks great, but what about hiding the input when it loses focus and doesnt contain any value? Lets do that too
	input.blur(function() {
		if(!input.val() && !is_submit_clicked) {
			input.animate({
				"width": "0",
				"padding": "0",
				"opacity": 0
			}, 200);
			
			// Get the icon back
			icon.fadeIn(200);
		};
	});
});
