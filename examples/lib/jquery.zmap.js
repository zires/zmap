/*
 * zmap v0.0.1 
 * - jQuery plugin for creating Google Maps V3
 *
 * Author - t&zires
 * MIT License: http://www.opensource.org/licenses/mit-license.php
 * More 
 * - 
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
    };
  
  var dup = new Array();  
  return this.each(function(){
    // attribute lat and lng
    _default = {};
    if($(this).attr('lat')){
      _default.lat = $(this).attr('lat');
    }
    if($(this).attr('lng')){
      _default.lng = $(this).attr('lng');
    }
    $.extend(settings, _default);
    if(options){
      $.extend(settings, options);
    }
    settings.center = new google.maps.LatLng(parseFloat(settings.lat), parseFloat(settings.lng));
    //set diffient id
    if( $(this).attr('id') ){
      id = $(this).attr('id');
    }else{
      id = "zmap_" + ((new Date().getTime()) ^ Math.random());
    }
    $(this).attr('id', id);
    //map = new google.maps.Map(document.getElementById(id), settings);
  });

};  
})(jQuery);
