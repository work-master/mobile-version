$(document).ready(function(){

	//Меню
	$('#menu-button, #overlay, #close-button').on('click', function() {
		$('#overlay').toggleClass('overlay_active');
		$('#menu').toggleClass('menu_active');
  });

	//Ползунок фильтра цены
	$( "#slider-range" ).slider({
      range: true,
      min: 5,
      max: 150,
      values: [ 5, 150 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.values[ 0 ] + " EUR" + " - " + ui.values[ 1 ] + " EUR" );
      }
    });
    $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) +
      " EUR - " + $( "#slider-range" ).slider( "values", 1 ) + " EUR" );

  //Календарь
  $('#date').fullCalendar({});

  $('#date').hide();
  $('#date-input').on('click', function() {
  	$('#date').fadeIn();
  });

});