jQuery( document ).ready( function( $ ){

	//Responsive menu
	/*
	$( '#main-menu' ).slicknav({

		label: 'Menu',
		appendTo: '.header-wrapper',
		init: function() {
			$( '.slicknav_btn' ).wrap( '<div class="slicknav-inner"><div class="slicknav-button-wrapper"></div></div>' );
			console.log($( '#main-menu' ) );
			//$( '.slicknav-inner' ).prepend( '<div class="site-title-mobile"><a href="' + wpVars.siteUrl + '">' + wpVars.logoImageTag + '</a></div>' );
		}
        
	});
	*/

	$( '.mobile-menu-toggle' ).on( 'click', function( e ) {

		e.preventDefault();

		$( 'body' ).toggleClass( 'mobile-menu-open' );

	});



	//Fix IE8-11 background:fixed mouse wheel scrolling bug
	$('body').on("mousewheel", function () {
		
		event.preventDefault();

		var wheelDelta = event.wheelDelta;

		var currentScrollPosition = window.pageYOffset;
		window.scrollTo(0, currentScrollPosition - wheelDelta);

	});


	//Sticky header
	if ( wpVars.headerIsSticky ) {
		var body = $( 'body');

		$( window ).scroll(function() {
				
			( $( this ).scrollTop() > 1 ) ? body.addClass( 'header-sticky' ) : body.removeClass( 'header-sticky' );
			
		});
	}

	//One page anchor's smooth scroll
	//Supports using #some-id as the url
	//or #some-text as url and the real ID as rel attribute (xfn)
	$( '.nav-menu a[href*=#]:not([href="#"])' ).click( function( e ) {

		if ( window.location.pathname == '/' ) {
			e.preventDefault();
		}

		var relAttribute = jQuery( this ).attr( 'rel' );
		var hrefAttribute = jQuery( this ).attr( 'href' ).substring( 1 );

		var itemIdByRel = jQuery( '#' + relAttribute );
		var itemIdByHref = jQuery( '#' + hrefAttribute );

		var destinationId = '';

		if ( itemIdByRel.length ) {
			destinationId = itemIdByRel;
		}
		else if ( itemIdByHref.length ) {
			destinationId = itemIdByHref;
		}

		if ( destinationId.length ) {

			jQuery( 'html, body' ).animate( {
				scrollTop: destinationId.offset().top - 75
			}, 1000);

			return false;

		}

	} );

});