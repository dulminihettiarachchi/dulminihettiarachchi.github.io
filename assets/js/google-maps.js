function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 6.8566791, lng: 80.2233214};

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