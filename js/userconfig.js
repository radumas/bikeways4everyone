/*
 * Central repository of options to change when forking this map!
 */

var config = {
	//Set Map Bounds & point map is centered around
	mapFocus : [41.68932225997044, -88.11035156249999],
	south : 36.73888412439431 ,
	west :  -91.7138671875,
	north : 42.71473218539458,
	east : -87.1875,
	//Mapbox access token & key for basemap
	mapboxAccessToken :
            'pk.eyJ1IjoiZWFzaGVybWEiLCJhIjoiY2oxcW51Nzk2MDBkbTJxcGUxdm85bW5xayJ9.7mL0wQ7cjifWwt5DrXMuJA',
    //Change to your username, insert function on cartodb, and cartodb tablename (see also /cartoDB_functions)
	cartoDBusername : 'easherma',
	cartoDBinsertfunction : 'insert_bikeways_data',
	walkthroughWelcome: "<p>This webmap allows you to view data collected by the <a href='http://bostoncyclistsunion.org/' target='_blank'>Boston Cyclists Union</a> on biking in Boston.</p><p>It also allows you to submit input on where biking infrastructure can be improved by drawing on the map! The map is restricted to the inner core of Metro Boston, where we concentrate our advocacy.</p>"
};
