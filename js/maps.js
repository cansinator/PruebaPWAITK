function initMap() {
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  function success(pos) {
    var crd = pos.coords;
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
      mapTypeId: 'roadmap'
    };


    map = new google.maps.Map(document.getElementById("map"), mapOptions);
//18.090219, -96.136783
//crd.latitude, crd.longitude
    var markers = [

      ['Yo', 18.090219, -96.136783, '~/../../img/favicon.png', '<div class="info_content"><h3>862465 - JUAN CARLOS CANSINO MARTINEZ</h3><p>PROMOACTIVADOR</p></div>'],
      ['Bodega Aurrera', 18.090689, -96.133418, '~/../../img/bodegaaurrera.png', '<div class="info_content"><h3>441180 - BODEGA AURRERA</h3><p>TUXTEPEC - OAXACA - BLVD BENITO JUAREZ</p></div>'],
      ['Chedraui', 18.091860, -96.131017, '~/../../img/chedraui.png', '<div class="info_content"><h3>380042 - CHEDRAUI</h3><p>TUXTEPEC - BLVD. BENITO JUAREZ </p></div>'],
      ['Sams', 18.091146, -96.132068, '~/../../img/sams.png', '<div class="info_content"><h3>746277 - SAMS</h3><p>SAMS TUXTEPEC - AVENIDA 5 DE MAYO</p></div>']
    ];

    var infoWindow = new google.maps.InfoWindow(), marker, i;

    for (i = 0; i < markers.length; i++) {
      var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
      bounds.extend(position);
      marker = new google.maps.Marker({
        position: position,
        map: map,
        title: markers[i][0],
        icon: markers[i][3],
        animation: google.maps.Animation.DROP,
      });

      google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
          infoWindow.setContent(markers[i][4]);
          infoWindow.open(map, marker);
        }
      })(marker, i));
    }

    map.fitBounds(bounds);
  };

  function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };

  navigator.geolocation.getCurrentPosition(success, error, options);
}

