;(function($){
	$(function(){
			$(document).foundation();
			var $prev = $('.ba-slider .slick-prev'),
				$next = $('.ba-slider .slick-next');
			$('.ba-slider').slick({
				slide:('.ba-slide'),
				prevArrow: $prev,
				nextArrow: $next
			});
			$('.ba-slider-thumb').on('click', function(e){
				e.preventDefault();
				var $index = $(this).data('slide');
				$('.ba-slider').slick('slickGoTo', $index-1);
			});
			var $grid = $('.grid').isotope({
			itemSelector: '.element__item',
			layoutMode: 'fitRows',
				fitRows:{
					gutter: 20
				}
		});
		// bind filter button click
		$('.filters-button-group').on( 'click', 'button', function() {
			var filterValue = $( this ).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});
		// change is-checked class on buttons
		$('.ba-filters').each( function( i, buttonGroup ) {
			var $buttonGroup = $( buttonGroup );
			$buttonGroup.on( 'click', 'button', function() {
				$buttonGroup.find('.is-checked').removeClass('is-checked');
				$( this ).addClass('is-checked');
		  });
		});


		var mapDiv = $('#map')[0];
		var map = new google.maps.Map(mapDiv, {
			center: {lat: 49.592552, lng: 34.547128},
			zoom: 10,
			scrollwheel: false
		});

		var marker = new google.maps.Marker({
			position: {lat: 49.592552, lng: 34.547128},
			map: map,
			icon: '../assets/img/img-1-thmb.jpg'
		});
		var infowindow = new google.maps.InfoWindow({
			content: "hello world"
		});
		  marker.addListener('click', function() {
    	infowindow.open(map, marker);
  });

	})
})(jQuery);
