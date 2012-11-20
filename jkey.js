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
	
	var down = [], up = [], downmatch = [], upmatch = [];
	
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
	
	$.fn.multikeydown = function( k, h ) {
		return this.bind('keyup keydown',
			function( e ) {
				multikey( e, 'keydown', k, h );
			} 
		)
	}
	
	
	$.fn.multikeyup = function( k, h ) {
		return this.bind('keyup keydown',
			function( e ) {
				multikey( e, 'keyup', k, h );
			} 
		)
	}
	
	function multikey ( e, t, k, h ) {
		var move, match;
		if ( e.type == 'keyup' ) {
			move = up;
			match = upmatch;
		} else {
			move = down;
			match = downmatch;
		}
		if ( e.type == t ){
			
			if( $.inArray( e.which, move ) == -1 ) {
				move.push( e.which );
			}
			keys = k.split(' ');
			for( var i in move ) {
				if( move[i] in map 
				&& $.inArray( map[move[i]], keys ) > -1 
				&& $.inArray( map[move[i]], match ) == -1 ){
					match.push( map[move[i]] );
				}
			}
			if( match.sort().join() == keys.sort().join() ){
				match = [], move = [];
				h.call( this, e );
			}
		} else {
			for( var i in move ) {
				if( e.which == move[i] ) {
					for( var z in match ){
						if( match[z] == map[move[i]] ){
							match.splice(z, 1);
						}
					}
					move.splice(i, 1);
				}
			}
		}
		if ( e.type == 'keyup' ) {
			up = move;
			upmatch = match;
		} else {
			down = move;
			downmatch = match;
		}
	}
	
	
	
})(jQuery, window, document);