(function($){
	
	var map = {
		13: 'return',
		27: 'esc',
		8: 'backspace',
		9: 'tab',
		17: 'ctrl',
		33: 'pageup',
		34: 'pagedown',
		36: 'home',
		37: 'larr',
		38: 'uarr',
		39: 'rarr',
		40: 'darr'
	}
	
	var keys = [];
	
	$.fn.return = function( h ) {
		return this.keydown( function( e ) { if ( e.which == 13 ) { h.call( this, e ) } } );
	};
	
	$.fn.esc = function( h ) {
		return this.keydown( function( e ) { if ( e.which == 27 ) { h.call( this, e ) } } );
	};
	
	$.fn.backspace = function( h ) {
		return this.keydown( function( e ) { if ( e.which == 8 ) { h.call( this, e ) } } );
	};
	
	$.fn.tab = function( h ) {
		return this.keydown( function( e ) { if ( e.which == 9 ) { h.call( this, e ) } } );
	};
	
	$.fn.ctrl = function( h ) {
		return this.keydown( function( e ) { if ( e.which == 17 ) { h.call( this, e ) } } );
	};
	
	$.fn.pageup = function( h ) {
		return this.keydown( function( e ) { if ( e.which == 33 ) { h.call( this, e ) } } );
	};
	
	$.fn.pagedown = function( h ) {
		return this.keydown( function( e ) { if ( e.which == 34 ) { h.call( this, e ) } } );
	};
	
	$.fn.home = function( h ) {
		return this.keydown( function( e ) { if ( e.which == 36 ) { h.call( this, e ) } } );
	};
	
	$.fn.larr = function( h ) {
		return this.keydown( function( e ) { if ( e.which == 37 ) { h.call( this, e ) } } );
	};
	
	$.fn.uarr = function( h ) {
		return this.keydown( function( e ) { if ( e.which == 38 ) { h.call( this, e ) } } );
	};
	
	$.fn.rarr = function( h ) {
		return this.keydown( function( e ) { if ( e.which == 39 ) { h.call( this, e ) } } );
	};
	
	$.fn.darr = function( h ) {
		return this.keydown( function( e ) { if ( e.which == 40 ) { h.call( this, e ) } } );
	};
	
	$.fn.multikey = function( k, h ) {
		return this.bind('keyup keydown',
			function( e ) {
				if ( e.type == 'keydown' ){
					if( $.inArray( e.which, keys ) == -1 ) {
						keys.push( e.which );
						press = k.split(' ');
						for( var i in press ) {
							
						}
					}
					$('body').html(keys);
				} else if ( e.type == 'keyup' ) {
					keys = [];
				}
			} 
		)
	}
	
	
	
})(jQuery, window, document);