function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 6.856591, lng: 80.2481894};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Eheliyagoda SL' // Title Location
    });
}