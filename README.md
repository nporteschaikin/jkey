<h1>jKey</h1>
<p>Simplified key detection, including namespaces for commonly referenced keys and an event for simultaneous key presses. jQuery required.</p>
<h1>Keys supported</h1>
<code>
	return<br />
	esc<br />
	backspace<br />
	tab<br />
	ctrl<br />
	pageup<br />
	pagedown<br />
	home<br />
	larr (left arrow)<br />
	uarr (up arrow)<br />
	rarr (right arrow)<br />
	darr (down arrow)
</code>
<h1>Usage</h1>
<p>For single-key event</p>
<code>$('element').esc( function() { alert('foo') } )</code>
<p>For multi-key event</p>
<code>$('element').multikey('ctrl tab', function() { alert('foo') } )</code>