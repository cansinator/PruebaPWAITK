let tbTiendas = new Tiendas();
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

    tbTiendas.AgregaRegistro(0, 'CHEDRAUI', '', 38, 'PROMOACTIVADOR', '', 16, 'ZONA 16', 862465, 'JUAN CARLOS CANSINO MARTINEZ', 18.090219, -96.136783, '~/../../img/favicon.png');
    tbTiendas.AgregaRegistro(1, 'CHEDRAUI', '', 38, 'CHEDRAUI', '', 16, 'ZONA 16', 380042, 'TUXTEPEC', 18.091860, -96.131017, '~/../../img/chedraui.png');
    tbTiendas.AgregaRegistro(2, 'WALMART', '', 34, 'MEDIMART', '', 16, 'ZONA 16', 441180, 'TUXTEPEC - OAXACA', 18.090689, -96.133418, '~/../../img/bodegaaurrera.png');
    tbTiendas.AgregaRegistro(2, 'WALMART', '', 34, 'MEDIMART', '', 16, 'ZONA 16', 746277, 'SAMS TUXTEPEC', 18.091146, -96.132068, '~/../../img/sams.png');

    UbicaAutoServiciosCercanos(crd.latitude, crd.longitude).then(markers => {

      map = new google.maps.Map(document.getElementById("map"), mapOptions);
      //18.090219, -96.136783
      //crd.latitude, crd.longitude

      for (i = 0; i < markers.length; i++) {
        
        var position = new google.maps.LatLng(markers[i].longitud, markers[i].latitud);
        var waypts = [{ location: { lat: markers[i].latitud, lng: markers[i].longitud }, stopover: true }];

        bounds.extend(position);
        marker = new google.maps.Marker({
          position: position,
          map: map,
          title: markers[i].formatoNombre,                                              
          icon: markers[i].rutaImagen,
          animation: google.maps.Animation.DROP,
        });
        
        var ventana = '<div class="info_content"><h3>' + markers[i].tiendaId + ' - ' + markers[i].tiendaNombre + '</h3><p>' + markers[i].zonaNombre + '</p></div>'
        var infoWindow = new google.maps.InfoWindow(), marker, i;

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
          return function () {
            infoWindow.setContent(ventana);
            infoWindow.open(map, marker);
          }
        })(marker, i));
      }
      map.fitBounds(bounds);

    });
  };

  function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };

  navigator.geolocation.getCurrentPosition(success, error, options);
}


function UbicaAutoServiciosCercanos(lon, lat) {
  var db = new PouchDB('ITK');

  lon = parseInt(lon);
  lat = parseInt(lat);
  lonMax = lon + 1;
  latMax = lat - 1;

  let suc = new Array();
  var promesa = new Promise((resolve, reject) => {
    db.allDocs({ include_docs: true, descending: false })
      .then(doc => {
        doc.rows.forEach(element => {
          if (element.doc.table == "Tiendas"
            || ((element.doc.longitud >= lon && element.doc.longitud < lonMax)
              || (element.doc.latitud <= lat && element.doc.latitud > latMax))
            || (element.doc.latitud == lat && element.doc.latitud == latMax)) {
            suc.push(element.doc);
          }
        });
        resolve(suc);
      });
  });
  return promesa;
}
