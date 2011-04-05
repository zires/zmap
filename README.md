# Usage

First you need include jquery lib and google map scripts.

<script type="text/javascript" src="http://maps.google.com/maps/api/js?v=3.3&amp;sensor=false"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js" type="text/javascript"></script> 

Then include jquery.zmap lib script.
<script src="jquery.zmap.min.js" type="text/javascript"></script>

# Basic Usage:

HTML partial
<pre>
<div id="map" lat="-34.397" lng="150.644">Info Window Content.</div>
</pre>

script partial
<pre>
$(document).ready(function(){
	$("#map").zmap();    
}); 
</pre>
Have Fun!

# Examples

see examples dir for more details.

# Options

You can pass any google map support option.

* marker --- default true. You can pass custom google marker or a array contain lots of markers.
* infowindow --- default true. Only effect when marker set true. You can pass custom google infowindow object.
* before --- function(options){}. Callback before map initialize.
* after --- function(map){}. Callback after map created.






