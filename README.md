# Usage

First you need include jquery(>1.3) lib and google map(v3) scripts.
Then include jquery.zmap lib script.

    <script type="text/javascript" src="http://maps.google.com/maps/api/js?v=3.3&amp;sensor=false"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js" type="text/javascript"></script> 
    
    <script src="jquery.zmap.min.js" type="text/javascript"></script>

## Basic Usage:

HTML partial.
    <div id="map" lat="-34.397" lng="150.644">Info Window Content.</div>

script partial
<pre>
  $(document).ready(function(){
      $("#map").zmap();    
  }); 
</pre>
Have Fun!

# Examples

see examples dir for more details. 
[example demo](http://zires.github.com/zmap/example)

# Options

You can pass any google map support option.

* marker --- default true. You can pass custom google marker or a array contain lots of markers.
* infowindow --- default true. Only effect when marker set true. You can pass custom google infowindow object.
* before --- function(options){}. Callback before map initialize.
* after --- function(map){}. Callback after map created.
* lat --- special lat value.
* lng --- special lng value.
* address --- default is your map div container text. special address.
* infoContent --- default is your map div container text. special info window content.






