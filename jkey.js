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
	
	var down = [], match = [];
	
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
					if( $.inArray( e.which, down ) == -1 ) {
						down.push( e.which );
					}
					keys = k.split(' ');
					for( var i in down ) {
						if( down[i] in map 
						&& $.inArray( map[down[i]], keys ) > -1 
						&& $.inArray( map[down[i]], match ) == -1 ){
							match.push(map[down[i]]);
						}
					}
					if( match.sort().join() == keys.sort().join() ){
						h.call( this, e );
					}
				} else if ( e.type == 'keyup' ) {
					for( var i in down ) {
						if( e.which == down[i] ) {
							for( var z in match ){
								if( match[z] == map[down[i]] ){
									match.splice(z, 1);
								}
							}
							down.splice(i, 1);
						}
					}
				}
			} 
		)
	}
	
	
	
})(jQuery, window, document);