/*
 * zmap v0.0.1 
 * - jQuery plugin for creating Google Maps V3
 *
 * Author - t&zires
 * MIT License: http://www.opensource.org/licenses/mit-license.php
 * More 
 * -https://github.com/zires/zmap 
 */

(function($){
  
 var timeToInteger = function(){
    return (new Date().getTime()) ^ Math.random();
 };

 $.fn.zmap = function(options){
 // default settings 
  var settings = {
    zoom : 8,
    mapTypeId : google.maps.MapTypeId.ROADMAP,
    lat : '0',
    lng : '0',
    marker : true,
    infowindow : true
    };
  
  var dup = [timeToInteger()];  
  
  function addMarker(marker, map){
    for (i in marker) {
      marker[i].setMap(map);
    }
  };
  
  function addInfoWindow (options, marker, map) {
    var infowindow;
    if (options.infowindow instanceof google.maps.InfoWindow) {
      infowindow = options.infowindow;
    }else{
      infowindow = new google.maps.InfoWindow({
        content : options.infoContent   
      });
    }
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });
  };

  return this.each(function(){
    // attribute lat and lng
    _default = {};
    if($(this).attr('lat')){
      _default.lat = $(this).attr('lat');
    }
    if($(this).attr('lng')){
      _default.lng = $(this).attr('lng');
    }
    _default.address = $(this).text();
    _default.infoContent = $(this).text();
    $.extend(settings, _default);
    if(options){
      $.extend(settings, options);
    }
    latlng = new google.maps.LatLng(parseFloat(settings.lat), parseFloat(settings.lng));
    settings.center = latlng; 
    //set diffient id
    if( $(this).attr('id') ){
      id = $(this).attr('id');
    }else{
      rand = dup.pop() + 1;
      id = "zmap_" + rand;
      dup.push(rand);
    }
    $(this).attr('id', id);
    map = new google.maps.Map(document.getElementById(id), settings);
    // set marker if need
    var marker = [];
    if (settings.marker) {
      if (settings.marker == true) {
        _marker = new google.maps.Marker({
          position : latlng,
          title : settings.address
        });
        // set info window if need
        if (settings.infowindow) {
          addInfoWindow(settings, _marker, map);
        }
        marker.push(_marker);
      }else if ($.isArray(settings.marker)) {
        marker = settings.marker;
      }else{
        marker.push(settings.marker);
      }
      addMarker(marker, map);
    };
  });
};  
})(jQuery);
